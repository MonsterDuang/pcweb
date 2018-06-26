<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .home-check-card {
        background: #fff;
        width: 590px;

        .check-head {
            height: 110px;
            padding: 14px;
            font-size: 16px;
            color: #333;
            line-height: 40px;

            p {
                text-wrap();
                width: 100%;
            }

            .user-port {
                line-height: 52px;

                img {
                    vertical-align: middle;
                    width: 52px;
                    height: 52px;
                    margin-right: 16px;
                }
            }
        }

        .check-wares {
            height: 350px;
            width: 100%;
            background: #fff;

            .cover-box {
                float: left;
                width: 340px;
                height: 340px;
                margin-right: 10px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .img-list {
                float: left;
                width: 160px;
                height: 100%;
                font-size: 0;

                img {
                    width: 100%;
                    height: 170px;
                    padding-bottom: 10px;

                    &:last-child {
                        padding-bottom: 0;
                    }
                }
            }
        }

        .check-auction {
            font-size: 16px;
            line-height: 40px;
            padding: 10px 0;
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
                margin-right: 20px;

                &:active {
                    background: red;
                }
            }
        }

        .check-result {
            height: 110px;
            font-size: 16px;
            line-height: 40px;
            padding: 20px;

            p {
                text-warp();
            }
        }
    }

    .theme-font {
        color: $themeColor;
    }
</style>
<template>
    <div class="home-check-card" :style="{width:width+'px'}">
        <div class="check-head">
            <div class="user-port">
                <img :src="user.avatar" :alt="user.avatarKey">
                <span v-text="user.nickname"></span>
            </div>
            <p v-text="check.questions"></p>
        </div>
        <div class="check-wares clearfix">
            <div class="cover-box">
                <img :src="photos[0]" alt="">
            </div>
            <div class="img-list">
                <img :src="photos[1]" alt="">
                <img :src="photos[2]" alt="">
            </div>
        </div>
        <div v-if="check.status === 'did-not'" class="check-auction">
            <button class="btn" @click="toAppraise">去鉴定</button>
        </div>
        <div v-else class="check-result">
            <p>鉴定结果：
                <span v-if="!check.result">未鉴定完成</span>
                <span v-else class="theme-font" v-text="check.result"></span>
            </p>
            <p>
                <span>鉴定师({{check.user.nickname}})：</span>
                <span v-text="check.resultIntro"></span>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PersonlCenterAppraisalCard',
        props: {
            width: {
                default: 590
            },
            check: {
                type: Object,
                required: true
            }
        },
        computed: {
            photos() {
                return this.check.photos || []
            },
            user() {
                return this.check.user || {}
            }
        },
        methods: {
            toAppraise() {
                this.$emit('toDetail', this.check)
            }
        }
    }
</script>
