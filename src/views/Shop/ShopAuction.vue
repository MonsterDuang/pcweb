<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .home-pick-view {
        padding-top: 20px;
        padding-bottom: 40px;
    }

    .wares-sort {
        width: 100%;
        height: 50px;
        background: #f3f3f3;
        background: linear-gradient(top, #fefefe, #f4f4f4);

        .wares-atrice {
            width: 246px;
            height: 100%;
            border: 1px solid #e0e0e0;
            background: #ffffff;
            font-size: 18px;
            color: #a4a4a4;
            line-height: 48px;

            .left {
                float: left;
                border-right: 1px solid #e0e0e0;
                padding: 0 18px;

                span {
                    vertical-align: middle;
                }
            }

            .icon-list {
                display: inline-block;
                vertical-align: middle;
                width: 22px;
                height: 22px;
                background: url('../../assets/img/118.png') no-repeat center;
                margin-right: 14px;
            }

            .right {
                float: left;
                height: 100%;
                padding-left: 18px;

                span {
                    vertical-align: middle;
                }
            }

            .icon-sort {
                cursor: pointer;
                position: relative;
                vertical-align: middle;
                display: inline-block;
                width: 20px;
                height: 100%;

                .active {
                    color: $themeColor;
                }

                .el-icon-caret-top {
                    position: absolute;
                    bottom: 20px;
                    left: 0;
                }

                .el-icon-caret-bottom {
                    position: absolute;
                    top: 18px;
                    left: 0;
                }
            }
        }
    }

    .auction-box {
        width: 100%;
        margin-top: 10px;
        min-height: 250px;

        .auction-container {
            float: left;
            margin-right: 10px;
            margin-bottom: 10px;

            &:nth-child(2n) {
                margin: 0;
            }
        }
    }

    .auction-pagination {
        margin-top: 30px;
    }
</style>
<template>
    <div class="home-pick-view">
        <div class="container">
            <div class="wares-sort">
                <div class="wares-atrice clearfix">
                    <div class="left">
                        <span class="icon-list"></span>
                        <span>默认排序</span>
                    </div>
                    <div class="right">
                        <span>价格</span>
                        <div class="icon-sort" @click="chnagePriceSort">
                            <span :class="[priceSort===1?'active':'']" class="el-icon-caret-top"></span>
                            <span :class="[priceSort===-1?'active':'']" class="el-icon-caret-bottom"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="auction-box clearfix">
                <div class="auction-container" v-for="(item,index) in auctionList" :key="item.id">
                    <base-auction-card :auction="item"></base-auction-card>
                </div>
            </div>
            <el-pagination class="auction-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout=" prev,pager,next,slot" :total="total">
                <span>共{{totalPage}}页</span>
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import BaseAuctionCard from "../../components/base/BaseAuctionCard.vue";
    import { getShopAuction } from '../../api/common'
    export default {
        name: 'ShopAuction',
        components: {
            BaseAuctionCard
        },
        data() {
            return {
                priceSort: -1,
                pageIndex: 1,
                pageSize: 20,
                total: 0,
                auctionList: []
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            },
            shopID() {
                return this.$store.state.shop.shopID
            }
        },
        created() {
            this.getAuctionList()
        },
        methods: {
            getAuctionList() {
                getShopAuction(this.shopID, { pageIndex: this.pageIndex, pageSize: this.pageSize }).then((res) => {
                    this.auctionList = res.data.objects;
                    this.pageIndex = res.data.pageIndex;
                    this.pageSize = res.data.pageSize;
                    this.total = res.data.total;
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            chnagePriceSort() {
                this.priceSort = -1 * this.priceSort
            },
            handleCurrentChange(pageIndex) {
                this.pageIndex = pageIndex;
                this.getAuctionList()
            }
        }
    }
</script>

