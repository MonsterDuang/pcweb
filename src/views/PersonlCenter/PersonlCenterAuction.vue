<style lang="stylus" scoped>
@import '../../stylus/variables.styl';

.auction-view {
    width: 100%;
    padding-bottom: 30px;
}

.auction-box {
    width: 100%;
    padding-bottom: 20px;
}

.auction-container {
    float: left;
    margin-right: 8px;
    margin-bottom: 8px;

    &:nth-child(2n) {
        margin-right: 0;
    }
}

.data-tabs {
    background: #ffffff;
    height: 60px;
    padding: 10px 20px;
    font-size: 16px;
    line-height: 40px;
    border-bottom: 2px solid #f4f4f4;
    margin-bottom: 8px;

    span {
        padding-right: 20px;
        cursor: pointer;
    }

    .add-auction {
        float: right;
        color: #4fa2a9;
        cursor: pointer;
    }
}

.wares-card {
    width: 1040px;
    padding: 20px;
    background: #fff;
    margin-bottom: 20px;
}

.wares-img {
    float: left;
    width: 160px;
    height: 160px;
    background: #d6d6d6;

    img {
        width: 100%;
        height: 100%;
    }
}

.wares-info {
    float: left;
    margin-left: 24px;
    width: 616px;
    font-size: 16px;
    height: 160px;

    p {
        line-height: 36px;
    }

    .wares-price {
        margin-bottom: 10px;
    }

    .wares-address {
        color: #cfcfcf;
        text-wrap();
    }
}

.wares-action {
    float: left;
    height: 160px;
    width: 190px;
    position: relative;
    text-align: right;

    button {
        width: 90px;
        height: 32px;
        text-align: center;
        color: #fff;
        border-radius: 4px;
        background: $themeColor;
        border: none;
        outline: none;
        cursor: pointer;
        margin-bottom: 10px;

        &:active {
            background: red;
        }

        &.cancel-btn {
            border: none;
            background: #ffffff;
            color: #989898;
            font-size: 18px;
        }

        &.success-btn {
            border: none;
            background: #ffffff;
            color: #fc3c4e;
            font-size: 18px;
        }
    }
}

.auction-action {
    padding: 10px 0;

    button {
        width: 90px;
        height: 32px;
        text-align: center;
        color: #fff;
        border-radius: 4px;
        background: $themeColor;
        border: none;
        outline: none;
        cursor: pointer;
        margin-right: 20px;

        &:active {
            background: red;
        }
    }
}

