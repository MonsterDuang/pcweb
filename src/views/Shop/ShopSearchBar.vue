<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .shop-search-bar {
        background: $shopBgColor;
    }

    .search-bar {
        color: #ffffff;
    }

    .shop-info {
        float: left;
        padding: 14px 0;

        .shop-logo {
            float: left;
            width: 74px;
            height: 74px;
            cursor: pointer;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .info-box {
            float: left;
            margin-left: 18px;
            line-height: 34px;

            h4 {
                font-size: 18px;
                font-weight: normal;
                vertical-align: middle;
                cursor: pointer;
            }

            .icon-auth {
                vertical-align: middle;
                display: inline-block;
                width: 50px;
                height: 22px;
                border: 1px solid #fff;
                border-radius: 4px;
                background: url('../../assets/img/117.png') no-repeat center;
            }

            p {
                font-size: 14px;
            }
        }
    }

    .search-box {
        float: right;
        width: 451px;
        height: 40px;
        line-height: 36px;
        margin: 31px 0;

        .search-input {
            width: 390px;
            vertical-align: middle;
            background: rgba(255, 255, 255, 0.3);
            height: 100%;
            padding: 0 16px;
            font-size: 16px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            outline: none;
            color: #ffffff;
        }

        .icon-search {
            display: inline-block;
            vertical-align: middle;
            width: 61px;
            border-left: 1px solid #c1e0e1;
            height: 100%;
            color: $shopBgColor;
            background: #fff;
            font-size: 30px;
            line-height: 38px;
            text-align: center;
            cursor: pointer;
        }
    }
</style>
<template>
    <div class="shop-search-bar">
        <div class="container search-bar clearfix">
            <div class="shop-info clearfix">
                <div @click="toShopIndex" class="shop-logo">
                    <img v-if="shopInfo.logo" :src="shopInfo.logo">
                    <img v-else src="../../assets/img/shopLogo.png" alt="">
                </div>
                <div class="info-box">
                    <h4 @click="toShopIndex">{{shopInfo.name}}
                        <span class="icon-auth"></span>
                    </h4>
                    <p>成交量：{{shopInfo.vol}}</p>
                </div>
            </div>
            <div class="search-box">
                <input @keyup.enter="search" class="search-input" v-model="words" type="text" placeholder="本店搜索">
                <span @click="search" class="icon-search el-icon-search"></span>
            </div>
        </div>
    </div>
</template>
<script>
    import { getShop, shopSearchAuction, shopSearchGoods } from '../../api/common'
    export default {
        name: 'ShopSearchBar',
        data() {
            return {
                words: ''
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
        watch: {
            shopID() {
                this.getShopInfo()
            }
        },
        created() {
            if (this.shopID) {
                this.getShopInfo()
            }
        },
        methods: {
            getShopInfo() {
                getShop(this.shopID).then((res) => {
                    this.$store.dispatch('openShop', res.data)
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            search() {
                Promise.all([shopSearchAuction(this.shopID, { words: this.words }), shopSearchGoods(this.shopID, { words: this.words })]).then((datasets) => {
                    this.$store.dispatch('shopSearch', {
                        goods: datasets[1].data,
                        auctions: datasets[0].data
                    })
                }).catch((err) => {
                    console.log(err)
                })

                this.$router.push({ name: 'shopSearch' })
            },
            toShopIndex() {
                this.$router.push({ name: 'shopIndex', params: { shopID: this.shopID } });
            }
        }
    }
</script>
