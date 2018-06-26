<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .home-preview-view {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .preview-container {
        float: left;
        margin-right: 8px;
        margin-bottom: 9px;

        &:nth-child(2n) {
            margin-right: 0;
        }
    }

    .wares-pagination {
        margin-top: 30px;
    }
</style>
<template>
    <div class="home-preview-view" v-loading="loading">
        <div class="container clearfix">
            <div class="preview-container" v-for="(item,index) in previewShops" :key="item.id">
                <home-preview-card :shop="item"></home-preview-card>
            </div>
        </div>
        <div class="container">
            <el-pagination class="wares-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout=" prev,pager,next,slot" :total="total">
                <span>共{{totalPage}}页</span>
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import { getPreviewShops } from '../../api/preview'
    import HomePreviewCard from './HomePreviewCard.vue'
    export default {
        name: 'HomePreview',
        components: {
            HomePreviewCard
        },
        data() {
            return {
                loading: true,
                previewShops: [],
                pageSize: 10,
                pageIndex: 1,
                total: 0
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            }
        },
        created() {
            this.getShops()
        },
        methods: {
            getShops() {
                getPreviewShops({ pageIndex: this.pageIndex, pageSize: this.pageSize }).then((res) => {
                    this.setData(res.data)
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            setData(data){
                this.pageSize = data.pageSize
                this.pageIndex = data.pageIndex
                this.total = data.total
                this.previewShops = data.objects
                this.$nextTick(() => {
                    this.loading = false
                })
            },
            handleCurrentChange(pageIndex) {
                this.pageIndex = pageIndex
                this.loading = true
                this.getShops()
            }
        }
    }
</script>
