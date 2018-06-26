<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .home-check-card {
        width: 1040px;

        .check-head {
            padding: 0 14px;
            font-size: 16px;
            color: #333;
            line-height: 40px;
            border-bottom: 1px solid #e0e0e0;
            margin-bottom: 10px;

            .back {
                color: $shopBgColor;
                cursor: pointer;
            }
        }

        .check-wares {
            background: #fff;
            padding: 20px;
            width: 100%;
            background: #fff;

            .cover-box {
                float: left;
                width: 660px;
                height: 660px;
                margin-right: 20px;

                img {
                    cursor: pointer;
                    width: 100%;
                    height: 100%;
                }
            }

            .img-list {
                float: left;
                width: 320px;
                height: 100%;
                font-size: 0;

                img {
                    cursor: pointer;
                    width: 100%;
                    height: 330px;
                    padding-bottom: 20px;

                    &:last-child {
                        padding-bottom: 0;
                    }
                }
            }
        }
    }

    .check-auction {
        padding: 20px 0;

        .result-list {
            margin-bottom: 20px;

            button {
                background: #fff;
                border: 1px solid #e0e0e0;
                color: #989898;
                border-radius: 4px;
                width: 80px;
                padding: 10px 0;
                font-size: 18px;
                text-align: center;
                margin-right: 20px;
                outline: none;
                cursor: pointer;
            }

            button.active {
                background: #EDA54A;
                border: 1px solid #EDA54A;
                color: #fff;
            }
        }

        .result-desc {
            margin-bottom: 20px;

            textarea {
                width: 100%;
                height: 170px;
                background: #fff;
                border: 1px solid #e0e0e0;
                padding: 10px 20px;
                resize: none;
                outline: none;
            }
        }

        .result-confirm {
            text-align: right;

            button {
                width: 90px;
                height: 32px;
                text-align: center;
                color: #fff;
                border-radius: 4px;
                background: $themeColor;
                border: none;
                outline: none;
                cursor: pointer;

                &:active {
                    background: red;
                }
            }
        }
    }

    .theme-font {
        color: $themeColor;
    }

    .img-preview {
        z-index: 9999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.34);

        .img-box {
            position: absolute;
            width: 900px;
            height: 900px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
<template>
    <div class="home-check-card" v-loading="loading">
        <div class="check-head">
            <p class="back" @click="$emit('toBack')">&lt;&lt;返回列表</p>
        </div>
        <div class="check-wares clearfix">
            <div class="cover-box">
                <img @click="showImg(photos[0])" :src="photos[0]" alt="">
            </div>
            <div class="img-list">
                <img @click="showImg(photos[1])" :src="photos[1]" alt="">
                <img @click="showImg(photos[2])" :src="photos[2]" alt="">
            </div>
        </div>
        <div class="check-auction">
            <p class="result-list">
                <button @click="result='真品'" :class="{active:result==='真品'}">真品</button>
                <button @click="result='假货'" :class="{active:result==='假货'}">假货</button>
                <button @click="result='其他'" :class="{active:result==='其他'}">其他</button>
            </p>
            <p class="result-desc">
                <textarea v-model="desc" placeholder="输入补充说明"></textarea>
            </p>
            <p class="result-confirm">
                <button @click="confirm">提交</button>
            </p>
        </div>
        <div class="img-preview" v-if="showPre" @click.self="showPre=false">
            <div class="img-box">
                <img :src="cover" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    import { appraise } from '../../api/auction'
    export default {
        name: 'PersonlCenterAppraise',
        props: {
            appraise: {
                required: true
            }
        },
        data() {
            return {
                loading: false,
                desc: '',
                result: '',
                cover: '',
                showPre: false
            }
        },
        computed: {
            photos() {
                return this.appraise.photos || []
            },
            user() {
                return this.appraise.user || {}
            }
        },
        created() {
        },
        methods: {
            showImg(img) {
                this.cover = img
                this.showPre = true
            },
            confirm() {
                if (!this.result) {
                    this.$message.error('请选择鉴定结果')
                    return
                }
                this.loading = true
                appraise(this.appraise.id, {
                    result: this.result,
                    resultIntro: this.desc
                }).then((res) => {
                    console.log(res)
                    this.loading = true
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            }
        }
    }
</script>
