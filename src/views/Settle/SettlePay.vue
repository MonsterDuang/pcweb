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

    .pay-type {
        h4 {
            font-weight: normal;
            font-size: 18px;
            color: #333;
            padding: 30px 0 20px;
        }

        p {
            color: #8a8a8a;
            font-size: 16px;
            padding-bottom: 48px;
        }

        .refersh-page {
            color: $shopBgColor;
        }
    }

    .pay-qrcode {
        border-radius: 6px;
        box-shadow: 0 0px 20px 4px rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 502px;
        background: #fff;
        padding: 100px 185px;

        .qrcode-box {
            float: left;
            width: 300px;
            height: 300px;
            margin-right: 30px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .propmt-box {
            float: left;
            width: 500px;
            height: 300px;
            background: #f4f4f4;
            text-align: left;
            color: #717171;
            padding: 100px 0 0 80px;
            font-size: 18px;
            line-height: 36px;
        }
    }
</style>
<template>
    <div class="settle-pay-view" v-loading="loading">
        <div class="settle-pay-head">
            <div class="container clearfix settle-pay-bar">
                <div class="order-num">订单已提交，请尽快付款！订单号：{{order.no}}</div>
                <div class="price-box">应付金额：
                    <span class="theme-font" v-if="order.payment">{{order.payment.amount}}元</span>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="pay-type">
                <h4 v-text="$route.meta.title"></h4>
                <p>订单过期时间为
                    <span class="theme-font" v-text="endTime"></span>，请尽快支付，逾期未支付请重新下单!</p>
                <!-- <p v-else>二维码已经过期，
                    <a class="refresh-page" href="#">刷新页面重新获取二维码</a>
                </p> -->
            </div>
            <div class="pay-qrcode clearfix">
                <div class="qrcode-box" ref="qrcode">
                </div>
                <div class="propmt-box">
                    <p>请用手机打开
                        <span class="theme-font" v-text="$route.meta.app"></span>，</p>
                    <p>然后使用微信扫一扫
                        <span class="theme-font">扫描二维码</span>
                    </p>
                    <p>
                        <span class="theme-font">完成支付</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { getOrderInfo } from '../../api/my'
    export default {
        name: 'SttlePay',
        props: {
            orderID: {
                required: true
            }
        },
        data() {
            return {
                time: 60,
                order: {},
                qrcode: null,
                loading: true,
                polling: null,
                endTime: ''
            }
        },
        created() {
            this.$store.dispatch('launchPay')
            getOrderInfo(this.orderID).then((res) => {
                this.order = res.data
                if (this.order.status !== 'nopay') {
                    this.$message.warning('订单已经支付完成，请勿重复支付!')
                    this.$router.push({ name: 'paySuccess', params: { orderID: this.orderID } })
                    return
                }
                let time = new Date(this.order.statusChangedAt.nopay)
                time.setMinutes(time.getMinutes() + 30)
                this.endTime = time.toLocaleString().replace(/\//ig, '-')
                this.qrcode = new QRCode(this.$refs.qrcode, { text: this.order.payment.order.code_url, width: 300, height: 300 })
                this.loading = false
            }).catch((err) => {
                this.loading = false
                console.log(err)
                this.$message.error(err.resMessage || err.message)
            })
        },
        mounted() {
            this.$nextTick(() => {
                this.startTime()
            })
        },
        destroyed() {
            this.$store.dispatch('completePay')
            clearTimeout(this.polling)
        },
        methods: {
            startTime() {
                if (Date.now() - new Date(this.order.statusChangedAt.nopay) > 1000 * 60 * 30) {
                    this.$message.error('订单有效期已过，请重新下单！')
                    return
                }
                this.polling = setTimeout(() => {
                    getOrderInfo(this.orderID).then((res) => {
                        if (res.data.status !== 'nopay') {
                            this.$router.push({ name: 'paySuccess', params: { orderID: this.orderID } })
                            clearTimeout(this.polling)
                        } else {
                            this.startTime()
                        }
                    })
                }, 5000)
            }
        }
    }
</script>
