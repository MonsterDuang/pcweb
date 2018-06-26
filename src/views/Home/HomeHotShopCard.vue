<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .home-hotShop-card {
        width: 596px;
        border: 1px solid #e0e0e0;
        padding: 9px;
        background: #fff;
        position: relative;
    }

    .shop-info {
        height: 80px;
        width: 100%;

        .shop-logo {
            float: left;
            width: 80px;
            height: 80px;
            background: #d6d6d6;
            text-align: center;
            line-height: 80px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .info-box {
            float: left;
            padding-left: 14px;
            width: 482px;

            .shop-name {
                font-size: 18px;
                color: #333;
                vertical-align: middle;
                line-height: 30px;

                .icon-auth {
                    margin-left: 20px;
                    display: inline-block;
                    vertical-align: middle;
                    width: 50px;
                    height: 20px;
                    background: #21ad39 url('../../assets/img/117.png') no-repeat center;
                    border-radius: 4px;
                }
            }

            .shop-nums, .shop-location {
                color: #818181;
                font-size: 14px;
                line-height: 25px;
            }

            .shop-location {
                a {
                    float: right;
                    color: #65adb2;
                    cursor: pointer;
                }
            }
        }
    }

    .shop-wares {
        width: 576px;
        height: 300px;
        margin-top: 9px;
        overflow: hidden;
        position: relative;

        .left-arrow {
            z-index: 20;
            cursor: pointer;
            position: absolute;
            top: 135px;
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
            top: 135px;
            right: 0;
            width: 20px;
            height: 30px;
            background: #c3c3c3 url('../../assets/img/050.png') no-repeat center;
            transform: rotateY(180deg);
            background-size: 50%;
        }

        .wares-list {
            height: 100%;
            transition: transform 0.36s;

            .wares-img {
                width: 576px;
                height: 300px;
                float: left;
                text-align: center;
                background: #d6d6d6;
                cursor: pointer;

                // border: 1px solid #e0e0e0;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: scale-down;
                }
            }
        }
    }

    .enlarge-view {
        position: absolute;
        top: -1px;
        left: 595px;
        width: 606px;
        height: 409px;
        border: 1px solid #bbb;
        overflow: hidden;
        z-index: 10;

        img {
            position: absolute;
            top: 0;
            left: 0;
            // width: 1212px;
            // height: 818px;
            width: 100%;
            height: 100%;
        }
    }
</style>
<template>
    <div class="home-hotShop-card">
        <div class="shop-info clearfix">
            <div class="shop-logo">
                <img v-if="shop.logo" :src="shop.logo" alt="">
                <img v-else src="../../assets/img/shopLogo.png" alt="">
            </div>
            <div class="info-box">
                <p class="shop-name">{{shop.name}}
                    <span class="icon-auth"></span>
                </p>
                <p class="shop-nums">{{shop.pv}}人来逛过</p>
                <p class="clearfix shop-location">
                    <span v-if="address && address.province && address.city">所在地：{{address.province+address.city}}</span>
                    <router-link class="shop-url" :to="{name: 'shopIndex',params:{shopID:shop.id}}">>>店铺首页</router-link>
                </p>
            </div>
        </div>
        <div class="shop-wares">
            <div class="left-arrow" v-show="currImgIndex>0&&len>1" @click="prev"></div>
            <div class="wares-view" @mousemove="showEnlarge=true" @mouseout="showEnlarge=false">
                <div class="wares-list clearfix" :style="{width:len*576+'px',transform: `translateX(${offset}px)`}">
                    <div class="wares-img" v-for="goods in shop.hotGoods" @click="toWares(goods)" :key="goods.id"><img :src="goods.photos[0]" :alt="goods.name"></div>
                </div>
            </div>
            <div class="right-arrow" v-show="currImgIndex<len-1" @click="next"></div>
            <div class="magnifier"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomeHotShopCard',
        props: {
            shop: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                currImgIndex: 0,
                showEnlarge: false
            }
        },
        computed: {
            len() {
                return this.shop.hotGoods.length
            },
            offset() {
                return (this.currImgIndex * -576)
            },
            address() {
                return this.shop.address || {}
            }
        },
        methods: {
            toWares(goods) {
                this.$router.push({ name: "waresDetail", params: { goodsID: goods.id, shopID: this.shop.id } })
            },
            prev() {
                this.currImgIndex -= 1
            },
            next() {
                this.currImgIndex += 1
            }
        }
    }
</script>
