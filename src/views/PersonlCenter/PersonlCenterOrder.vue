<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .order-view {
        width: 100%;
    }

    .order-tab {
        width: 100%;
        padding: 20px 40px 32px;
        background: #ffffff;
    }

    .order-head {
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
            width: 400px;
        }

        .head-price, .head-amount, .head-money, .head-status {
            width: 112px;
        }

        .head-action {
            width: 110px;
        }
    }

    .order-pagination {
        padding-top: 30px;
        padding-bottom: 50px;
    }

    .not-order {
        height: 330px;
        text-align: center;
        padding-top: 100px;
        color: #afafaf;
        font-size: 16px;

        .icon-not-order {
            width: 50px;
            height: 50px;
            margin: 20px auto;
            background: url('../../assets/img/074.png') no-repeat center;
            background-size: 100%;
        }
    }
</style>
<template>
    <div class="order-view" v-loading="loading">
        <el-tabs class="order-tab" v-model="currTab" @tab-click="handleClick">
            <el-tab-pane label="全部订单" name="all">
                <div class="tab-view-container">
                    <div class="order-head">
                        <span class="head-wares">宝贝</span>
                        <span class="head-price">单价</span>
                        <span class="head-amount">数量</span>
                        <span class="head-money">实付款</span>
                        <span class="head-status">交易状态</span>
                        <span class="head-action">交易操作</span>
                    </div>
                    <personl-center-order-item v-for="item in orderList['all']" :key="item.id" :order="item" @nopay:pay="pay" @nopay:cancel="cancelOrder" @consgin="consgin" @confrim="confrim" @refunding="refunding"></personl-center-order-item>
                    <div v-if="orderList['all'].length<=0" class="not-order">
                        <div class="icon-not-order"></div>
                        <p>您还木有订单哦</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="nopay">
                <span slot="label">待付款
                    <span class="theme-font" v-show="orderTotal['nopay']" v-text="orderTotal['nopay']">1</span>
                </span>
                <div class="tab-view-container">
                    <div class="order-head">
                        <span class="head-wares">宝贝</span>
                        <span class="head-price">单价</span>
                        <span class="head-amount">数量</span>
                        <span class="head-money">实付款</span>
                        <span class="head-status">交易状态</span>
                        <span class="head-action">交易操作</span>
                    </div>
                    <personl-center-order-item v-for="item in orderList['nopay']" :key="item.id" :order="item" @nopay:pay="pay" @nopay:cancel="cancelOrder"></personl-center-order-item>
                    <div v-if="orderList['nopay'].length<=0" class="not-order">
                        <div class="icon-not-order"></div>
                        <p>您还木有订单哦</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="wait-shipping">
                <span slot="label">待发货
                    <span class="theme-font" v-show="orderTotal['wait-shipping']" v-text="orderTotal['wait-shipping']"></span>
                </span>
                <div class="tab-view-container">
                    <div class="order-head">
                        <span class="head-wares">宝贝</span>
                        <span class="head-price">单价</span>
                        <span class="head-amount">数量</span>
                        <span class="head-money">实付款</span>
                        <span class="head-status">交易状态</span>
                        <span class="head-action">交易操作</span>
                    </div>
                    <personl-center-order-item v-for="item in orderList['wait-shipping']" :key="item.id" :order="item" @consgin="consgin" @refunding="refunding"></personl-center-order-item>
                    <div v-if="orderList['wait-shipping'].length<=0" class="not-order">
                        <div class="icon-not-order"></div>
                        <p>您还木有订单哦</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="待发货" name="wait-receiving">
                <span slot="label">待收货
                    <span class="theme-font" v-show="orderTotal['wait-receiving']" v-text="orderTotal['wait-receiving']"></span>
                </span>
                <div class="tab-view-container">
                    <div class="order-head">
                        <span class="head-wares">宝贝</span>
                        <span class="head-price">单价</span>
                        <span class="head-amount">数量</span>
                        <span class="head-money">实付款</span>
                        <span class="head-status">交易状态</span>
                        <span class="head-action">交易操作</span>
                    </div>
                    <personl-center-order-item v-for="item in orderList['wait-receiving']" :key="item.id" :order="item" @confrim="confrim"></personl-center-order-item>
                    <div v-if="orderList['wait-receiving'].length<=0" class="not-order">
                        <div class="icon-not-order"></div>
                        <p>您还木有订单哦</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="completed">
                <span slot="label">已完成
                    <span class="theme-font" v-show="orderTotal['completed']" v-text="orderTotal['completed']"></span>
                </span>
                <div class="tab-view-container">
                    <div class="order-head">
                        <span class="head-wares">宝贝</span>
                        <span class="head-price">单价</span>
                        <span class="head-amount">数量</span>
                        <span class="head-money">实付款</span>
                        <span class="head-status">交易状态</span>
                        <span class="head-action">交易操作</span>
                    </div>
                    <personl-center-order-item v-for="item in orderList['completed']" :key="item.id" :order="item" @refunding="refunding"></personl-center-order-item>
                    <div v-if="orderList['completed'].length<=0" class="not-order">
                        <div class="icon-not-order"></div>
                        <p>您还木有订单哦</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="refunding">
                <span slot="label">退款退货
                    <span class="theme-font" v-show="orderTotal['refunding']" v-text="orderTotal['refunding']"></span>
                </span>
                <div class="tab-view-container">
                    <div class="order-head">
                        <span class="head-wares">宝贝</span>
                        <span class="head-price">单价</span>
                        <span class="head-amount">数量</span>
                        <span class="head-money">实付款</span>
                        <span class="head-status">交易状态</span>
                        <span class="head-action">交易操作</span>
                    </div>
                    <personl-center-order-item v-for="item in orderList['refunding']" :key="item.id" :order="item"></personl-center-order-item>
                    <div v-if="orderList['refunding'].length<=0" class="not-order">
                        <div class="icon-not-order"></div>
                        <p>您还木有订单哦</p>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-pagination v-show="orderList[currTab].length > 0" class="order-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout=" prev,pager,next,slot" :total="orderTotal[currTab]">
            <span>共{{totalPage}}页</span>
        </el-pagination>
    </div>
