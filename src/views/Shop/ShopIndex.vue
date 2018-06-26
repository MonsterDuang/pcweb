<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .shop-index-view {
        width: 100%;
        background: #f4f4f4;
    }

    .shop-auction {
        margin-top: 50px;

        .auction-title {
            tab-title('../../assets/img/010.png');
        }
    }

    .auction-box {
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

    .shop-market {
        margin-top: 30px;

        .market-title {
            tab-title('../../assets/img/114.png');
        }

        .market-container {
            float: left;
            margin-right: 9px;
            margin-bottom: 9px;

            &:nth-child(5n) {
                margin: 0;
            }
        }
    }

    .market-box {
        min-height: 312px;
    }

    .not-data {
        height: 250px;
        color: #989898;
        background: #fff;
        text-align: center;
        line-height: 250px;
        font-size: 20px;
    }
</style>
<template>
    <div class="shop-index-view">
        <base-carousel :banner="banner"></base-carousel>
        <div class="container shop-auction">
            <div class="auction-title clearfix">
                <h3>
                    <span class="icon-live"></span>拍卖市场</h3>
                <router-link class="look-more" :to="{name: 'shopAuction'}">
                    <span class="el-icon-d-arrow-right"></span>查看更多</router-link>
            </div>
            <div class="auction-box clearfix">
                <div class="auction-container" v-for="item in auctionList" :key="item.id">
                    <base-auction-card :auction="item"></base-auction-card>
                </div>
                <div class="not-data" v-if="auctionList.length===0">暂无拍卖数据</div>
            </div>
            <div class="container shop-market">
                <div class="market-title clearfix">
                    <h3>
                        <span class="icon-live"></span>精选市场
                    </h3>
                    <router-link class="look-more" :to="{name:'shopWares'}">
                        <span class="el-icon-d-arrow-right"></span>查看更多</router-link>
                </div>
                <div class="clearfix market-box">
                    <div class="market-container" v-for="item in goodsList" :key="item.id">
                        <base-wares-card :goods="item"></base-wares-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BaseCarousel from '../../components/base/BaseCarousel.vue'
    import BaseAuctionCard from '../../components/base/BaseAuctionCard.vue'
    import BaseWaresCard from '../../components/base/BaseWaresCard.vue'
    import { getShopAuction, getShopGoods, getShopBanner } from '../../api/common'
    export default {
        name: "ShopIndex",
        components: {
            BaseCarousel,
            BaseAuctionCard,
            BaseWaresCard
        },
        data() {
            return {
                goodsList: [],
                auctionList: [],
                banner: []
            }
        },
        computed: {
            shopID() {
                return this.$store.state.shop.shopID
            },
            shopInfo() {
                return this.$store.state.shop.shopInfo
            }
        },
        created() {
            this.getAuctionList();
            this.getGoodsList();
            this.getBanner();
        },
        methods: {
            getBanner() {
                getShopBanner(this.shopID).then((res) => {
                    this.banner = res.data
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            getAuctionList() {
                getShopAuction(this.shopID, { pageIndex: 1, pageSize: 6 }).then((res) => {
                    this.auctionList = res.data.objects.map((item) => {
                        item.shop = Object.assign({}, this.shopInfo)
                        return item
                    });
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            getGoodsList() {
                getShopGoods(this.shopID, { pageIndex: 1, pageSize: 20 }).then((res) => {
                    this.goodsList = res.data.objects.map((item) => {
                        item.shop = item.shop || this.shopID
                        return item
                    })
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            }
        }
    }
</script>
