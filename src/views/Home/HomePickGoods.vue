<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .shop-wares-detail-view {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .wares-box {
        background: #fff;
        padding: 20px;

        .wares-imgs {
            float: left;
            width: 790px;

            .wares-great-img {
                float: left;
                width: 661px;
                height: 660px;
                background: #e0e0e0;
                margin-right: 9px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .wares-img-list {
                float: left;
                width: 120px;

                div {
                    cursor: pointer;
                    width: 100%;
                    height: 102px;
                    background: #e0e0e0;
                    margin-bottom: 9.5px;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

        .wares-state {
            float: left;
            margin-left: 20px;
            width: 350px;

            .wares-main {
                border-bottom: 1px solid #e8e8e8;
                line-height: 30px;

                .wares-name {
                    font-size: 16px;
                    color: #333;
                    text-wrap();
                    padding-bottom: 10px;
                }

                .wares-price {
                    color: $themeColor;
                    font-size: 18px;
                }

                .wares-promise {
                    padding: 15px 0;

                    span {
                        padding-right: 10px;
                        color: #a3a3a3;
                        font-size: 16px;

                        i {
                            display: inline-block;
                            width: 28px;
                            height: 28px;
                            vertical-align: top;
                        }

                        .icon-just {
                            background: url('../../assets/img/122.png') no-repeat center;
                        }

                        .icon-seven {
                            background: url('../../assets/img/123.png') no-repeat center;
                        }
                    }
                }
            }

            .wares-params {
                padding: 25px 0;
                font-size: 16px;
                line-height: 36px;
                width: 100%;
                height: 469px;

                p {
                    width: 100%;
                }

                .params-key {
                    color: #969696;
                }

                .params-val {
                    color: #333;
                }
            }
        }

        .wares-amount {
            margin-top: 20px;

            .amount-box {
                float: left;

                .amount-cut, .amount-add {
                    cursor: pointer;
                    text-align: center;
                    vertical-align: middle;
                }

                .amount-cut {
                    background: #fff;
                    color: #c8c8c8;
                    font-size: 34px;
                }

                .amount {
                    display: inline-block;
                    min-width: 40px;
                    text-align: center;
                    vertical-align: text-bottom;
                }

                .amount-add {
                    border-radius: 50%;
                    width: 28px;
                    height: 28px;
                    background: $themeColor;
                    font-size: 20px;
                    line-height: 28px;
                    color: #fff;
                    text-align: center;
                }
            }

            .buy button {
                float: right;
                width: 120px;
                height: 40px;
                font-size: 18px;
                color: #ffffff;
                line-height: 30px;
                text-align: center;
                background: $themeColor;
                border: 1px solid $themeColor;
                outline: none;
                cursor: pointer;
            }
        }
    }

    .goods-desc {
        padding-left: 8px;
    }
</style>
<template>
    <div class="shop-wares-detail-view">
        <div class="container" v-loading="loading">
            <div class="wares-box clearfix">
                <div class="wares-imgs clearfix">
                    <div class="wares-great-img">
                        <img :src="currCover" :alt="goods.name">
                    </div>
                    <div class="wares-img-list">
                        <div @click="changeCover(img)" v-for="img in goods.photos" :key="img"><img :src="img" :alt="goods.name"></div>
                    </div>
                </div>
                <div class="wares-state">
                    <div class="wares-main">
                        <p class="wares-name" v-text="goods.name"></p>
                        <p class="wares-price">结缘价：¥{{goods.price}}</p>
                        <p class="wares-promise">
                            <span>
                                <i class="icon-just"></i> 绝对正品</span>
                            <span>
                                <i class="icon-seven"></i> 七天自由退换</span>
                        </p>
                    </div>
                    <div class="wares-params">
                        <p>
                            <span class="params-key">【库存】</span>
                            <span class="params-val">{{goods.stock}}件</span>
                        </p>
                        <p v-for="prop in goods.props" :key="prop._id">
                            <span class="params-key">【{{prop.name}}】</span>
                            <span class="params-val">{{prop.val}}</span>
                        </p>
                        <p class="goods-desc" v-text="goods.description"></p>
                    </div>
                    <div class="wares-amount clearfix">
                        <div class="amount-box">
                            <span @click="cut" class="amount-cut el-icon-remove"></span>
                            <span class="amount" v-text="amount"></span>
                            <span @click="add" class="amount-add el-icon-plus"></span>
                        </div>
                        <div class="buy">
                            <button @click="buy">立即购买</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BaseWaresCard from "../../components/base/BaseWaresCard.vue";
    import { getGoodsDetail } from '../../api/common'
    export default {
        name: 'HomePickGoods',
        components: {
            BaseWaresCard
        },
        props: {
            goodsID: {
                required: true
            }
        },
        data() {
            return {
                amount: 0,
                goods: {},
                goodsList: [],
                currCover: '',
                loading: true
            }
        },
        created() {
            this.goodsDetail();
        },
        methods: {
            add() {
                this.amount++
            },
            cut() {
                if (this.amount <= 0) {
                    return
                }
                this.amount--
            },
            buy() {
                if (this.amount <= 0) {
                    return this.$message.error('请选择商品数量')
                }
                this.$router.push({ name: 'settleConfirm', params: { goodsID: this.goodsID, num: this.amount } })
            },
            changeCover(img) {
                this.currCover = img;
            },
            goodsDetail(goodsID) {
                this.loading = true
                getGoodsDetail(goodsID || this.goodsID).then((res) => {
                    this.goods = res.data
                    this.currCover = this.goods.photos[0];
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            }
        }
    }
</script>
