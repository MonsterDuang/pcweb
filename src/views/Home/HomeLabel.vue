<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .home-label-view {
        width: 100%;
        padding-bottom: 30px;
    }

    .home-label-view .bread-nav {
        padding: 30px 0;
        font-size: 18px;
        color: #afafaf;

        .nav-tag {
            color: #afafaf;
        }
    }

    .hotShop-sort {
        width: 100%;
        height: 50px;
        background: #f3f3f3;
        background: linear-gradient(top, #fefefe, #f4f4f4);

        .hotShop-atrice {
            width: 610px;
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
                padding: 0 18px;
            }

            .shop {
                float: left;
                height: 100%;
                padding: 0 30px;
                border-right: 1px solid #e0e0e0;
            }

            .price {
                float: left;
                height: 100%;
                padding: 0 18px;
                border-right: 1px solid #e0e0e0;

                span {
                    vertical-align: middle;
                }
            }

            .icon-sort {
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

    .wares-area {
        width: 100%;
        margin-top: 10px;

        .wares-container {
            float: left;
            margin-right: 9px;
            margin-bottom: 9px;

            &:nth-child(5n) {
                margin: 0;
            }
        }
    }

    .wares-pagination {
        padding-bottom: 30px;
    }
</style>

<template>
    <div class="home-label-view">
        <div class="container" v-loading="loading">
            <el-breadcrumb class="bread-nav" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item class="nav-tag">当前位置</el-breadcrumb-item>
                <el-breadcrumb-item class="nav-tag" :to="{ name: 'homeIndex' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item class="nav-tag" :to="{ name: 'homeIndex' }">商品分类</el-breadcrumb-item>
                <el-breadcrumb-item class="nav-tag" v-if="currTag">{{currTag.name}}</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="hotShop-sort">
                <div class="hotShop-atrice clearfix">
                    <div class="left">
                        <span class="icon-list"></span>
                        <span>默认排序</span>
                    </div>
                    <div class="price">
                        <span>价格</span>
                        <div class="icon-sort" @click="changePriceSort">
                            <span :class="[priceSort===1?'active':'']" class="el-icon-caret-top"></span>
                            <span :class="[priceSort===-1?'active':'']" class="el-icon-caret-bottom"></span>
                        </div>
                    </div>
                    <div class="shop">
                        <span>商家</span>
                    </div>
                    <div class="right">
                        <span>地区:</span>
                        <el-select size="mini" popper-class="hot-select" class="hotShop-sort-select" v-model="province" placeholder="请选择">
                            <el-option v-for="item in provinceList" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select size="mini" popper-class="hot-select" class="hotShop-sort-select" v-model="province" placeholder="请选择">
                            <el-option v-for="item in provinceList" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="wares-area clearfix">
                <div class="wares-container" v-for="(item,index) in goodsList" :key="item.id">
                    <base-wares-card :goods="item"></base-wares-card>
                </div>
            </div>

            <el-pagination class="wares-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout=" prev,pager,next,slot" :total="total">
                <span>共{{totalPage}}页</span>
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import BaseWaresCard from "../../components/base/BaseWaresCard.vue";
    import { getHotGoods } from '../../api/common'
    export default {
        name: 'HomeLable',
        components: {
            BaseWaresCard
        },
        data() {
            return {
                priceSort: -1,
                province: '',
                provinceList: [{
                    value: '01',
                    label: '北京',
                }, {
                    value: '02',
                    label: '深圳'
                }],
                total: 0,
                pageIndex: 1,
                pageSize: 25,
                sort: '-price',
                category: '',
                goodsList: [],
                loading: true
            }
        },
        computed: {
            tagMap() {
                return this.$store.state.home.navbar.tagMap
            },
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            },
            currTag() {
                let id = this.$route.params.tag
                let currTag = null
                this.tagMap.forEach((tag) => {
                    if (tag.id === id) {
                        currTag = tag
                    }
                })

                return currTag
            }
        },
        watch: {
            currTag() {
                this.getGoodsList()
            }
        },
        created() {
            if (this.currTag) {
                this.getGoodsList();
            }
        },
        methods: {
            handleCurrentChange(pageIndex) {
                this.pageIndex = pageIndex
                this.getGoodsList()
            },
            changePriceSort() {
                this.priceSort = -1 * this.priceSort
                this.sort = (this.priceSort + '').replace('1', 'price')
                this.getGoodsList()
            },
            getGoodsList() {
                this.loading = true
                getHotGoods({
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize,
                    category: this.currTag.id,
                    sort: this.sort
                }).then((res) => {
                    this.loading = false
                    this.goodsList = res.data.objects;
                    this.pageIndex = res.data.pageIndex;
                    this.pageSize = res.data.pageSize;
                    this.total = res.data.total;
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            }
        }
    }
</script>
