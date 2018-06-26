<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .home-check-view {
        padding-top: 30px;
        padding-bottom: 10px;
    }

    .check-container {
        margin: 0 20px 20px 0;
        float: left;

        &:nth-child(2n) {
            margin: 0;
        }
    }

    .check-list {
        min-height: 570px;
    }

    .my-pagination {
        padding-bottom: 30px;
    }
</style>
<template>
    <div class="home-check-view">
        <div class="container check-list  clearfix">
            <div class="check-container" v-for="(item,index) in checkList" :key="item.id">
                <home-check-card :check="item"></home-check-card>
            </div>
        </div>
        <div class="container">
            <el-pagination class="my-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout=" prev,pager,next,slot" :total="total">
                <span>共{{totalPage}}页</span>
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import HomeCheckCard from './HomeCheckCard.vue'
    import { getAppraisal } from '../../api/common'
    export default {
        name: "HomeCheck",
        components: {
            HomeCheckCard
        },
        data() {
            return {
                pageIndex: 1,
                pageSize: 8,
                total: 0,
                checkList: []
            };
        },
        computed: {
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            }
        },
        created() {
            this.getCheckList()
        },
        methods: {
            handleCurrentChange(pageIndex) {
                this.pageIndex = pageIndex
                this.getCheckList()
            },
            getCheckList() {
                getAppraisal({
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }).then((res) => {
                    this.checkList = res.data.objects
                    this.pageIndex = res.data.pageIndex
                    this.pageSize = res.data.pageSize
                    this.total = res.data.total
                    this.$_backTop()
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            }
        }
    };
</script>
