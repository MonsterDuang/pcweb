<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .refer-auction-view {
        width: 100%;
        background: #f4f4f4;
        padding-bottom: 30px;
    }

    .auction-head-bar {
        width: 100%;
        background: #4f9da4;
        height: 101px;

        h4 {
            color: #fff;
            font-size: 18px;
            font-weight: normal;
            line-height: 101px;
        }
    }

    .auction-content {
        width: 100%;
        margin-top: 30px;

        .auction-box {
            width: 100%;
            background: #fff;
            min-height: 374px;
        }
    }

    .auction-box {
        width: 100%;
        background: #fff;
        min-height: 374px;
        padding: 20px;

        .auction-imgs {
            float: left;
            width: 790px;

            .auction-great-img {
                float: left;
                width: 661px;
                height: 660px;
                background: #e0e0e0;
                margin-right: 9px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .auction-img-list {
                float: left;
                width: 120px;

                div {
                    cursor: pointer;
                    width: 100%;
                    height: 102px;
                    background: #e0e0e0;
                    margin-bottom: 9.5px;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

        .auction-state {
            float: left;
            margin-left: 20px;
            width: 350px;

            .auction-price {
                color: $themeColor;
                font-size: 16px;

                p {
                    margin: 20px 0;
                }

                span {
                    display: inline-block;
                    width: 33.33%;

                    &:nth-child(2n) {
                        text-align: center;
                    }

                    &:nth-child(3n) {
                        text-align: right;
                    }
                }

                .auction-name {
                    font-size: 16px;
                    color: #333;
                    text-wrap();
                    padding-bottom: 10px;
                }
            }

            .auction-main {
                border-bottom: 1px solid #e8e8e8;
                border-top: 1px solid #e8e8e8;
                line-height: 30px;

                .auction-promise {
                    padding: 15px 0;

                    span {
                        padding-right: 10px;
                        color: #a3a3a3;
                        font-size: 16px;

                        i {
                            display: inline-block;
                            width: 28px;
                            height: 28px;
                            vertical-align: top;
                        }

                        .icon-just {
                            background: url('../../assets/img/122.png') no-repeat center;
                        }

                        .icon-seven {
                            background: url('../../assets/img/123.png') no-repeat center;
                        }
                    }
                }
            }

            .icon-keep {
                background: url('../../assets/img/145.png') no-repeat center;
            }

            .icon-start {
                background: url('../../assets/img/146.png') no-repeat center;
            }

            .icon-add {
                background: url('../../assets/img/147.png') no-repeat center;
            }

            .icon-mail {
                background: url('../../assets/img/148.png') no-repeat center;
            }

            .icon-keep, .icon-start, .icon-add, .icon-mail {
                display: inline-block;
                width: 28px;
                height: 28px;
                background-size: 70%;
                vertical-align: middle;
            }

            .auction-params {
                height: 376px;
                padding: 25px 0;
                font-size: 16px;
                line-height: 36px;
                width: 100%;
                overflow: auto;

                p {
                    width: 100%;
                }

                .params-key {
                    color: #969696;
                }

                .params-val {
                    color: #333;
                }
            }
        }
    }

    .auction-action {
        padding-top: 30px;

        button {
            vertical-align: bottom;
            width: 100%;
            border-radius: 4px;
            height: 40px;
            font-size: 18px;
            border: none;
            text-align: center;
            line-height: 40px;
            outline: none;
            color: #fff;
        }

        .btn-noStart {
            background: #e0e0e0;
        }

        .btn-auction {
            background: $themeColor;
            cursor: pointer;
        }

        .btn-end {
            background: #fff;
            color: #989898;
        }
    }

    .auction-time {
        font-size: 14px;
        color: #a4a4a4;
        padding: 20px 0;
        border-bottom: 1px solid #e8e8e8;
        border-top: 1px solid #e8e8e8;
        text-align: left;
    }

    .auction-endTime i {
        font-style: normal;
        color: $themeColor;
    }

    .auction-startTime i {
        font-style: normal;
        color: #21ae37;
    }

    .auction-more {
        margin-top: 30px;
        width: 100%;

        .more-head {
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 16px;

            span {
                color: #898989;
                font-size: 18px;
                float: left;
            }

            .more-url {
                float: right;
                font-size: 18px;
                color: #65adb2;

                .el-icon-d-arrow-right {
                    color: #65adb2;
                    line-height: 30px;
                }
            }
        }

        .more-box {
            min-height: 250px;

            .more-container {
                float: left;
                margin-right: 10px;
                margin-bottom: 10px;

                &:nth-child(2n) {
                    margin-right: 0;
                    margin-bottom: 0;
                }
            }
        }
    }

    .auction-open {
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);

        .open-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            img {
                width: 320px;
                height: 320px;
            }

            p {
                margin: 20px 0;
                color: #fff;
                text-align: center;
                font-size: 17px;
            }
        }
    }
</style>
<template>
    <div class="refer-auction-view">
        <div class="auction-head-bar">
            <div class="container">
                <h4 v-text="detail.title"></h4>
            </div>
        </div>
        <div class="auction-content">
            <div class="container">
                <div class="auction-box clearfix" v-loading="loading">
                    <div class="auction-imgs clearfix">
                        <div class="auction-great-img">
                            <img :src="currCover" :alt="detail.title">
                        </div>
                        <div class="auction-img-list">
                            <div @click="changeCover(img)" v-for="(img,index) in detail.photos" :key="detail.photoKeys[index]"><img :src="img" :alt="detail.name"></div>
                        </div>
                    </div>
                    <div class="auction-state">
                        <div class="auction-price">
                            <p class="auction-name" v-text="detail.title"></p>
                            <p>
                                <span class="theme-font">
                                    <i class="icon-keep"></i>{{detail.marginMoney}}元</span>
                                <span class="theme-font">
                                    <i class="icon-start"></i>{{detail.floorPrice}}元</span>
                                <span class="theme-font">
                                    <i class="icon-add"></i>{{detail.raisePriceRange}}元</span>
                            </p>
                            <p>
                                <span class="theme-font">
                                    <i class="icon-mail"></i>{{detail.postage}}元</span>
                            </p>
                        </div>
                        <div class="auction-main">
                            <p class="auction-promise">
                                <span>
                                    <i class="icon-just"></i> 绝对正品</span>
                                <span>
                                    <i class="icon-seven"></i> 七天自由退换</span>
                            </p>
                        </div>
                        <div class="auction-params">
                            <p class="auction-desc" v-text="detail.description"></p>
                        </div>

                        <div v-if="detail.auctionStatus ==='ing'" class="auction-time auction-endTime">
                            离结束还剩:
                            <i v-text="hour"></i>小时
                            <i v-text="minu"></i>分
                            <i v-text="sec"></i>秒
                        </div>
                        <div v-else-if="detail.auctionStatus ==='not-started'" class="auction-time auction-startTime">
                            离开场还需:
                            <i v-text="hour"></i>小时
                            <i v-text="minu"></i>分
                            <i v-text="sec"></i>秒
                        </div>
                        <div v-else-if="detail.auctionStatus ==='end'" class="auction-time auction-endTime">
                            拍卖已结束
                        </div>
                        <div v-else-if="!detail.isSoldOut &&(detail.auctionStatus==='ing' || detail.auctionStatus==='not-started') " class="auction-action">
                            <button v-if="detail.auctionStatus==='ing'" class="btn-auction" @click="toAuction">我要参拍</button>
                            <button v-else-if="detail.auctionStatus==='not-started'" class="btn-noStart">未开始</button>
                            <!-- <button v-else-if="detail.auctionStatus==='end'" class="btn-end">已结束</button> -->
                        </div>
                        <div v-else class="auction-action">
                            <button class="btn-end">拍品已下架</button>
                        </div>
                    </div>
                </div>
                <div class="auction-more">
                    <div class="more-head clearfix">
                        <span>更多拍卖</span>
                        <router-link class="more-url theme-font" :to="{name: 'homeAuction'}">
                            <span class="el-icon-d-arrow-right"></span>查看更多</router-link>
                    </div>
                    <div class="more-box clearfix">
                        <div class="more-container" v-for="(auction,index) in moreAuction" :key="auction.id">
                            <base-auction-card :auction="auction"></base-auction-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showQRCode" class="auction-open" @click.self="showQRCode=false">
            <div class="open-box"><img src="../../assets/img/qrcode.png" alt="">
                <p>扫描二维码载“艺方购APP”才能参与竞拍哦！</p>
            </div>
        </div>
    </div>
</template>
<script>
    import { getAuctionDetail, getAuctionList } from '../../api/auction'
    import BaseAuctionCard from "../../components/base/BaseAuctionCard.vue";
    export default {
        name: 'ReferAuctionDetail',
        props: {
            auctionID: {
                required: true
            }
        },
        components: {
            BaseAuctionCard
        },
        beforeRouteUpdate(to, from, next) {
            this.getAuctionData(to.params.auctionID)
            next()
        },
        data() {
            return {
                detail: {},
                currCover: '',
                minu: '',
                sec: '',
                hour: '',
                moreAuction: [],
                loading: true,
                showQRCode: false
            }
        },
        created() {
            this.getAuctionData()
            this.getMoreAuction()
        },
        methods: {
            toAuction() {
                this.showQRCode = true
            },
            getMoreAuction() {
                getAuctionList({ pageIndex: 1, pageSize: 6 }).then((res) => {
                    this.moreAuction = res.data.objects
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            getAuctionData(auctionID) {
                this.loading = true
                getAuctionDetail(auctionID || this.auctionID).then((res) => {
                    this.detail = res.data
                    this.currCover = this.detail.photos[0]
                    this.getDate(this.detail.auctionStartAt, this.detail.auctionEndAt)
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            changeCover(img) {
                this.currCover = img
            },
            getDate(start, end) {
                start = new Date(start)
                end = new Date(end)
                let now = Date.now()
                let date = null
                if (start.getTime() > now) {
                    date = (start.getTime() - now)
                } else {
                    date = (end.getTime() - now)
                }
                this.sec = Math.floor(date / 1000) % 60
                this.minu = Math.floor(date / 1000 / 60) % 60
                this.hour = Math.floor(date / 1000 / 60 / 60)
            }
        }
    }
</script>
