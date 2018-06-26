<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .settle-pay-view {
        width: 100%;
        padding-bottom: 50px;
    }

    .settle-pay-head {
        background: #f4f4f4;
        height: 103px;
        border: 1px solid #e0e0e0;
        color: #333;

        .settle-pay-bar {
            height: 100%;
            padding-left: 290px;
            font-size: 16px;
            line-height: 102px;
        }

        .order-num {
            float: left;
        }

        .price-box {
            float: right;
        }
    }

    .prompt-box {
        margin-top: 50px;
        border-radius: 6px;
        box-shadow: 0 0px 20px 4px rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 502px;
        background: #fff;
        padding: 200px 185px;
        text-align: center;
        font-size: 20px;

        p {
            line-height: 50px;
        }

        a {
            color: $shopBgColor;
        }
    }
</style>
<template>
    <div class="settle-pay-view" v-loading="loading">
        <div class="settle-pay-head">
            <div class="container clearfix settle-pay-bar">
                <div class="order-num">付款成功</div>
                <div class="price-box">应付金额：
                    <span class="theme-font">{{order.amount}}元</span>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="prompt-box">
                <p>您已经成功完成支付!</p>
                <p>返回
                    <router-link :to="{name: 'homeIndex'}">商城首页</router-link>继续逛或查看
                    <router-link :to="{name: 'myOrder'}">我的订单</router-link>!</p>
            </div>
        </div>
    </div>
</template>
<script>
    import { getOrderInfo } from '../../api/my'
    export default {
        name: 'SettlePaySuccess',
        props: {
            orderID: {
                required: true
            }
        },
        data() {
            return {
                order: {},
                loading: true
            }
        },
        created() {
            this.getOrderInfo()
        },
        methods: {
            getOrderInfo() {
                getOrderInfo(this.orderID).then((res) => {
                    this.order = res.data
                    if (!this.order.status || this.order.status === 'nopay') {
                        this.$router.replace({ name: 'orderStep', params: { orderID: this.order.id } })
                    }
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


