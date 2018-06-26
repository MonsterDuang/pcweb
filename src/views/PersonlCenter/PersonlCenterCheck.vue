<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .check-view {
        width: 100%;
        padding-bottom: 30px;
    }

    .check-box {
        width: 100%;
    }

    .check-container {
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;

        &:nth-child(2n) {
            margin-right: 0;
        }
    }

    .no-check {
        height: 200px;
        color: #989898;
        font-size: 18px;
        text-align: center;
        line-height: 200px;
        background: #fff;
    }
</style>
<template>
    <div class="check-view" v-loading="loading">
        <div class="check-box clearfix">
            <div class="check-container" v-for="(item,index) in checkList" :key="item.id">
                <home-check-card :check="item" :width="510"></home-check-card>
            </div>
            <div v-if="checkList.length ===0" class="no-check">
                您目前还没有鉴定的宝贝哦!
            </div>
        </div>
        <el-pagination v-show="checkList.length>0" class="order-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout="prev,pager,next,slot" :total="total">
            <span>共{{totalPage}}页</span>
        </el-pagination>
    </div>
</template>
<script>
    import HomeCheckCard from '../Home/HomeCheckCard.vue'
    import { getMyAppraisal } from '../../api/my'
    export default {
        name: 'PersonlCenterCheck',
        components: {
            HomeCheckCard
        }, data() {
            return {
                pageIndex: 1,
                pageSize: 4,
                total: 0,
                status: '',
                checkList: [],
                loading: true
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            }
        },
        created() {
            this.getAppraisalData()
        },
        methods: {
            getAppraisalData() {
                this.loading = true
                getMyAppraisal({ pageIndex: this.pageIndex, pageSize: this.pageSize }).then((res) => {
                    this.checkList = res.data.objects
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
                this.getAppraisalData()
            }
        }
    }
</script>

