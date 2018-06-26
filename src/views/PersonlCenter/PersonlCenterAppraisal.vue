<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .auction-view {
        width: 100%;
        padding-bottom: 30px;
    }

    .appraisal-boxing {
        width: 100%;
    }

    .auction-box {
        width: 100%;
        padding-bottom: 20px;
    }

    .auction-container {
        float: left;
        margin-right: 8px;
        margin-bottom: 8px;

        &:nth-child(2n) {
            margin-right: 0;
        }
    }

    .data-tabs {
        height: 60px;
        padding: 10px 0;
        font-size: 16px;
        line-height: 40px;
        margin-bottom: 8px;
        border-bottom: 1px solid #e0e0e0;

        span {
            padding: 0 34px 14px 34px;
            cursor: pointer;
            font-size: 20px;
            line-height: 40px;

            &.active {
                border-bottom: 2px solid $themeColor;
            }
        }

        .add-auction {
            float: right;
            color: #4fa2a9;
            cursor: pointer;
        }
    }

    .wares-card {
        width: 1040px;
        padding: 20px;
        background: #fff;
        margin-bottom: 20px;
    }

    .wares-img {
        float: left;
        width: 160px;
        height: 160px;
        background: #d6d6d6;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .wares-info {
        float: left;
        margin-left: 24px;
        width: 716px;
        font-size: 16px;
        height: 160px;

        p {
            line-height: 36px;
        }

        .wares-price {
            margin-bottom: 10px;
        }

        .wares-address {
            color: #cfcfcf;
            text-wrap();
        }
    }

    .wares-action {
        float: left;
        height: 160px;
        width: 90px;
        position: relative;

        button {
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

    .appraisal-container {
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;

        &:nth-child(2n) {
            margin-right: 0;
        }
    }

    .no-appraisal {
        height: 200px;
        color: #989898;
        font-size: 18px;
        text-align: center;
        line-height: 200px;
        background: #fff;
    }
</style>
<template>
    <div class="auction-view" v-loading="loading">
        <div class="appraisal-boxing" v-show="!showDetail">
            <div class="data-tabs clearfix">
                <span @click="changeTab('did-not')" :class="[status==='did-not'?'theme-font active':'']">未鉴定</span>
                <span @click="changeTab('did')" :class="[status==='did'?'theme-font active':'']">已鉴定</span>
            </div>
            <div class="auction-box clearfix" v-show="status==='did-not'">
                <div class="appraisal-container" v-for="item in appraisalList" :key="item.id">
                    <personl-center-appraisal-card @toDetail="toDetail" :check="item" :width="510"></personl-center-appraisal-card>
                </div>
                <div v-if="appraisalList.length ===0" class="no-appraisal">
                    目前还没有等待鉴定的宝贝！
                </div>
            </div>
            <div class="auction-box clearfix" v-show="status==='did'">
                <div class="appraisal-container" v-for="item in appraisalList" :key="item.id">
                    <personl-center-appraisal-card :check="item" :width="510"></personl-center-appraisal-card>
                </div>
                <div v-if="appraisalList.length ===0" class="no-appraisal">
                    您还没有鉴定过宝贝!
                </div>
            </div>
            <el-pagination v-show="appraisalList.length>0" class="order-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout="prev,pager,next,slot" :total="total">
                <span>共{{totalPage}}页</span>
            </el-pagination>
        </div>
        <personl-center-appraise @toBack="showDetail=false" v-if="showDetail" :appraise="appraise"></personl-center-appraise>
    </div>
</template>
<script>
    import PersonlCenterAppraisalCard from './PersonlCenterAppraisalCard.vue'
    import PersonlCenterAppraise from './PersonlCenterAppraise.vue'
    import { getMyAppraisal } from '../../api/my'
    export default {
        name: 'PersonlCenterAppraisal',
        components: {
            PersonlCenterAppraisalCard,
            PersonlCenterAppraise
        },
        data() {
            return {
                showDetail: false,
                pageIndex: 1,
                pageSize: 8,
                total: 0,
                loading: true,
                status: 'did-not',
                appraisalList: [],
                appraise: {}
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            },
            shop() {
                return this.$store.state.user.shop
            }
        },
        created() {
            this.getAppraisalList()
        },
        methods: {
            toDetail(appraise) {
                this.appraise = appraise
                this.showDetail = true
            },
            changeTab(tab) {
                this.status = tab
                this.getAppraisalList()
            },
            getAppraisalList() {
                this.loading = true
                getMyAppraisal({ pageIndex: this.pageIndex, pageSize: this.pageSize, status: this.status }).then((res) => {
                    this.appraisalList = res.data.objects
                    this.pageIndex = res.data.pageIndex
                    this.pageSize = res.data.pageSize
                    this.total = res.data.total
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            handleCurrentChange(pageIndex) {
                this.pageIndex = pageIndex
                this.getAuctionData()
            }
        }
    }
</script>

