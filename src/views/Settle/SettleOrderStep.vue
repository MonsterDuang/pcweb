<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .settle-order-view {
        background: #fff;
    }

    .order-head {
        height: 103px;
        background: #f4f4f4;
        width: 100%;
    }

    .settle-order-head {
        height: 100%;
        padding-left: 290px;

        .order-title {
            float: left;
            line-height: 102px;
            font-size: 18px;
            color: #333;
        }

        .search-box {
            float: right;
            width: 451px;
            height: 42px;
            border: 1px solid $themeColor;
            background: $themeColor;
            margin-left: 50px;
            margin-top: 30px;

            input {
                width: 390px;
                height: 40px;
                font-size: 16px;
                padding-left: 10px;
                color: #979797;
                vertical-align: middle;
                border: none;
                outline: none;
            }

            .icon-search {
                display: inline-block;
                vertical-align: middle;
                background: $themeColor url('../../assets/img/001.png') no-repeat center;
                width: 59px;
                height: 100%;
                background-size: 100%;
                background-size: 50%;
                cursor: pointer;
            }
        }
    }

    .order-step {
        padding-top: 50px;
        padding-bottom: 40px;
        width: 100%;
        position: relative;

        .back-page {
            position: absolute;
            top: 80px;
            left: 0;
            font-size: 14px;

            a {
                color: $shopBgColor;
                cursor: pointer;
            }

            span {
                color: $shopBgColor;
            }
        }
    }

    .order-steps {
        width: 1020px;
        margin: 0 auto;
    }

    .order-detail {
        border: 1px solid #e0e0e0;
        width: 100%;
        background: #ffffff;
        margin-bottom: 20px;

        .detail-title {
            height: 50px;
            border-bottom: 1px solid #e0e0e0;
            background: #f4f4f4;
            padding: 0 18px;
            font-size: 18px;
            color: #333;
            line-height: 49px;
        }

        .detail-body {
            padding: 0 18px;

            >div {
                height: 50px;
                border-bottom: 1px solid #e0e0e0;
                font-size: 16px;
                line-height: 49px;

                &:last-child {
                    height: 49px;
                    border-bottom: none;
                }

                a {
                    font-size: 16px;
                    color: $shopBgColor;
                }
            }
        }
    }

    .wares-detail {
        width: 100%;
        background: #f4f4f4;
        margin-bottom: 20px;

        .detail-head {
            width: 100%;
            border: 1px solid #efefef;
            height: 52px;
            line-height: 50px;
            background: #f4f4f4;

            span {
                display: inline-block;
                text-align: center;
                font-size: 16px;
            }

            .head-wares {
                width: 500px;
            }

            .head-price, .head-amount, .head-money, .head-status {
                width: 140px;
            }

            .head-action {
                width: 138px;
            }
        }

        .item-content {
            border: 1px solid #e0e0e0;
            border-top: none;
            height: 99px;
            background: #fff;
            font-size: 12px;

            >div {
                float: left;
                border-right: 1px solid #f4f4f4;
                height: 100%;
                width: 140px;
                text-align: center;

                &:last-child {
                    border-right: none;
                    width: 138px;
                }
            }

            .order-wares {
                padding: 10px 14px;
                width: 500px;
                font-size: 16px;

                .wares-img {
                    float: left;
                    width: 80px;
                    height: 80px;
                    background: #e0e0e0;
                    margin-right: 10px;
                    cursor: pointer;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .wares-info {
                    float: left;
                    text-align: left;

                    .wares-name {
                        text-wrap();
                        margin-bottom: 32px;
                        cursor: pointer;
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
                    color: #e0e0e0;
                }
            }

            .order-status {
                padding: 30px 0;
                line-height: 40px;

                a {
                    color: $shopBgColor;
                }
            }

            .order-actions {
                padding: 20px 0;

                button {
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

                    &.wait {
                        border: 1px solid #efefef;
                        background: #fff;
                        color: #333;
                    }

                    &.wait:active {
                        background: #fff;
                        border: 1px solid #e0e0e0;
                    }

                    &:active {
                        background: red;
                    }

                    &.cancel {
                        color: #333;
                    }
                }

                a {
                    display: inline-block;
                    width: 91px;
                    height: 31px;
                    color: #e0e0e0;
                    line-height: 31px;
                    vertical-align: middle;
                    cursor: pointer;

                    &.cancel {
                        color: #333;
                    }
                }
            }
        }

        .total-info {
            text-align: right;
            color: #333;
            padding: 20px;

            p {
                margin-bottom: 16px;
                font-size: 14px;

                &:last-child {
                    margin-bottom: 0;
                }

                span {
                    display: inline-block;
                    width: 110px;
                    vertical-align: middle;
                }
            }
        }
    }

    .drawback-detail {
        border: 1px solid #e0e0e0;
        width: 100%;
        background: #ffffff;
        margin-bottom: 20px;

        .drawback-title {
            height: 50px;
            border-bottom: 1px solid #e0e0e0;
            background: #f4f4f4;
            padding: 0 18px;
            font-size: 18px;
            color: #333;
            line-height: 49px;
        }

        .drawback-cause {
            padding: 0 18px;
            border-bottom: 1px solid #e0e0e0;

            >p {
                height: 50px;
                border-bottom: 1px solid #e0e0e0;
                font-size: 16px;
                line-height: 49px;

                &:last-child {
                    height: 49px;
                    border-bottom: none;
                }

                a {
                    font-size: 16px;
                    color: $shopBgColor;
                }
            }
        }

        .drawback-ticket {
            padding: 22px 18px;

            p {
                color: #aaaaaa;
            }

            .ticket-img {
                margin-top: 22px;

                >div {
                    float: left;
                    width: 130px;
                    height: 130px;
                    background: #e0e0e0;
                    margin-right: 10px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

    .flow-detail {
        border: 1px solid #e0e0e0;
        width: 100%;
        background: #ffffff;
        margin-bottom: 20px;

        .detail-title {
            height: 50px;
            border-bottom: 1px solid #e0e0e0;
            background: #f4f4f4;
            padding: 0 18px;
            font-size: 18px;
            color: #333;
            line-height: 49px;
        }

        .flow-info {
            padding: 0 18px;

            >div {
                height: 50px;
                border-bottom: 1px solid #e0e0e0;
                font-size: 16px;
                line-height: 49px;

                &:last-child {
                    height: 49px;
                    border-bottom: none;
                }
            }
        }

        .flow-status {
            padding: 20px;
            border-top: 1px solid #e0e0e0;

            .prompt {
                color: #bcbcbc;
                font-size: 14px;
                text-align: right;
                line-height: 20px;
                padding: 0 14px 14px;
            }

            .status-box {
                background: #f4f4f4;
                font-size: 14px;
                color: #666;

                .curr-status {
                    padding: 0 14px;
                    height: 51px;
                    line-height: 50px;
                    border-bottom: 1px solid #e5e5e5;
                }

                .status-step {
                    padding: 14px;

                    p {
                        line-height: 35px;

                        .point {
                            display: inline-block;
                            vertical-align: middle;
                            border: 4px solid #c8c8c8;
                            border-radius: 50%;
                            margin-right: 6px;
                            position: relative;

                            &.last-point {
                                border: 4px solid $themeColor;
                            }

                            &.last-point:after {
                                display: none;
                            }

                            &:after {
                                position: absolute;
                                top: 4px;
                                left: -1px;
                                content: ' ';
                                height: 30px;
                                border-left: 2px dashed #c8c8c8;
                            }
                        }

                        span {
                            padding: 0 10px;
                        }

                        &:last-child {
                            border-bottom: 1px solid #e5e5e5;
                        }
                    }
                }
            }
        }
    }
    .order-step .back-page p, .padd p {
        cursor: pointer;
        color: #4fa2a9;
        font-size 14px
    }
    .padd{
        padding :15px 0
    }
</style>
<template>
    <div class="settle-order-view" v-loading="loading">
        <div class="order-head">
            <div class="container settle-order-head clearfix">
                <div class="order-title">订单详情</div>
                <div class="search-box"><input type="text">
                    <span class="icon-search"></span>
                </div>
            </div>
        </div>
        <div class="container">
            <div :class="{'order-step' : order.status !=='closed', 'padd' : order.status =='closed' }">
                <div class='back-page'>
                    <p @click="$router.go(-1)">
                        <span class="el-icon-arrow-left arrow-left"></span>返回上一级</p>
                </div>
                <el-steps class="order-steps" :active="currStep" v-if="order.status !=='closed'" align-center>
                    <el-step title="拍下商品" :description="statusChangedAt['nopay']"></el-step>
                    <el-step title="付款" :description="statusChangedAt['wait-shipping']|| ''"></el-step>
                    <el-step title="卖家发货" :description="statusChangedAt['wait-receiving']|| ''"></el-step>
                    <el-step title="等待收货" :description="statusChangedAt['wait-receiving']|| ''"></el-step>
                    <el-step title="完成" :description="statusChangedAt['completed:']|| ''"></el-step>
                </el-steps>
            </div>
            <div class="order-detail">
                <div class="detail-title">订单信息</div>
                <div class="detail-body">
                    <div>订单状态:
                        <span class="theme-font" v-text="$_orderStatusEnum(order.status)"></span>
                    </div>
                    <div>收货地址:
                        <span v-text="buyer.nickname"></span>,
                        <span v-text="buyer.phone"></span>,
                        <span>{{address.province}} {{address.city}} {{address.region}} {{address.street}}</span>
                    </div>
                    <div>订单编号:
                        <span v-text="order.no"></span>
                    </div>
                    <div v-if="shop.id">商家名称:
                        <router-link :to="{name: 'shopIndex',params:{shopID:shop.id}}" v-text="shop.name"></router-link>
                    </div>
                </div>
            </div>
            <div class="drawback-detail" v-if="order.status === 'refunding'">
                <div class="drawback-title">退款原因</div>
                <div class="drawback-cause">
                    <p>退款类型：{{refund.type}}</p>
                    <p>退款原因：{{refund.reason}}</p>
                    <p>退款金额：
                        <span class="theme-font">¥{{order.amount}}</span>
                    </p>
                    <p>退款说明：{{refund.description}}</p>
                </div>
                <div class="drawback-ticket">
                    <p>用户上传凭条：</p>
                    <div class="ticket-img clearfix">
                        <div v-for="img in refund.vouchers" :key="img"><img :src="img" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="wares-detail">
                <div class="detail-head">
                    <span class="head-wares">宝贝</span>
                    <span class="head-price">单价</span>
                    <span class="head-amount">数量</span>
                    <span class="head-money">实付款</span>
                    <span class="head-status">交易状态</span>
                    <span class="head-action">交易操作</span>
                </div>
                <div class="item-content clearfix">
                    <div class="order-wares clearfix">
                        <div class="wares-img" v-if="goods">
                            <img @click="toWares" v-if="goods.photos&&goods.photos.length>0" :src="goods.photos[0]" alt="">
                        </div>
                        <div class="wares-info">
                            <p class="wares-name" @click="toWares" v-text="goods.name"></p>
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
                    </div>
                    <div class="order-actions">
                        <template v-if="order.status==='nopay'">
                            <button class="confrim-btn" @click="payOrder">立即付款</button>
                            <a class="cancel-btn cancel" @click="cancelOrder">取消订单</a>
                        </template>
                        <template v-else-if="order.status==='wait-shipping'">
                            <!-- <button class="confrim-btn" @click="jackReceiving">提醒发货</button> -->
                            <a v-if="order.shop" class="cancel-btn cancel" @click="refunding">退货/退款</a>
                        </template>
                        <template v-else-if="order.status==='wait-receiving'">
                            <button class="confrim-btn" @click="confirm">确认收货</button>
                            <!-- <a class="cancel-btn cancel" @click="refunding">退货/退款</a> -->
                        </template>
                        <template v-else-if="order.status==='refunding'">

                        </template>
                        <template v-else-if="order.status==='completed'">
                            <!-- <button class="wait" @click="reBuy">再次购买</button> -->
                            <a class="cancel-btn cancel" @click="rmOrder">删除订单</a>
                            <a v-if="order.shop" class="cancel-btn cancel" @click="refunding">退货/退款</a>
                        </template>
                    </div>
                </div>
                <div class="total-info">
                    <p>
                        <span>商品总价:</span>
                        <span>¥{{order.price * order.quantity}}</span>
                    </p>
                    <p>
                        <span>运费:</span>
                        <span>¥{{order.postage}}</span>
                    </p>
                    <p>
                        <span>订单总价:</span>
                        <span>¥{{order.amount}}</span>
                    </p>
                    <p>
                        <span>实付款:</span>
                        <span>¥{{payment.amount}}</span>
                    </p>
                </div>
            </div>
            <div class="flow-detail" v-if="order.status==='wait-receiving' || order.shipping">
                <div class="detail-title">物流信息</div>
                <div class="flow-info" v-if="order.shipping">
                    <div>运单号码:
                        <span v-text="shipping.no"></span>
                    </div>
                    <div>物流公司:
                        <span v-text="shipping.express"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { getOrderInfo, cancelOrder, rmOrder, confirmOrder } from '../../api/my'
    export default {
        name: 'SettleOrderStep',
        props: {
            orderID: {
                required: true
            }
        },
        data() {
            return {
                order: {},
                currStep: 1,
                statusChangedAt: {},
                loading: true
            }
        },
        computed: {
            refund() {
                return this.order.refund || false
            },
            goods() {
                return this.order.goods || false
            },
            shop() {
                return this.order.shop || {}
            },
            payment() {
                return this.order.payment || {}
            },
            address() {
                return this.order.addressBook ? this.order.addressBook.address : {}
            },
            buyer() {
                return this.order.buyer || {}
            },
            shipping() {
                return this.order.shipping || {}
            }
        },
        created() {
            this.getOrderInfo()
        },
        methods: {
            toWares() {
                if (this.shop.id) {
                    this.$router.push({ name: 'waresDetail', params: { goodsID: this.goods.id, shopID: this.shop.id } })
                } else {
                    this.$router.push({ name: 'pickGoods', params: { goodsID: this.goods.id } })
                }
            },
            reBuy() {
                if (this.goods) {
                    this.$router.push({ name: 'settleConfirm', params: { goodsID: this.goods.id, num: this.order.quantity } })
                } else {
                    this.$message.error('数据异常，没有商品数据')
                }
            },
            rmOrder() {
                this.$confirm('确定删除这个订单吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.loading = true;
                    rmOrder(this.order.id).then((res) => {
                        this.loading = false
                        this.$message.success('删除成功')
                        this.$router.replace({ name: 'myOrder' })
                    }).catch((err) => {
                        console.log(err)
                        this.loading = false
                        this.$message.error(err.resMessage || err.message)
                    })
                }).catch((err) => {
                    console.log(err)
                })
            },
            getOrderInfo() {
                this.loading = true
                getOrderInfo(this.orderID).then((res) => {
                    this.order = res.data
                    if (!this.order.goods) {
                        this.$message.error('数据异常，没有商品数据')
                    }
                    this.statusChangedAt = res.data.statusChangedAt
                    this.currStep = this.getOrderStep(this.order.status)
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            getOrderStep(status) {
                switch (status) {
                    case 'nopay':
                        return 1;
                        break;
                    case 'wait-shipping':
                        return 2;
                        break;
                    case 'wait-receiving':
                        return 3
                        break;
                    case 'refunding':
                        return 6;
                        break;
                    case 'completed':
                        return 4;
                }
            },
            payOrder() {
                if (this.order.from !== 'pc') {
                    this.$alert('app订单请在app支付，pc端暂不支持支付app订单', '提示', {
                        confirmButtonText: '确定'
                    });
                    return
                } else if (order.payment.channel === 'alipay') {
                    window.location.href = order.payment.order
                } else if (order.payment.channel === 'wechat') {
                    this.$router.push({ name: 'settleWxPay', params: { orderID: this.orderID } })
                }
            },
            cancelOrder() {
                this.$confirm('确定取消这个订单吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.loading = true;
                    cancelOrder(this.order.id).then((res) => {
                        console.log(res)
                        this.loading = false
                        this.$message.success('取消成功')
                        this.$router.replace({ name: 'myOrder' })
                    }).catch((err) => {
                        console.log(err)
                        this.loading = false
                        this.$message.error(err.resMessage || err.message)
                    })
                }).catch((err) => {
                    console.log(err)
                })

            },
            jackReceiving() {

            },
            confirm(order) {
                console.log(order)
                this.$confirm('确认收到货了吗', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(() => {
                    this.loading = true;
                    confirmOrder(this.orderID).then((res) => {
                        this.loading = false
                        this.$message.success('确认完成')
                        this.getOrderInfo()
                    }).catch((err) => {
                        console.log(err)
                        this.loading = false
                        this.$message.error(err.resMessage || err.message)
                    })
                }).catch((err) => {
                    console.log(err)
                })
            },
            refunding() {
                this.$router.push({ name: 'orderDrawback', params: { orderID: this.order.id } })
            }
        }
    }
</script>
