<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

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
    width: 716px;
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
    width: 90px;
    position: relative;

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
    }
  }

  .my-pagination {
    padding: 20px 0;
  }
</style>
<template>
  <div class="goods-view" v-loading="loading">
    <div class="goods-list">
      <div class="wares-card clearfix" v-for="goods in goodsList" :key="goods.id">
        <div class="wares-img">
          <img :src="goods.photos[0]" alt="">
        </div>
        <div class="wares-info">
          <p class="wares-name" v-text="goods.name"></p>
          <p class="wares-price theme-font">价格：¥{{goods.price}}</p>
          <p class="wares-buyes">库存：{{goods.stock}}</p>
          <p class="wares-address">简介：{{goods.description}}</p>
        </div>
        <div class="wares-action">
          <button v-if="goods.isSoldOut" @click="sold(goods.id)">上架</button>
          <button v-else @click="out(goods.id)">下架</button>
          <button @click="edit(goods.id)">修改</button>
          <button v-if="goods.isLVSRecommend" @click="cancelRecommend(goods.id)">取消推荐</button>
          <button v-else @click="recommend(goods.id)">直播推荐</button>
        </div>
      </div>
    </div>
    <el-pagination class="my-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout=" prev,pager,next,slot" :total="total">
      <span>共{{totalPage}}页</span>
    </el-pagination>
  </div>
</template>
<script>
  import { outGoods, soldGoods } from '../../api/common'
  import { getMyGoodsList } from '../../api/my'
  import { setLvsGoods } from '../../api/lvs'
  export default {
    name: 'productManage',
    data() {
      return {
        goodsList: [],
        pageIndex: 1,
        pageSize: 10,
        total: 0,
        loading: true
      }
    },
    computed: {
      totalPage() {
        return Math.ceil(this.total / this.pageSize)
      },
      userInfo() {
        return this.$store.state.user.userInfo
      }
    },
    created() {
      this.getGoodsList()
    },
    methods: {
      handleCurrentChange(pageIndex) {
        this.pageIndex = pageIndex
        this.getGoodsList()
      },
      getGoodsList() {
        this.loading = true
        getMyGoodsList({ pageIndex: this.pageIndex, pageSize: this.pageSize, sort: '-createdAt' }).then((res) => {
          this.goodsList = res.data.objects
          this.total = res.data.total
          this.pageIndex = res.data.pageIndex
          this.loading = false
        }).catch((err) => {
          console.log(err)
          this.loading = false
          this.$message.error(err.resMessage || err.message)
        })
      },
      recommend(goodsID) {
        this.loading = true
        setLvsGoods(goodsID, { isLVSRecommend: true }).then((res) => {
          console.log(res)
          this.$message.success('设置直播推荐成功')
          this.getGoodsList()
        }).catch((err) => {
          console.log(err)
          this.loading = false
          this.$message.error(err.resMessage || err.message)
        })
      },
      cancelRecommend(goodsID) {
        this.loading = true
        setLvsGoods(goodsID, { isLVSRecommend: false }).then((res) => {
          console.log(res)
          this.$message.success('取消直播推荐成功')
          this.getGoodsList()
        }).catch((err) => {
          console.log(err)
          this.loading = false
          this.$message.error(err.resMessage || err.message)
        })
      },
      sold(goodsID) {
        this.loading = true
        soldGoods(goodsID).then((res) => {
          console.log(res)
          this.$message.success('上架成功')
          this.getGoodsList()
        }).catch((err) => {
          console.log(err)
          this.loading = false
          this.$message.error(err.resMessage || err.message)
        })
      },
      out(goodsID) {
        this.loading = true
        outGoods(goodsID).then((res) => {
          console.log(res)
          this.$message.success('下架成功')
          this.getGoodsList()
        }).catch((err) => {
          console.log(err)
          this.loading = false
          this.$message.error(err.resMessage || err.message)
        })
      },
      edit(goodsID) {
        this.$router.push({ name: 'editGoods', params: { goodsID: goodsID } })
      }
    }
  }
</script>
