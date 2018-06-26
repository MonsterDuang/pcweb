<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .business-card {
        display: inline-block;
        width: 596px;
        height: 580px;
        border: 1px solid #e0e0e0;
        overflow: hidden;
        background: #fff;

        .business-head {
            height: 62px;
            padding: 8px 8px 0;

            span {
                font-size: 20px;
                color: #333333;
                line-height: 52px;
                vertical-align: middle;
                padding-left: 10px;
            }

            img {
                vertical-align: middle;
                width: 52px;
                height: 100%;
                border-radius: 50%;
                overflow: hidden;
            }
        }

        .business-live {
            margin: 8px;
            position: relative;
            border: 1px solid #eaeaea;
            overflow: hidden;

            .live-frames {
                position: relative;
                width: 100%;
                height: 100%;
                background: #d6d6d6;
                height: 300px;
                z-index: 9;

                .play-box {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url('../../assets/img/058.png') no-repeat center;
                    background-size: 10%;
                    cursor: pointer;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: scale-down;
                }
            }

            .live-mask {
                play-mask();
            }
        }

        .business-info {
            height: 198px;

            .info-box {
                float: left;
                height: 100%;
                width: 130px;
                background: #e0e0e0;
                text-align: center;
                font-size: 14px;
                cursor: pointer;

                .business-logo {
                    height: 80px;
                    width: 110px;
                    background: #fff;
                    margin: 45px auto 28px;
                    overflow: hidden;

                    img {
                        height: 80px;
                        width: 110px;
                        object-fit: scale-down;
                    }
                }

                p {
                    text-wrap();
                    text-align: center;
                    margin: 0 auto;
                    width: 80%;
                }
            }

            .business-wares {
                float: left;
                margin-left: 8px;
                width: 446px;
                height: 100%;
                position: relative;
                overflow: hidden;

                .left-arrow {
                    z-index: 20;
                    cursor: pointer;
                    position: absolute;
                    top: 55px;
                    left: 0;
                    width: 20px;
                    height: 30px;
                    background: #c3c3c3 url('../../assets/img/050.png') no-repeat center;
                    background-size: 50%;
                }

                .right-arrow {
                    z-index: 20;
                    cursor: pointer;
                    position: absolute;
                    top: 55px;
                    right: 0;
                    width: 20px;
                    height: 30px;
                    background: #c3c3c3 url('../../assets/img/050.png') no-repeat center;
                    transform: rotateY(180deg);
                    background-size: 50%;
                }

                .wares-block {
                    height: 100%;
                    overflow: hidden;
                }

                .wares-list {
                    height: 100%;
                    transition: transform 0.3s;

                    .wares-box {
                        float: left;
                        margin-right: 10px;
                        width: 142px;
                        height: 100%;

                        .wares-img {
                            background: #f4f4f4;
                            width: 100%;
                            height: 150px;
                            margin-bottom: 4px;
                            text-align: center;

                            img {
                                // width: 100%;
                                height: 100%;
                            }
                        }

                        p {
                            padding-left: 10px;
                            font-size: 12px;
                            line-height: 16px;
                            text-wrap();
                        }

                        .wares-money {
                            color: $themeColor;
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="business-card">
        <div class="business-head">
            <img src="../../assets/img/03.png" alt="">
            <span v-text="lvs.title"></span>
        </div>
        <div class="business-live">
            <div class="live-frames">
                <img :src="lvs.cover">
                <div @click="openPlay" class="play-box"></div>
            </div>
            <div v-show="showMask" class="live-mask clearfix">
                <div class="close-box">
                    <span @click="clsoePlay" class="icon-close"></span>
                </div>
                <img src="../../assets/img/qrcode.png" alt="">
                <p>扫描二维码，下载手机APP才可以互动哦!</p>
            </div>
        </div>
        <div class="business-info clearfix">
            <div class="info-box" @click="toShop">
                <div class="business-logo">
                    <img v-if="lvs.shop && lvs.shop.logo" :src="lvs.shop.logo" alt="">
                    <img v-else src="../../assets/img/logo.png" alt="">
                </div>
                <p v-text="lvs.shop.name"></p>
            </div>
            <div class="business-wares">
                <div v-show="showLeft&&waresLen>3" @click="leftOffset" class="left-arrow"></div>
                <div class="wares-block">
                    <div :style="{width:(waresLen*152)+'px',transform:`translateX(${offset}px)`}" class="wares-list clearfix">
                        <div class="wares-box" v-for="wares in goods" @click="toGoodsDetail(wares.id)">
                            <div class="wares-img">
                                <img :src="wares.photos[0]">
                            </div>
                            <p v-text="wares.name"></p>
                            <p class="wares-money">¥{{wares.price}}</p>
                        </div>
                    </div>
                </div>
                <div v-show="showRight&&waresLen>3" @click="rightOffset" class="right-arrow"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { getLvsGoods } from '../../api/lvs'
    export default {
        name: "HomeBusinessCard",
        props: {
            lvs: {
                required: true,
                type: Object
            }
        },
        data() {
            return {
                showMask: false,
                offset: 0,
                showLeft: true,
                showRight: false
            };
        },
        computed: {
            goods() {
                return this.lvs.goods || []
            },
            waresLen() {
                return this.goods.length
            }
        },
        created() {

        },
        methods: {
            toGoodsDetail() {

            },
            getShopGoods() {
                getLvsGoods(this.lvs.shop.id).then((res) => {
                    console.log(res)
                    this.goods = res.data || []
                    this.waresLen = this.goods.length
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            toShop() {
                if (this.lvs.shop && this.lvs.shop.id) {
                    this.$router.push({ name: 'shopIndex', params: { shopID: this.lvs.shop.id } })
                }
            },
            openPlay() {
                this.showMask = true;
            },
            clsoePlay() {
                this.showMask = false;
            },
            leftOffset() {
                this.offset -= 152;
                if (this.offset - 152 < (this.waresLen - 3) * 152 * -1) {
                    this.showLeft = false;
                    this.showRight = true;
                }
            },
            rightOffset() {
                this.offset += 152;
                if (this.offset + 152 > 0) {
                    this.showRight = false;
                    this.showLeft = true;
                }
            }
        }
    };
</script>
