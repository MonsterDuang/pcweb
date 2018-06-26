<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .home-auction-view {
        padding-top: 30px;
    }

    .home-auction {
        padding: 20px 0;

        .auction-title {
            tab-title('../../assets/img/010.png');
        }

        .auction-container {
            float: left;
            margin-right: 10px;
            margin-bottom: 10px;

            &:nth-child(2n) {
                margin: 0;
            }
        }
    }

    .auction-coll {
        border: 1px solid #e0e0e0;
        background: #ffffff;

        .coll-head {
            height: 68px;
            border-bottom: 1px solid #e0e0e0;
            overflow: hidden;
            line-height: 68px;

            .coll-title {
                float: left;
                padding-left: 18px;
                font-size: 18px;
                vertical-align: middle;

                .icon-paly {
                    display: inline-block;
                    vertical-align: middle;
                    width: 32px;
                    height: 32px;
                    background: $themeColor url('../../assets/img/112.png') no-repeat center;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 6px;
                }
            }

            .refresh-box {
                float: right;
                font-size: 18px;
                color: #333;
                padding-right: 18px;
                cursor: pointer;

                .icon-refresh {
                    display: inline-block;
                    vertical-align: middle;
                    width: 30px;
                    height: 30px;
                    background: #fff url('../../assets/img/refresh.png') no-repeat center;
                    background-size: 100%;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 6px;
                }

                .icon-refresh.turn {
                    animation: rotate 1s linear infinite;
                }
            }
        }

        .auction-video-list {
            padding: 10px;
            min-height: 400px;

            .video-container {
                margin: 0 10px 10px 0;
                float: left;

                &:nth-child(2n) {
                    margin-right: 0;
                }
            }
        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(180deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>
<template>
    <div class="home-auction-view">
        <div class="container auction-coll">
            <div class="coll-head clearfix">
                <div class="coll-title">
                    <span class="icon-paly"></span>拍卖会视频集锦</div>
                <div class="refresh-box" @click="exchange">
                    <span class="icon-refresh" :class="{'turn':change}"></span>换一批</div>
            </div>
            <div class="auction-video-list clearfix">
                <div class="video-container" v-for="(item,index) in videoList" :key="item.id">
                    <home-auction-video :video="item"></home-auction-video>
                </div>
            </div>
        </div>
        <div class="container home-auction">
            <div class="auction-title clearfix">
                <h3>
                    <span class="icon-live"></span>竞拍专区</h3>
            </div>
            <div class="clearfix">
                <div class="auction-container" v-for="(item,index) in auctionList" :key="item.id">
                    <base-auction-card :auction="item"></base-auction-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BaseAuctionCard from "../../components/base/BaseAuctionCard.vue";
    import HomeAuctionVideo from "./HomeAuctionVideo.vue";
    import { getAuctionList, getAuctionVideoList } from '../../api/auction'
    export default {
        name: "HomeAuction",
        components: {
            BaseAuctionCard,
            HomeAuctionVideo
        },
        data() {
            return {
                auctionPage: {
                    pageIndex: 1,
                    pageSize: 12,
                    total: 0
                },
                videoPage: {
                    pageIndex: 1,
                    pageSize: 6,
                    total: 0,
                    hasNext: false
                },
                auctionList: [],
                auctionVideo: 0,
                videoList: [],
                change: false
            }
        },
        created() {
            this.$store.dispatch("gotoPart");
            this.getAuction();
            this.getAuctionVideoList();
        },
        methods: {
            getAuction() {
                getAuctionList({ pageIndex: this.auctionPage.pageIndex, pageSize: this.auctionPage.pageSize }).then((res) => {
                    this.auctionList = res.data.objects
                    this.auctionPage.total = res.data.total
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            getAuctionVideoList() {
                getAuctionVideoList({ pageIndex: this.videoPage.pageIndex, pageSize: this.videoPage.pageSize }).then((res) => {
                    this.videoList = res.data.objects
                    this.videoPage.total = res.data.total
                    this.videoPage.hasNext = res.data.hasNext
                    this.change = false
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            exchange() {
                var self = this
                self.change = true
                if (self.videoPage.hasNext) {
                    ++self.videoPage.pageIndex
                    self.getAuctionVideoList()
                } else {
                    self.videoPage.pageIndex = 1
                    self.getAuctionVideoList()
                }
            }
        }
    };
</script>