</template>
<script>
    import PersonlCenterOrderItem from './PersonlCenterOrderItem.vue'
    import { getMyOrderList, cancelOrder, confirmOrder, getSaleStatistics, getOrderInfo } from '../../api/my'
    export default {
        name: 'PersonlCenterOrder',
        components: {
            PersonlCenterOrderItem
        },
        data() {
            return {
                loading: true,
                currTab: 'all',
                pageIndex: 1,
                pageSize: 10,
                orderList: {
                    'all': [],
                    nopay: [],
                    'wait-shipping': [],
                    'wait-receiving': [],
                    'refunding': [],
                    completed: []
                },
                orderTotal: {
                    'all': 0,
                    nopay: 0,
                    'wait-shipping': 0,
                    'wait-receiving': 0,
                    'refunding': 0,
                    completed: 0
                }
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.orderTotal[this.currTab] / this.pageSize)
            }
        },
        created() {
            this.initData()
            this.currTab = this.$route.query.status || 'all'
        },
        methods: {
            pay(order) {
                this.loading = true
                getOrderInfo(order.id).then((res) => {
                    let order = res.data
                    if (order.from !== 'pc') {
                        this.loading = false
                        this.$alert('app订单请在app支付，pc端暂不支持支付app订单', '提示', {
                            confirmButtonText: '确定'
                        });
                        return
                    } else if (order.payment.channel === 'alipay') {
                        window.location.href = order.payment.order
                    } else if (order.payment.channel === 'wechat') {
                        this.$router.push({ name: 'settleWxPay', params: { orderID: order.id } })
                    }
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            cancelOrder(order) {
                this.$confirm('确定取消这个订单吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.loading = true;
                    cancelOrder(order.id).then((res) => {
                        console.log(res)
                        this.loading = false
                        this.$message.success('取消成功')
                        this.getOrderData()
                    }).catch((err) => {
                        console.log(err)
                        this.loading = false
                        this.$message.error(err.resMessage || err.message)
                    })
                }).catch((err) => {
                    console.log(err)
                })

            },
            confrim(order) {
                this.$confirm('确认收到货了吗', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(() => {
                    this.loading = true;
                    confirmOrder(order.id).then((res) => {
                        this.loading = false
                        this.$message.success('确认完成')
                        this.getOrderData()
                    }).catch((err) => {
                        console.log(err)
                        this.loading = false
                        this.$message.error(err.resMessage || err.message)
                    })
                }).catch((err) => {
                    console.log(err)
                })
            },
            consgin(order) {
                console.log(order)
            },
            refunding(order) {
                this.$router.push({ name: 'orderDrawback', params: { orderID: order.id } })
            },
            initData() {
                let allReq = Object.keys(this.orderList).map((key) => {
                    return this.getOrderData(key)
                })
                Promise.all(allReq)
            },
            getOrderData(status) {
                this.loading = true
                let cancelStatus = status = status || this.currTab
                status = status === 'all' ? '' : status
                return getMyOrderList({ pageIndex: this.pageIndex, pageSize: this.pageSize, status: status }).then((res) => {
                    this.orderList[cancelStatus] = res.data.objects
                    this.pageIndex = res.data.pageIndex
                    this.orderTotal[cancelStatus] = res.data.total
                    this.loading = false
                    this.$_backTop()
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            handleClick() {
                this.handleCurrentChange(1)
            },
            handleCurrentChange(pageIndex) {
                this.pageIndex = pageIndex
                this.getOrderData()
            }
        }
    }
</script>

