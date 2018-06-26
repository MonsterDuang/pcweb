<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .order-view {
        width: 100%;
        position: relative;
        padding-bottom: 30px;
    }

    .order-tab {
        width: 100%;
        padding: 20px 40px 32px;
        background: #ffffff;
    }

    .statis-url {
        position: absolute;
        top: 30px;
        right: 40px;
        color: $shopBgColor;
        font-size: 16px;
        cursor: pointer;
        z-index: 99;
    }

    .setting-url {
        position: absolute;
        top: 30px;
        right: 120px;
        color: $shopBgColor;
        font-size: 16px;
        cursor: pointer;
        z-index: 99;
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

    .statis-box {
        background: #fff;
        width: 100%;
        padding: 10px 45px;

        .statis-head {
            color: $themeColor;
            font-size: 16px;
            padding: 20px 0;
        }

        .data-box {
            border: 1px solid #e0e0e0;
            margin-bottom: 24px;

            .data-title {
                background: #f4f4f4;
                height: 50px;
                border-bottom: 1px solid #e0e0e0;
                line-height: 49px;
                padding: 0 14px;
            }

            .data-line {
                padding: 0 14px;
                line-height: 69px;
                height: 70px;
                border-bottom: 1px solid #e0e0e0;

                .text-left {
                    float: left;
                }

                .text-right {
                    float: right;
                }
            }
        }
    }
</style>
<template>
    <div class="order-view" v-loading="loading">
        <el-tabs v-show="!showStatis" class="order-tab" v-model="currTab" @tab-click="handleClick">
            <el-tab-pane name="nopay">
                <span slot="label">待付款
                    <span class="theme-font" v-show="orderTotal.nopay" v-text="orderTotal.nopay"></span>
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
                    <my-case-item v-for="item in orderList['nopay']" :key="item.id" :order="item" @receiving="receiving" @redfunding:agree="agree" @redfunding:refuse="refuse"></my-case-item>
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
                    <my-case-item v-for="item in orderList['wait-shipping']" :key="item.id" :order="item" @receiving="receiving"></my-case-item>
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
                    <my-case-item v-for="item in orderList['wait-receiving']" :key="item.id" :order="item"></my-case-item>
                    <div v-if="orderList['wait-receiving'].length<=0" class="not-order">
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
                    <my-case-item v-for="item in orderList['refunding']" :key="item.id" :order="item" @redfunding:agree="agree" @redfunding:refuse="refuse"></my-case-item>
                    <div v-if="orderList['refunding'].length<=0" class="not-order">
                        <div class="icon-not-order"></div>
                        <p>您还木有订单哦</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="待发货" name="completed">
                <span slot="label">已完成
                    <!-- <span class="theme-font" v-show="orderTotal['completed']" v-text="orderTotal['completed']"></span> -->
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
                    <my-case-item v-for="item in orderList['completed']" :key="item.id" :order="item"></my-case-item>
                    <div v-if="orderList['completed'].length<=0" class="not-order">
                        <div class="icon-not-order"></div>
                        <p>您还木有订单哦</p>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-pagination v-show="!showStatis && orderList[currTab].length >0" class="order-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout=" prev,pager,next,slot" :total="orderTotal[currTab]">
            <span>共{{totalPage}}页</span>
        </el-pagination>
        <invoice-info :showInfo="showInfo" @cancel="showInfo=false" @confirm="shipping"></invoice-info>
    </div>
</template>
<script>
    import InvoiceInfo from '../../components/commons/InvoiceInfo.vue'
    import MyCaseItem from './MyCaseItem.vue'
    import { getMyBusOrder, getOrderStatistics, getIncomeStatistics, orderShipping, refundHandle } from '../../api/my'
    export default {
        name: 'businessStore',
        components: {
            MyCaseItem,
            InvoiceInfo
        },
        data() {
            return {
                loading: true,
                currTab: 'nopay',
                pageIndex: 1,
                pageSize: 6,
                showStatis: false,
                showInfo: false,
                orderList: {
                    nopay: [],
                    'wait-shipping': [],
                    'wait-receiving': [],
                    'refunding': [],
                    completed: []
                },
                orderTotal: {
                    nopay: 0,
                    'wait-shipping': 0,
                    'wait-receiving': 0,
                    'refunding': 0,
                    completed: 0
                },
                cacheOrder: {}
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.orderTotal[this.currTab] / this.pageSize)
            }
        },
        created() {
            this.initData()
            this.currTab = this.$route.query.status || 'nopay'
        },
        methods: {
            initData() {
                let allReq = Object.keys(this.orderList).map((key) => {
                    return this.getOrderList(key)
                })
                Promise.all(allReq)
            },
            getOrderList(status) {
                this.loading = true
                status = status || this.currTab
                getMyBusOrder({ pageIndex: this.pageIndex, pageSize: this.pageSize, status: status }).then((res) => {
                    this.orderList[status] = res.data.objects
                    this.pageIndex = res.data.pageIndex
                    this.orderTotal[status] = res.data.total
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            shipping(data) {
                this.showInfo = false
                this.loading = true
                orderShipping(this.cacheOrder.id, data).then((res) => {
                    this.loading = false
                    this.$message.success('发货成功')
                    this.getOrderList()
                    this.getOrderList('wait-receiving')
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)

                })
            },
            receiving(order) {
                this.showInfo = true
                this.cacheOrder = order
            },
            agree(order) {
                this.loading = true
                refundHandle(order.id, { result: 'agree' }).then((res) => {
                    this.$message.success(res.data.message)
                    this.getOrderList()
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            refuse(order) {
                this.loading = true
                refundHandle(order.id, { result: 'refuse' }).then((res) => {
                    this.$message.success(res.data.message)
                    this.getOrderList()
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            handleClick(name) {
                this.handleCurrentChange(1)
            },
            handleCurrentChange(pageIndex) {
                this.pageIndex = pageIndex
                this.getOrderList()
            }
        }
    }
</script>

