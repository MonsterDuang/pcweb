<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .auction-card {
        height: 250px;
        width: 595px;
    }

    .auction-img {
        float: left;
        background: #d6d6d6;
        width: 58.8235%;
        height: 100%;
        border: 1px solid #e5e5e5;
        cursor: pointer;
        text-align: center;

        img {
            height: 100%;
            width: 100%;
            object-fit: scale-down;
        }
    }

    .auction-info {
        float: left;
        width: 41.1764%;
        background: #fff;
        height: 100%;
        padding: 20px 10px;

        .auction-price {
            height: 70px;
            color: #fff;
            padding: 4px 8px;

            span {
                font-size: 14px;
            }

            p {
                text-align: center;
                font-size: 16px;
                line-height: 40px;
            }
        }

        .auction-content {
            text-align: center;
            padding: 20px;
            font-size: 16px;
            border-bottom: 1px solid #e8e8e8;

            p {
                color: #333;
                margin-bottom: 4px;
                text-wrap();
            }

            span {
                display: block;
                font-size: 14px;
                color: #a4a4a4;
                text-wrap();
            }
        }

        .auction-time {
            font-size: 14px;
            color: #a4a4a4;
            padding: 10px 0;
            text-align: center;

            p {
                text-wrap();
                line-height: 26px;
            }
        }

        .auction-endTime i {
            font-style: normal;
            color: $themeColor;
        }

        .auction-startTime i {
            font-style: normal;
            color: #21ae37;
        }
    }

    .auction-start {
        .auction-endTime {
            display: none;
        }

        .auction-price {
            background: #21ae37;
        }
    }

    .auction-end {
        .auction-startTime {
            display: none;
        }

        .auction-price {
            background: $themeColor;
        }
    }
</style>
<template>
    <div class="auction-card clearfix" :style="{width: width+'px'}">
        <div class="auction-img" @click="toDetail">
            <img :src="auction.photos[0]" :alt="auction.description">
        </div>
        <div class="auction-info" :class="auction.auctionStatus ==='not-started'?'auction-start':'auction-end'">
            <div class="auction-price">
                <span v-if="auction.auctionStatus ==='ing'">最新出价:</span>
                <p v-if="auction.auctionStatus ==='ing'">¥{{auction.floorPrice}}</p>
                <p v-else-if="auction.auctionStatus ==='not-started'">未开场</p>
                <p v-else-if="auction.auctionStatus ==='end'">已结束</p>
            </div>
            <div class="auction-content">
                <p v-text="auction.title"></p>
                <span v-if="auction.shop">拍卖机构：{{auction.shop.name}}</span>
            </div>
            <div v-if="auction.auctionStatus ==='ing'" class="auction-time auction-endTime">
                <p>
                    结束还剩:
                    <i v-text="hour"></i>小时
                    <i v-text="minu"></i>分
                    <i v-text="sec"></i>秒
                </p>
                <p>{{$_dateFormat(auction.auctionEndAt)}}</p>
            </div>
            <div v-else-if="auction.auctionStatus ==='not-started'" class="auction-time auction-startTime">
                <p>
                    开场还有:
                    <i v-text="hour"></i>小时
                    <i v-text="minu"></i>分
                    <i v-text="sec"></i>秒
                </p>
                <p>{{$_dateFormat(auction.auctionStartAt)}}</p>
            </div>
            <div v-else-if="auction.result ==='fail' " class="auction-time auction-endTime">
                流拍
            </div>
            <div v-else-if="auction.auctionStatus ==='end'" class="auction-time auction-endTime">
                拍卖已结束
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "BaseAuctionCard",
        props: {
            width: {
                default: 595
            },
            auction: {
                type: Object
            }
        },
        data() {
            return {
                minu: '',
                sec: '',
                hour: ''
            }
        },
        mounted() {
            this.getDate(this.auction.auctionStartAt, this.auction.auctionEndAt)
        },
        methods: {
            toDetail() {
                this.$router.push({ name: 'auctionDetail', params: { auctionID: this.auction.id } })
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
    };
</script>

