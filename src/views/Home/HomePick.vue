<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .home-pick-view {
    padding-top: 20px;
    padding-bottom: 60px;
  }

  .pick-sort {
    width: 100%;
    height: 100px;
    border: 1px solid #e0e0e0;
    background: #fff;
    font-size: 18px;
    padding: 30px;
    color: #919191;
    line-height: 40px;

    .sort-title {
      padding-right: 90px;
      float: left;
    }

    .sort-item {
      float: left;
      background: #f4f4f4;
      width: 80px;
      height: 40px;
      text-align: center;
      margin-right: 40px;
      transition: all 0.36s;
      cursor: pointer;

      &.active, &:hover {
        background: $themeColor;
        color: #fff;
      }
    }
  }

  .wares-sort {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    background: #f3f3f3;
    background: linear-gradient(top, #fefefe, #f4f4f4);

    .wares-atrice {
      width: 246px;
      height: 100%;
      border: 1px solid #e0e0e0;
      background: #ffffff;
      font-size: 18px;
      color: #a4a4a4;
      line-height: 48px;

      .left {
        float: left;
        border-right: 1px solid #e0e0e0;
        padding: 0 18px;

        span {
          vertical-align: middle;
        }
      }

      .icon-list {
        display: inline-block;
        vertical-align: middle;
        width: 22px;
        height: 22px;
        background: url('../../assets/img/118.png') no-repeat center;
        margin-right: 14px;
      }

      .right {
        float: left;
        height: 100%;
        padding-left: 18px;

        span {
          vertical-align: middle;
        }
      }

      .icon-sort {
        position: relative;
        vertical-align: middle;
        display: inline-block;
        width: 20px;
        height: 100%;
        cursor: pointer;

        .active {
          color: $themeColor;
        }

        .el-icon-caret-top {
          position: absolute;
          bottom: 20px;
          left: 0;
        }

        .el-icon-caret-bottom {
          position: absolute;
          top: 18px;
          left: 0;
        }
      }
    }
  }

  .wares-box {
    width: 100%;
    margin-top: 10px;
    min-height: 312px;

    .wares-container {
      float: left;
      margin-right: 9px;
      margin-bottom: 9px;

      &:nth-child(5n) {
        margin: 0;
      }
    }
  }

  .wares-pagination {
    margin-top: 30px;
  }

  .wares-groom {
    margin-top: 40px;
    border: 1px solid #e0e0e0;
    background: #fff;

    .groom-head {
      height: 70px;
      border-bottom: 1px solid #e0e0e0;
      padding: 20px;
      font-size: 18px;
      line-height: 35px;

      .icon-groom {
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 30px;
        background: url('../../assets/img/119.png') no-repeat center;
        margin-right: 16px;
      }
    }

    .groom-box {
      padding: 19px;
      min-height: 350px;

      .wares-container {
        float: left;
        margin-right: 14px;

        &:nth-child(5n) {
          margin: 0;
        }
      }
    }
  }

  .not-data {
    height: 100%;
    width: 100%;
    background: #fff;
    color: #989898;
    font-size: 18px;
    text-align: center;
    line-height: 300px;
  }
</style>
<template>
  <div class="home-pick-view">
    <div class="container">
      <div class="pick-sort clearfix">
        <span class="sort-title">分类:</span>
        <span @click="changeTag('')" :class="{active:category===''}" class="sort-item">不限</span>
        <span @click="changeTag(tag.id)" :class="{active:category===tag.id}" v-for="(tag,index) in categoryList" :key="tag.id" class="sort-item" v-text="tag.name"></span>
      </div>
      <div class="wares-sort">
        <div class="wares-atrice clearfix">
          <div class="left">
            <span class="icon-list"></span>
            <span>默认排序</span>
          </div>
          <div class="right">
            <span>价格</span>
            <div class="icon-sort" @click="chnagePriceSort">
              <span :class="[priceSort===1?'active':'']" class="el-icon-caret-top"></span>
              <span :class="[priceSort===-1?'active':'']" class="el-icon-caret-bottom"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="wares-box clearfix" v-loading="loading">
        <div class="wares-container" v-for="(item,index) in goodsList" :key="item.id">
          <base-wares-card :goods="item"></base-wares-card>
        </div>
        <div v-show="goodsList.length===0" class="not-data">暂无数据</div>
      </div>
      <el-pagination v-show="goodsList.length>0" class="wares-pagination" prev-text="<<上一页" next-text="下一页>>" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout=" prev,pager,next,slot" :total="total">
        <span>共{{totalPage}}页</span>
      </el-pagination>
      <div class="wares-groom" v-show="groomGoods.length>0">
        <div class="groom-head">
          <span class="icon-groom"></span>精品推荐
        </div>
        <div class="groom-box clearfix">
          <div class="wares-container" v-for="item in groomGoods" :key="item.id">
            <base-wares-card :width="220.5" info-bg="black" :goods="item"></base-wares-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BaseWaresCard from "../../components/base/BaseWaresCard.vue";
  import { getCategories } from '../../api/terrace';
  import { getPickGoods } from '../../api/home';
  export default {
    name: 'HomePick',
    components: {
      BaseWaresCard
    },
    data() {
      return {
        priceSort: -1,
        goodsList: [],
        pageIndex: 1,
        pageSize: 25,
        total: 0,
        category: '',
        sort: '-price',
        loading: true
      }
    },
    computed: {
      totalPage() {
        return Math.ceil(this.total / this.pageSize)
      },
      categoryList() {
        return this.$store.state.home.navbar.tagMap
      },
      groomGoods() {
        return this.goodsList.length > 5 ? this.goodsList.slice(0, 5) : this.goodsList
      }
    },
    created() {
      this.getCategoriesGoods();
    },
    methods: {
      getCategoriesGoods(){
          this.loading = true
        getPickGoods({
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          category: this.category,
          sort: this.sort
        }).then((res) => {
          this.goodsList = res.data.objects;
          this.pageIndex = res.data.pageIndex;
          this.pageSize = res.data.pageSize;
          this.total = res.data.total
          this.loading = false
          this.$_backTop()
        }).catch((err) => {
          console.log(err)
          this.loading = false
          this.$message.error(err.response.error)
        })
      },
      changeTag(n) {
          var self = this
          self.category = n
          self.pageIndex = 1
          self.getCategoriesGoods()
      },
      chnagePriceSort() {
        this.priceSort = -1 * this.priceSort
        this.sort = (this.priceSort + '').replace('1', 'price')
        this.pageIndex = 1
        this.getCategoriesGoods()
      },
      handleCurrentChange(pageIndex) {
        this.pageIndex = pageIndex;
        this.getCategoriesGoods();
      }
    }
  }
</script>

