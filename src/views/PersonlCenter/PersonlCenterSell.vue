<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .sell-view {
        width: 100%;
    }

    .order-tab {
        width: 100%;
    }

    .tab-view-container {
        .wares-container {
            float: left;
            margin-right: 14px;
            margin-bottom: 14px;

            &:nth-child(4n) {
                margin-right: 0;
            }
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

    .not-wares {
        height: 200px;
        line-height: 200px;
        font-size: 18px;
        color: #989898;
        text-align: center;
        background: #fff;
    }

    .wares-actions {
        button {
            margin: 10px 0;
            width: 90px;
            height: 32px;
            text-align: center;
            color: #fff;
            border-radius: 4px;
            background: $themeColor;
            border: none;
            outline: none;
            cursor: pointer;
            margin-bottom: 10px;

            &:active {
                background: red;
            }
        }
    }
</style>
<template>
    <div class="sell-view" v-loading="loading">
        <el-tabs class="order-tab" v-model="currTab" @tab-click="handleClick">
            <el-tab-pane label="售卖中" name="selling">
                <span slot="label">售卖中</span>
                <div class="tab-view-container clearfix">
                    <div class="wares-container" v-for="(item,index) in goodsList" :key="item.id">
                        <base-wares-card :width="249.5" :goods="item"></base-wares-card>
                        <div class="wares-actions">
                            <button v-if="item.isSoldOut" @click="sold(item.id)">上架</button>
                            <button v-else @click="out(item.id)">下架</button>
                        </div>
                    </div>
                    <div v-if="goodsList.length===0" class="not-wares">您还没有寄售商品哦</div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="已被拍" name="wait-shipping">
                <span slot="label">已被拍
                    <span class="theme-font" v-text="statistics['wait-shipping']"></span>
                </span>
                <div class="tab-view-container">
                    <wares-yet-beat-card :order="item" v-for="item in sacleList" @receiving="receiving" :key="item.id"></wares-yet-beat-card>
                </div>
                <div v-if="sacleList.length===0" class="not-wares">您还没有寄售订单哦</div>
            </el-tab-pane>
            <el-tab-pane label="已发货" name="wait-receiving">
                <span slot="label">已发货
                    <span class="theme-font" v-text="statistics['wait-receiving']"></span>
                </span>
                <div class="tab-view-container">
                    <wares-yet-beat-card :order="item" v-for="item in sacleList" :key="item.id"></wares-yet-beat-card>
                </div>
                <div v-if="sacleList.length===0" class="not-wares">您还没有寄售订单哦</div>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="completed">
                <span slot="label">已完成</span>
                <div class="tab-view-container">
                    <wares-yet-beat-card :order="item" v-for="item in sacleList" :key="item.id"></wares-yet-beat-card>
                </div>
                <div v-if="sacleList.length===0" class="not-wares">您还没有寄售订单哦</div>
            </el-tab-pane>
        </el-tabs>
        <el-pagination v-show="goodsList.length!==0" class="order-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout=" prev,pager,next,slot" :total="total">
            <span>共{{totalPage}}页</span>
        </el-pagination>
        <invoice-info :showInfo="showInfo" @cancel="showInfo=false" @confirm="shipping"></invoice-info>
    </div>
</template>
<script>
    import BaseWaresCard from '../../components/base/BaseWaresCard.vue'
    import InvoiceInfo from '../../components/commons/InvoiceInfo.vue'
    import WaresYetBeatCard from './WaresYetBeatCard.vue'
    import { getSaleList, getSaleStatistics, getMyConsignOrder, orderShipping } from '../../api/my'
    import { outGoods, soldGoods } from '../../api/common'
    export default {
        name: 'PersonlCenterSell',
        components: {
            BaseWaresCard,
            WaresYetBeatCard,
            InvoiceInfo
        },
        data() {
            return {
                currTab: 'selling',
                pageIndex: 1,
                pageSize: 12,
                goodsList: [],
                sacleList: [],
                total: 0,
                loading: true,
                statistics: {
                    'wait-receiving': 0,
                    'wait-shipping': 0,
                    'nopay': 0
                },
                status: '',
                showInfo: false,
                cacheOrder: {}
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            }
        },
        created() {
            this.getSaleData()
            this.getSaleStatistics()
        },
        methods: {
            sold(goodsID) {
                this.loading = true
                soldGoods(goodsID).then((res) => {
                    this.$message.success('上架成功')
                    this.getSaleData()
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            out(goodsID) {
                this.loading = true
                outGoods(goodsID).then((res) => {
                    this.$message.success('下架成功')
                    this.getSaleData()
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            receiving(order) {
                this.cacheOrder = order
                this.showInfo = true
            },
            shipping(data) {
                this.showInfo = false
                this.loading = true
                orderShipping(this.cacheOrder.id, data).then((res) => {
                    this.loading = false
                    this.$message.success('发货成功')
                    this.getMyConsignOrder(this.currTab)
                    this.getSaleStatistics()
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
                if (this.currTab === 'selling') {
                    this.pageSize = 12
                    this.getSaleData()
                } else {
                    this.pageSize = 5
                    this.getMyConsignOrder(this.currTab)
                }
            },
            getMyConsignOrder(status) {
                getMyConsignOrder({
                    pageIndex: this.pageIndex, pageSize: this.pageSize,
                    status: status
                }).then((res) => {
                    this.sacleList = res.data.objects
                    this.pageIndex = res.data.pageIndex;
                    this.pageSize = res.data.pageSize;
                    this.total = res.data.total;
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            getSaleStatistics() {
                getSaleStatistics().then(res => {
                    this.statistics = res.data
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            getSaleData() {
                this.loading = true
                getSaleList({ pageIndex: this.pageIndex, pageSize: this.pageSize }).then((res) => {
                    this.goodsList = res.data.objects;
                    this.pageIndex = res.data.pageIndex;
                    this.pageSize = res.data.pageSize;
                    this.total = res.data.total;
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