.not-data {
    height: 200px;
    color: #989898;
    background: #fff;
    text-align: center;
    line-height: 200px;
    font-size: 20px;
}
</style>
<template>
    <div class="auction-view" v-loading="loading">
        <div class="data-tabs clearfix">
            <span @click="changeTab('ing')" :class="[currTab==='ing'?'theme-font':'']">正在拍卖</span>
            <span @click="changeTab('end')" :class="[currTab==='end'?'theme-font':'']">拍卖结束</span>
            <span @click="changeTab('not-started')" :class="[currTab==='not-started'?'theme-font':'']">尚未开拍</span>
            <router-link class="add-auction" :to="{name:'auctionUpload'}">发起竞拍</router-link>
        </div>
        <div class="auction-box clearfix" v-show="currTab==='ing'">
            <template v-if="auctionList.length>0">
                <div class="auction-container" v-for="item in auctionList" :key="item.id">
                    <base-auction-card :auction="item" :width="516"></base-auction-card>
                    <div class="auction-action">
                        <button v-if="item.isSoldOut" @click="auctionOn(item)">上架</button>
                        <button v-else @click="auctionOut(item)">下架</button>
                        <button @click="editAuction(item)">修改</button>
                    </div>
                </div>
            </template>
            <div class="not-data" v-else>暂无拍卖</div>
        </div>
        <div class="auction-box clearfix" v-show="currTab==='not-started'">
            <template v-if="auctionList.length>0">
                <div class="auction-container" v-for="item in auctionList" :key="item.id">
                    <base-auction-card :auction="item" :width="516"></base-auction-card>
                    <div class="auction-action">
                        <button v-if="item.isSoldOut" @click="auctionOn(item)">上架</button>
                        <button v-else @click="auctionOut(item)">下架</button>
                        <button @click="editAuction(item)">修改</button>
                    </div>
                </div>
            </template>
            <div class="not-data" v-else>暂无拍卖</div>
        </div>
        <div class="auction-box clearfix" v-show="currTab==='end'">
            <div class="wares-card clearfix" v-for="auction in auctionList" :key="auction.id">
                <div class="wares-img">
                    <img :src="auction.photos[0]" alt="">
                </div>
                <div class="wares-info">
                    <p class="wares-name" v-text="auction.title"></p>
                    <p class="wares-price theme-font">起拍价：¥{{auction.floorPrice}}</p>
                    <p class="wares-buyes theme-font">加价幅度：¥{{auction.raisePriceRange}}</p>
                    <p class="wares-address">简介：{{auction.description}}</p>
                </div>
                <div class="wares-action">
                    <button class="success-btn" v-if="auction.result==='success'">拍卖成功</button>
                    <button class="cancel-btn" v-else-if="auction.result==='fail'">流拍</button>
                    <template v-if="auction.order">
                        <p>拍下价格：¥{{auction.order.amount}}</p>
                        <!-- <router-link :to="{name:'storeStep',params:{orderID:auction.auctionGoodsBid}}">查看订单</router-link> -->
                    </template>
                </div>
            </div>
            <div class="not-data" v-if="auctionList.length===0">暂无拍卖</div>
        </div>
        <el-pagination v-show="auctionList.length>0" class="order-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout="prev,pager,next,slot" :total="total">
            <span>共{{totalPage}}页</span>
        </el-pagination>
    </div>
</template>
<script>
import BaseAuctionCard from "../../components/base/BaseAuctionCard.vue";
import { getMyAuctionGoods } from "../../api/my";
import { getShop } from "../../api/common";
import { outAuction, soldAuction } from "../../api/auction";
export default {
  name: "PersonlCenterAuction",
  components: {
    BaseAuctionCard
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 8,
      total: 0,
      status: "",
      loading: true,
      currTab: "ing",
      auctions: []
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    shop() {
      return this.$store.state.user.shop;
    },
    auctionList() {
      return this.auctions.map(item => {
        item.shop = this.shop;
        return item;
      });
    }
  },
  created() {
    this.getAuctionData();
  },
  methods: {
    changeTab(status) {
      this.auctions = [];
      this.currTab = status;
      this.getAuctionData();
    },
    auctionOut(item) {
      this.$confirm("确认下架吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success"
      })
        .then(() => {
          this.loading = true;
          item.isSoldOut = true;
          outAuction(item.id)
            .then(res => {
              this.loading = false;
              this.$message.success("下架成功");
              this.getAuctionData();
            })
            .catch(err => {
              console.log(err);
              this.loading = false;
              this.$message.error(err.resMessage || err.message);
            });
        })
        .catch(err => {
          console.log(err);
        });
    },
    auctionOn(item) {
      this.loading = true;
      item.isSoldOut = false;
      soldAuction(item.id)
        .then(res => {
          this.loading = false;
          this.$message.success("上架成功");
          this.getAuctionData();
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
          this.$message.error(err.resMessage || err.message);
        });
    },
    editAuction(item) {
      this.$router.push({
        name: "editAuction",
        params: { auctionID: item.id }
      });
    },
    getAuctionData() {
      this.loading = true;
      getMyAuctionGoods({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        auctionStatus: this.currTab
      })
        .then(res => {
          this.auctions = res.data.objects;
          this.pageIndex = res.data.pageIndex;
          this.pageSize = res.data.pageSize;
          this.total = res.data.total;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
          this.$message.error(err.resMessage || err.message);
        });
    },
    handleCurrentChange(pageIndex) {
      this.pageIndex = pageIndex;
      this.getAuctionData();
    }
  }
};
</script>
