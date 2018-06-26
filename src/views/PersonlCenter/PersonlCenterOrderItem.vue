<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .order-item {
        width: 961px;
        height: 150px;
        border: 1px solid #efefef;
        margin-top: 12px;
    }

    .item-head {
        background: #e5f2f3;
        height: 49px;
        line-height: 49px;
        padding-left: 14px;
        font-size: 14px;
        color: #333;

        &.complete {
            background: #f4f4f4;
        }

        span {
            padding-right: 20px;
        }
    }

    .item-content {
        height: 99px;
        background: #fff;
        font-size: 12px;

        >div {
            float: left;
            border-right: 1px solid #f4f4f4;
            height: 100%;
            width: 112px;
            text-align: center;

            &:last-child {
                border-right: none;
                width: 111px;
            }
        }

        .order-wares {
            padding: 10px 14px;
            width: 400px;
            font-size: 16px;

            .wares-img {
                float: left;
                width: 80px;
                height: 80px;
                background: #e0e0e0;
                margin-right: 10px;

                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                }

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .wares-info {
                float: left;
                text-align: left;
                width: 280px;

                .wares-name {
                    text-wrap();
                    margin-bottom: 32px;
                }

                .icon-just, .icon-seven {
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    margin-right: 10px;
                }

                .icon-just {
                    background: url('../../assets/img/122.png') no-repeat center;
                    background-size: 100%;
                }

                .icon-seven {
                    background: url('../../assets/img/123.png') no-repeat center;
                    background-size: 100%;
                }
            }
        }

        .order-price, .order-amount {
            line-height: 99px;
        }

        .order-money {
            padding: 30px 0;
            line-height: 20px;

            .ship-money {
                color: #898989;
            }
        }

        .order-status {
            padding: 30px 0;
            line-height: 20px;

            a {
                color: $shopBgColor;
            }
        }

        .order-actions {
            padding: 20px 0;

            &::after {
                content: ' ';
                display: inline-block;
                vertical-align: middle;
            }

            button {
                vertical-align: middle;
                border: 1px solid $themeColor;
                background: $themeColor;
                color: #ffffff;
                font-size: 12px;
                border-radius: 4px;
                width: 91px;
                height: 31px;
                vertical-align: middle;
                outline: none;
                cursor: pointer;

                &.one {
                    margin: 12px 0px;
                }

                &.wait {
                    border: 1px solid #efefef;
                    background: #fff;
                    color: #333;
                }

                &.cancel {
                    border: none;
                    color: #333;
                    background: #fff;
                }

                &.cancel:active {
                    background: #fff;
                    color: #909090;
                }

                &.wait:active {
                    background: #fff;
                    border: 1px solid #e0e0e0;
                }

                &:active {
                    background: red;
                }
            }

            a {
                display: inline-block;
                width: 91px;
                height: 31px;
                color: #898989;
                line-height: 31px;
                vertical-align: middle;
                cursor: pointer;
            }
        }
    }
</style>
<template>
    <div class="order-item">
        <div class="item-head">
            <span class="order-time">{{$_dateFormat(order.createdAt)}}</span>
            <span class="order-no">订单号：{{order.no}}</span>
        </div>
        <div class="item-content clearfix">
            <div class="order-wares clearfix">
                <div class="wares-img">
                    <router-link v-if="goods.shop" :to="{name:'waresDetail',params:{goodsID:goods.id}}"><img v-if="goods.photos && goods.photos.length>0" :src="goods.photos[0]" alt=""></router-link>
                    <router-link v-else :to="{ name: 'pickGoods', params: { goodsID: goods.id }}"><img v-if="goods.photos && goods.photos.length>0" :src="goods.photos[0]" alt=""></router-link>
                </div>
                <div class="wares-info">
                    <p class="wares-name" v-text="goods.name"></p>
                    <p>
                        <span class="icon-just"></span>
                        <span class="icon-seven"></span>
                    </p>
                </div>
            </div>
            <div class="order-price">¥{{goods.price}}</div>
            <div class="order-amount" v-text="order.quantity"></div>
            <div class="order-money">
                <p>¥{{order.amount}}</p>
                <p class="ship-money">(运费：¥{{order.postage}})</p>
            </div>
            <div class="order-status">
                <p v-text="$_orderStatusEnum(order.status)"></p>
                <p>
                    <router-link v-if="!order.buyer" :to="{name:'orderStep',params:{orderID:order.id}}">订单详情</router-link>
                    <router-link v-else :to="{name:'storeStep',params:{orderID:order.id}}">订单详情</router-link>
                </p>
            </div>
            <div class="order-actions" v-if="order.buyer">
                <template v-if="order.status==='nopay'||order.status==='wait-receiving'">

                </template>
                <template v-else-if="order.status==='wait-shipping'">
                    <button class="confrim-btn" @click="$emit('receiving',order)">立即发货</button>
                </template>
                <template v-else-if="order.status==='refunding'">
                    <button class="confrim-btn wait" @click="$emit('redfunding:agree',order)">同意</button>
                    <button class="confrim-btn wait" @click="$emit('redfunding:refuse',order)">拒绝</button>
                </template>
            </div>
            <div class="order-actions" v-else>
                <template v-if="order.status==='nopay'">
                    <button class="confrim-btn" @click="$emit('nopay:pay',order)">立即付款</button>
                    <button class="confrim-btn cancel" @click="$emit('nopay:cancel',order)">取消订单</button>
                </template>
                <template v-else-if="order.status==='wait-shipping' && (!order.refund || !order.refund.result)">
                    <!-- <button class="confrim-btn" @click="$emit('consgin',order)">提醒发货</button> -->
                    <button v-if="order.shop&&!order.refund.result" class="confrim-btn cancel one" @click="$emit('refunding',order)">退货/退款</button>
                </template>
                <template v-else-if="order.status==='wait-receiving'">
                    <button class="confrim-btn one" @click="$emit('confrim',order)">确认收货</button>
                </template>
                <template v-else-if="order.status==='completed'">
                    <button class="confrim-btn cancel one" @click="$emit('refunding',order)">退货/退款</button>
                </template>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'PersonlCenterOrderItem',
        props: {
            order: {
                required: true,
                type: Object
            }
        },
        computed: {
            goods() {
                return this.order.goods || {}
            }
        },
        methods: {
        }
    }
</script>

