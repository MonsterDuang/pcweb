<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .shop-search-result {
        min-height: 250px;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .auction-box {
        width: 100%;
        margin-top: 10px;

        .auction-container {
            float: left;
            margin-right: 10px;
            margin-bottom: 10px;

            &:nth-child(2n) {
                margin: 0;
            }
        }
    }

    .wares-box {
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
</style>
<template>
    <div class="shop-search-result">
        <div class="container">
            <div class="auction-box clearfix" v-if="auctions.objects">
                <div class="auction-container"  v-for="item in addShopInfo(auctions.objects)" :key="item.id">
                    <base-auction-card :auction="item"></base-auction-card>
                </div>
            </div>
            <div class="wares-box clearfix" v-if="goods.objects">
                <div class="wares-container" v-for="item in addShopInfo(goods.objects)" :key="item.id">
                    <base-wares-card :goods="item"></base-wares-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BaseAuctionCard from "../../components/base/BaseAuctionCard.vue";
    import BaseWaresCard from '../../components/base/BaseWaresCard.vue'
    export default {
        name: 'ShopSearchResult',
        components: {
            BaseAuctionCard,
            BaseWaresCard
        },
        data() {
            return {}
        },
        computed: {
            goods() {
                return this.$store.state.shop.searchResult.goods
            },
            auctions() {
                return this.$store.state.shop.searchResult.auctions
            },
            shopInfo() {
                return this.$store.state.shop.shopInfo
            }
        },
        methods: {
            addShopInfo(auctions) {
                return auctions.map((item) => {
                    item.shop = this.shopInfo
                    return item
                })
            }
        }
    }
</script>

