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
            text-align: center;
            background: #d6d6d6;

            img {
                width: 100%;
                height: 100%;
                object-fit: scale-down;
            }
        }

        .check-result {
            height: 110px;
            font-size: 16px;
            line-height: 40px;
            padding: 20px;

            p {
                span {
                    text-wrap();
                    display inline-block
                    width 100%
                }
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
        <div class="check-wares">
            <img :src="photos[0]" alt="">
        </div>
        <div class="check-result">
            <p>鉴定结果：
                <span v-show="check.status === 'did-not'">未鉴定完成</span>
                <span v-show="check.status === 'did'" class="theme-font" v-text="check.result"></span>
            </p>
            <p v-if="check.status === 'did'">
                <span>鉴定师({{appraiser.user.nickname}})：</span>
                <span v-text="check.resultIntro"></span>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomeCheckCard',
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
            },
            appraiser() {
                return this.check.appraiser || { user: {} }
            }
        }
    }
</script>
