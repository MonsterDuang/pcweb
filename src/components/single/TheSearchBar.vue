<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .search-bar {
    width: 100%;
    background: $searchBarBgColor;
    height: $searchBarHeight;
  }

  .search-bar-box {
    padding-left: 300px;
    height: 100%;
    padding-top: 34px;
    padding-bottom: 28px;
  }

  .search-box {
    float: left;
    height: 40px;
    width: 452px;
    border: 1px solid $themeColor;
    background: $themeColor;
    position: relative;
    z-index: 101;

    input {
      vertical-align: middle;
      border: none;
      height: 100%;
      width: 390px;
      outline: none;
      padding: 0 0 0 14px;
      font-size: 14px;
      color: #a4a4a4;
    }

    .search-icon {
      vertical-align: middle;
      display: inline-block;
      height: 100%;
      width: 60px;
      background: $themeColor url('../../assets/img/001.png') no-repeat center;
      background-size: 50%;
    }
  }

  .assure-box {
    float: left;
    margin-left: 72px;

    .assure {
      float: left;
      height: 40px;
      margin-left: 40px;

      .assure-icon {
        float: left;
        height: 40px;
        width: 40px;
        font-size: 20px;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        color: #fff;
      }

      .icon-just {
        background: url('../../assets/img/115.png') no-repeat center;
      }

      .icon-back {
        background: url('../../assets/img/116.png') no-repeat center;
      }

      .assure-text {
        float: left;
        margin-left: 10px;
        width: 98px;

        h4 {
          color: #000;
          font-size: 14px;
          margin-top: 2px;
        }

        p {
          margin-top: 6px;
          font-size: 12px;
          color: $topBarFontColor;
        }
      }
    }
  }

  .search-result {
    position: absolute;
    z-index: 100;
    top: 50px;
    width: 452px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.14);

    .result-line {
      a {
        padding: 10px;
        display: block;
        color: #333;
        line-height: 20px;

        &:hover {
          background: #efefef;
        }

        .goods-name {
          font-size: 14px;
        }

        .goods-num {
          font-size: 12px;
          padding-left: 10px;
          color: lighten(#333, 30);
        }
      }
    }
  }
</style>
<template>
  <div class="search-bar">
    <div class="container clearfix search-bar-box">
      <div class="search-box">
        <input v-model="words" @keyup.enter="query" @focus="query" type="text">
        <span class="search-icon" @click="query"></span>
        <div class="search-result" @mouseleave="showResult=false">
          <ul class="result-list" v-show="showResult">
            <li class="result-line">
              <router-link @click.native="toGoods" v-for="goods in goodsList" :key="goods.id" :to="{name: 'waresDetail',params:{goodsID:goods.id}}">
                <span class="goods-name" v-text="goods.name"></span>
                <span class="goods-num">{{goods.vol}}人看过</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="assure-box clearfix">
        <div class="assure clearfix">
          <div class="assure-icon icon-just"></div>
          <div class="assure-text">
            <h4>品质无忧</h4>
            <p>品质保航无忧购物</p>
          </div>
        </div>
        <div class="assure clearfix">
          <div class="assure-icon icon-back"></div>
          <div class="assure-text">
            <h4>无忧退货</h4>
            <p>七天无理由退换货</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { search } from '../../api/common'
  export default {
    name: "TheSearchBar",
    data() {
      return {
        words: '',
        pageIndex: 1,
        pageSize: 10,
        goodsList: [],
        showResult: false
      };
    },
    methods: {
      toGoods() {
        this.showResult = false
      },
      query() {
        if (!this.words) return
        search({
          words: this.words,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }).then((res) => {
          if (res.data.objects.length == 0) {
            this.$message.error('无相关搜索内容')
          }
          this.goodsList = res.data.objects
          this.showResult = true
        }).catch((err) => {
          console.log(err)
          this.$message.error(err.resMessage || err.message)
        })
      }
    }
  };
</script>
