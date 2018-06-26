<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .wares-card {
        width: 232.5px;

        .wares-img {
            background: #d6d6dd;
            height: 232.5px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &:hover .wares-info {
            background: #4fa2a9;

            .wares-name {
                color: #ffffff;
            }

            .wares-worth {
                span, .wares-money {
                    color: #fff;
                }
            }
        }

        .white {
            background: #fff;
        }

        .black {
            background: #f4f4f4;
        }

        .wares-info {
            transition: background 0.43s;
            padding: 20px;
            height: 80px;

            .wares-name {
                text-wrap();
                font-size: 14px;
                margin-bottom: 20px;
                transition: color 0.43s;
            }

            .wares-worth {
                font-size: 12px;

                span {
                    float: right;
                    color: #d6d6d6;
                    transition: color 0.43s;
                }

                span.wares-money {
                    float: left;
                    color: $themeColor;
                }
            }
        }
    }
</style>
<template>
    <div class="wares-card" :style="{width:width+'px'}">
        <div class="wares-img">
            <img src="" alt="">
        </div>
        <div class="wares-info" :class="infoBg">
            <p class="wares-name">商名名称</p>
            <p class="wares-worth  clearfix">
                <span class="wares-money">¥800.00</span>
                <span>300人已买</span>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "BaseWaresCard",
        props: {
            width: {
                type: Number,
                default: 232.5
            },
            infoBg: {
                type: String,
                default: 'white'
            }
        },
        data() {
            return {};
        }
    };
</script>
