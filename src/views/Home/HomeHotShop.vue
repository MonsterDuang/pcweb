<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .home-hotShop-view {
        padding-top: 18px;
    }

    .hotShop-sort {
        width: 100%;
        height: 50px;
        background: #f3f3f3;
        background: linear-gradient(top, #fefefe, #f4f4f4);

        .hotShop-atrice {
            width: 410px;
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

                >span {
                }
            }
        }
    }

    .hotShop-list {
        margin-top: 14px;
        min-height: 410px;

        .hotShop-container {
            float: left;
            margin-right: 8px;
            margin-bottom: 9px;

            &:nth-child(2n) {
                margin-right: 0;
            }
        }
    }
</style>

<template>
    <div class=" home-hotShop-view" v-loading="loading">
        <div class="container">
            <div class="hotShop-sort">
                <div class="hotShop-atrice clearfix">
                    <div class="left">
                        <span class="icon-list"></span>
                        <span>默认排序</span>
                    </div>
                    <div class="right">
                        <span>地区:</span>
                        <el-select size="mini" popper-class="hot-select" class="hotShop-sort-select" @change="provinceChange" v-model="province" placeholder="请选择">
                            <el-option v-for="item in cityData" :key="item.code" :label="item.name" :value="item.code">
                            </el-option>
                        </el-select>
                        <el-select size="mini" popper-class="hot-select" @change="cityChange" class="hotShop-sort-select" v-model="city" placeholder="请选择">
                            <el-option v-for="item in provinceList" :key="item.code" :label="item.name" :value="item.code">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="hotShop-list clearfix">
                <div class="hotShop-container" v-for="(item,index) in hotShopList" :key="item.id">
                    <home-hot-shop-card :shop="item"></home-hot-shop-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import HomeHotShopCard from './HomeHotShopCard.vue'
    import { cityHash, cityData, searchCityCode } from '../../util/city'
    import { getHotShop } from '../../api/home'
    export default {
        name: 'HomeHotShop',
        components: {
            HomeHotShopCard
        },
        data() {
            return {
                province: '',
                provinceList: [{ code: '', name: '请选择省份' }],
                pageIndex: 1,
                pageSize: 10,
                hotShopList: [],
                loading: true,
                cityData: [].concat([{ code: '', name: '请选择' }], cityData),
                city: '',
                area: {
                    province: '',
                    city: ''
                }
            }
        },
        created() {
            this.getHotShopList()
        },
        methods: {
            cityChange(code) {
                this.area.city = code ? cityHash[code].fullname : ''
                this.getHotShopList()
            },
            provinceChange(code) {
                this.area.province = code ? cityHash[code].fullname : ''
                this.provinceList = code ? [{ code: '', name: '请选择' }].concat(cityHash[code].district) : [{ code: '', name: '请选择' }]
                if (this.area.province) {
                    this.$nextTick(() => {
                        this.city = ''
                        this.area.city = ''
                    })
                    this.getHotShopList()
                } else {
                    this.getHotShopList()
                }
            },
            getHotShopList(area) {
                this.loading = true
                getHotShop({
                    pageSize: this.pageSize,
                    pageIndex: this.pageIndex,
                    province: this.area.province,
                    city: this.area.city
                }).then((res) => {
                    this.hotShopList = res.data.objects
                    this.$nextTick(() => {
                        this.loading = false
                    })
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                    this.loading = false
                })
            }
        }
    }
</script>
