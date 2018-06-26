<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .preview-shop {
        min-height: 350px;
        width: 100%;
        padding-bottom: 30px;
    }

    .preview-info {
        width: 100%;
        background: #fff;
        padding: 40px;
        margin-bottom: 10px;

        p {
            width: 100%;
            font-size: 18px;
            color: #9d9d9d;
        }

        p.info-line {
            padding-bottom: 35px;

            span {
                padding-right: 150px;

                &:last-child {
                    padding-right: 0px;
                }
            }
        }
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
    <div class="preview-shop" v-loading="loading">
        <div class="container">
            <div class="preview-info">
                <p class="info-line">
                    <span>预展商家：{{shop.name}}</span>
                    <span>预展时间：{{$_dateFormat(shop.startAt)}}</span>
                    <span>展品数量：{{shop.goodsCount}}</span>
                </p>
                <p>预展地点：{{shop.address}}</p>
            </div>
            <div class="wares-container clearfix">
                <div class="preview-container" v-for="(item,index) in waresList" :key="item.id">
                    <preview-wares-card :wares="item"></preview-wares-card>
                </div>
            </div>
            <el-pagination class="wares-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout=" prev,pager,next,slot" :total="total">
                <span>共{{totalPage}}页</span>
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import PreviewWaresCard from './PreviewWaresCard.vue'
    import { getPreviewGoodsList, getPreviewShop } from '../../api/preview'
    export default {
        name: 'PreviewShop',
        components: {
            PreviewWaresCard
        },
        props: ['shopID'],
        data() {
            return {
                total: 0,
                pageIndex: 1,
                pageSize: 12,
                waresList: [],
                loading: true,
                shop: {}
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            }
        },
        created() {
            this.getPreviewShop()
            this.getShop()
        },
        methods: {
            handleCurrentChange(page) {
                this.pageIndex = page
                this.getPreviewShop()

            },
            getShop() {
                getPreviewShop(this.shopID).then((res) => {
                    this.shop = res.data
                    this.$store.dispatch('openPreviewShop', this.shop.title)
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            getPreviewShop() {
                this.loading = true
                getPreviewGoodsList(this.shopID, {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }).then((res) => {
                    this.total = res.data.total
                    this.pageIndex = res.data.pageIndex
                    this.waresList = res.data.objects
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                    this.loading = false
                })
            }
        }
    }
</script>
