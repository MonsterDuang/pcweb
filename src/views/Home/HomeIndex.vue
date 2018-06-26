<style lang="stylus" scoped>
@import '../../stylus/variables.styl';

.home-index {
    width: 100%;
    background: #f4f4f4;
}

.hot-business-area {
    margin-top: 10px;

    .area-title {
        font-size: 20px;
        color: #000000;
        font-weight: normal;
        // vertical-align: middle;
        margin: 30px 0;

        .icon-hot-business {
            display: inline-block;
            vertical-align: middle;
            width: 32px;
            height: 32px;
            background: url('../../assets/img/113.png') no-repeat center;
            background-size: 100%;
            margin-right: 10px;
        }
    }

    .hot-business-list {
        width: 100%;
        overflow: hidden;

        .business-box {
            float: left;
            width: 196.5px;
            height: 120px;
            font-size: 24px;
            text-align: center;
            line-height: 120px;
            background: #fff;
            color: #d5d5d5;
            margin: 0 4px 4px 0;

            a {
                color: #d5d5d5;
                width: 100%;
                height: 100%;
                display: block;
            }

            &:nth-child(6n) {
                margin-right: 0px;
            }

            img {
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
        }
    }
}

.ad-bit {
    margin-top: 30px;
    width: 1200px;
    position: relative;
    overflow: hidden;
    height: 150px;
}

.home-live {
    margin-top: 30px;

    .live-title {
        tab-title('../../assets/img/009.png');
    }

    .business-container {
        float: left;
        margin-right: 8px;
        margin-bottom: 8px;

        &:nth-child(2n) {
            margin: 0;
        }
    }
}

.home-market {
    margin-top: 30px;
    padding-bottom: 30px;

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

.home-auction {
    margin-top: 30px;

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

.live-business {
    min-height: 580px;
}

.auction-box {
    min-height: 250px;
}

.market-box {
    min-height: 312px;
}
</style>
<template>
    <div class="home-index">
        <base-carousel :banner="banner"></base-carousel>
        <div class="container hot-business-area" v-if="hotShops.length>0">
            <h3 class="area-title">
                <span class="icon-hot-business"></span>热门商家
            </h3>
            <div class="hot-business-list clearfix">
                <div class="business-box" v-for="item in hotShops" :key="item.id">
                    <router-link :to="{name:'shopIndex',params:{shopID:item.id}}"><img :src="item.cover" :alt="item.name"></router-link>
                </div>
            </div>
        </div>

        <div v-if="false" class="container ad-bit">
            <home-ad-area :poster="poster"></home-ad-area>
        </div>

        <div class="container home-live" v-if="lvsList.length>0">
            <div class="live-title clearfix">
                <h3>
                    <span class="icon-live"></span>视频直播
                </h3>
                <router-link class="look-more" :to="{name: 'homeLive'}">
                    <span class="el-icon-d-arrow-right"></span>查看更多
                </router-link>
            </div>
            <div class="live-business clearfix">
                <div class="business-container" v-for="item in lvsList" :key="item.id">
                    <home-business-card :lvs="item"></home-business-card>
                </div>
            </div>
        </div>

        <div class="container home-auction" v-if="auctionList.length>0">
            <div class="auction-title clearfix">
                <h3>
                    <span class="icon-live"></span>拍卖专场</h3>
                <router-link class="look-more" :to="{name: 'homeAuction'}">
                    <span class="el-icon-d-arrow-right"></span>查看更多
                </router-link>
            </div>
            <div class="clearfix auction-box">
                <div class="auction-container" v-for="item in auctionList" :key="item.id">
                    <base-auction-card :auction="item"></base-auction-card>
                </div>
            </div>
        </div>

        <div class="container home-market" v-if="hotGoods.length>0">
            <div class="market-title clearfix">
                <h3>
                    <span class="icon-live"></span>精选市场</h3>
                <a class="look-more" href="#">
                    <span class="el-icon-d-arrow-right"></span>查看更多</a>
            </div>
            <div class="clearfix market-box">
                <div class="market-container" v-for="item in hotGoods" :key="item.id">
                    <base-wares-card :goods="item"></base-wares-card>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import BaseAuctionCard from "../../components/base/BaseAuctionCard.vue";
import HomeBusinessCard from "./HomeBusinessCard.vue";
import BaseCarousel from "../../components/base/BaseCarousel.vue";
import BaseWaresCard from "../../components/base/BaseWaresCard.vue";
import HomeAdArea from "./HomeADArea.vue";
import { getHomeData, getHotShop, getBanner } from "../../api/home";
import { getLvsList } from "../../api/lvs";
import { getAuctionList } from "../../api/auction";
import { getHotGoods } from "../../api/common";
export default {
  name: "HomeIndex",
  components: {
    BaseCarousel,
    HomeBusinessCard,
    BaseWaresCard,
    BaseAuctionCard,
    HomeAdArea
  },
  data() {
    return {
      banner: [],
      poster: [],
      hotShops: [],
      lvsList: [],
      auctionList: [],
      hotGoods: []
    };
  },
  computed: {},
  created() {
      var self = this
      self.$store.dispatch("backHome");
      self.initData();
      self.getSubarea();
      self.getVideoList();
      self.getAuction();
      self.getMarketData();
      self.getBanners();
  },
  destroyed() {
    this.$store.dispatch("gotoPart");
  },
  methods: {
    getBanners() {
      getBanner()
        .then(res => {
          this.banner = res.data;
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err.resMessage || err.message);
        });
    },
    getVideoList() {
      getLvsList({ pageIndex: 1, pageSize: 4 })
        .then(res => {
          let lvs = (this.lvsList =
            res.data.objects.length > 0
              ? res.data.objects
              : "1"
                  .repeat(6)
                  .split("")
                  .map((e, index) => {
                    return {
                      id: index,
                      title: "直播房间" + index,
                      shop: { name: "商店" + index }
                    };
                  }));
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err.resMessage || err.message);
        });
    },
    getAuction() {
      getAuctionList({ pageIndex: 1, pageSize: 6 })
        .then(res => {
          this.auctionList = res.data.objects;
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err.resMessage || err.message);
        });
    },
    initData() {
      getHomeData()
        .then(res => {
          this.poster = res.data.topAuctions;
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err.resMessage || err.message);
        });
    },
    getSubarea() {
      getHotShop({ pageSize: 18 })
        .then(res => {
          this.hotShops = res.data.objects;
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err.resMessage || err.message);
        });
    },
    getMarketData() {
      getHotGoods({
        pageIndex: 1,
        pageSize: 15
      })
        .then(res => {
          this.hotGoods = res.data.objects;
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err.resMessage || err.message);
        });
    }
  }
};
</script>
