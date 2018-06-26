<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .preview-wares {
        width: 100%;
        padding-top: 20px;
        padding-bottom: 30px;
        min-height: 350px;
    }

    .preview-container {
        float: left;
        margin-right: 8px;
        margin-bottom: 9px;

        &:nth-child(2n) {
            margin-right: 0;
        }
    }

    .wares-box {
        width: 100%;
        background: #fff;
        padding: 20px 0;
        margin-bottom: 50px;
    }

    .wares-imgs {
        float: left;
        padding: 0 20px;
        height: 660px;
        width: 830px;

        .wares-cover {
            float: left;
            width: 660px;
            height: 660px;
            background: #d6d6d6;
            margin-right: 10px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .wares-bre {
            float: left;
            width: 120px;

            li {
                cursor: pointer;
                height: 100px;
                width: 100%;
                margin-bottom: 12px;
                background: #d6d6d6;

                img {
                    width: 100%;
                    height: 100%;
                }

                &:last-child {
                    margin-bottom: 0px;
                }
            }
        }
    }

    .wares-info {
        float: right;
        width: 370px;

        .wares-name {
            border-bottom: 2px solid #efefef;
            color: #979797;
            font-size: 18px;
            padding-bottom: 20px;

            h4 {
                font-weight: normal;
                color: #333;
                padding-bottom: 20px;
            }

            p {
                line-height: 42px;
            }
        }

        .wares-auction {
            border-bottom: 2px solid #efefef;
            color: #979797;
            font-size: 18px;
            padding: 20px 0;

            p {
                line-height: 40px;
                margin-left: -10px;
            }
        }

        .wares-desc {
            padding: 20px 20px 20px 0;
            width: 100%;
            color: #333;
            line-height: 36px;
            overflow: hidden;
            height: 310px;
        }
    }

    .rest-wares {
        .title-line {
            color: #979797;
            font-size: 18px;
            padding-bottom: 20px;

            span {
                float: left;
            }

            a {
                float: right;
                color: $shopBgColor;
            }
        }
    }
</style>
<template>
    <div class="preview-wares">
        <div class="container">
            <div class="wares-box clearfix" v-loading="loading">
                <div class="wares-imgs clearfix">
                    <div class="wares-cover"><img :src="currCover" :alt="wares.name"></div>
                    <ul class="wares-bre">
                        <li v-for="(img,index) in wares.covers" @click="changeImg(img)" :key="index"><img :src="img"></li>
                    </ul>
                </div>
                <div class="wares-info">
                    <div class="wares-name">
                        <h4 v-text="wares.name"></h4>
                        <p>产品编号：{{wares.no}}</p>
                        <p>产品估价：
                            <span class="theme-font">¥{{wares.valuation}}</span>
                        </p>
                    </div>
                    <div class="wares-auction">
                        <p>【拍卖底价】
                            <span class="theme-font">¥{{wares.floorPrice}}</span>
                        </p>
                        <p>【加价幅度】
                            <span class="theme-font">¥{{wares.raisePriceRange}}</span>
                        </p>
                        <p>【开拍时间】
                            <span>{{$_dateFormat(wares.auctionStartAt)}}</span>
                        </p>
                        <p>【结束时间】
                            <span>{{$_dateFormat(wares.auctionEndAt)}}</span>
                        </p>
                    </div>
                    <div class="wares-desc">
                        {{wares.intro}}
                    </div>
                </div>
            </div>
            <div class="rest-wares">
                <p class="title-line clearfix">
                    <span>其他展品</span>
                    <router-link :to="{name: 'previewShop',params:{shopID:wares.shop}}">&gt;&gt;查看全部</router-link>
                </p>
                <div class="wares-container clearfix">
                    <div class="preview-container" v-for="(item,index) in waresList" :key="item.id">
                        <preview-wares-card :wares="item"></preview-wares-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PreviewWaresCard from './PreviewWaresCard.vue'
    import { getPreviewGoods, getPreviewGoodsList } from '../../api/preview'
    export default {
        name: 'PreviewWares',
        props: ['goodsID'],
        components: {
            PreviewWaresCard
        },
        data() {
            return {
                waresList: [],
                wares: {},
                currCover: '',
                loading: true
            }
        },
        beforeRouteUpdate(to, form, next) {
            this.getWares(to.params.goodsID)
            next()
        },
        created() {
            this.getWares()
        },
        methods: {
            changeImg(img) {
                this.currCover = img
            },
            getWares(goodsID) {
                this.loading = true
                getPreviewGoods(goodsID || this.goodsID).then((res) => {
                    this.wares = res.data
                    this.currCover = this.wares.covers[0]
                    this.loading = false
                    this.getPreviewShop()
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                    this.loading = false
                })
            },
            getPreviewShop() {
                getPreviewGoodsList(this.wares.shop, {
                    pageIndex: 1,
                    pageSize: 10
                }).then((res) => {
                    this.waresList = res.data.objects
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            }
        }
    }
</script>
