<style lang="stylus" src="./stylus/common.styl"></style>
<style lang="stylus">
  @import './stylus/variables.styl';

  .app {
    width: 100%;
    color: #333;

    .topbar-dropdwon {
      li {
        border-bottom: 1px solid #e8e8e8;

        &.no-bor {
          border-bottom: none;
        }
      }
    }

    .el-pagination {
      padding: 0;

      button {
        border: 1px solid #e0e0e0;
        height: 40px;
        line-height: 40px;
        color: #4fa2a9;
        border-radius: 0;

        &.disabled {
          color: #e0e0e0;
        }

        span {
          height: 40px;
          line-height: 40px;
        }

        &.btn-next {
          border-left: none;
        }
      }

      ul.el-pager {
        li {
          &:hover {
            color: #4fa2a9;
          }

          &.number {
            border: 1px solid #e0e0e0;
            border-left: none;
          }

          &.more {
            border-right: 1px solid #e0e0e0;
            background: transparent;
            color: #e0e0e0;
          }

          height: 40px;
          line-height: 40px;

          &.active {
            background: #4fa2a9;
            color: #fff;
          }
        }
      }

      >span {
        display: inline-block;
        vertical-align: middle;
        height: 40px;
        color: #b4bccc;
        font-size: 14px;
        line-height: 46px;
        padding: 0 10px;
        font-weight: normal;
      }
    }

    // 重写面包导航的样式
    .el-breadcrumb__inner, .el-breadcrumb__inner a {
      font-weight: normal;
      color: #afafaf;
    }

    .el-breadcrumb__inner {
      color: #afafaf;
    }

    .hotShop-sort-select {
      padding-left: 10px;
    }

    .hotShop-sort-select input.el-input__inner {
      border: 1px solid #eeeeee;
      border-radius: 0;
      background: #f4f4f4;
      width: 82px;
      padding: 10px;
      height: 32px;
    }

    .hotShop-sort-select {
      padding-left: 10px;
    }

    .hotShop-sort-select input.el-input__inner {
      border: 1px solid #eeeeee;
      border-radius: 0;
      background: #f4f4f4;
      width: 82px;
      padding: 10px;
      height: 32px;
    }

    .hot-select.el-popper {
      .popper__arrow {
        left: 60px !important;
      }
    }

    .el-carousel__button {
      width: 22px;
      height: 22px;
      background-color: transparent;
      border: 3px solid #fff;
      border-radius: 50%;
    }

    .el-carousel__indicator.is-active button {
      opacity: 1;
      background: #fff;
    }

    .confirm-steps {
      .el-step.is-center .el-step__line {
        left: 0;
        right: 0;
      }

      .el-step:last-of-type .el-step__line {
        display: block;
      }
    }

    .modify-content {
      .el-step__head.is-process {
        .el-step__line {
          background: #fbaa3c;
        }
      }
    }

    .el-step__head.is-process {
      .el-step__line {
        background: #b4bccc;
      }

      .el-step__line-inner {
        border-color: #fbaa3c;
      }

      .el-step__icon.is-text {
        color: #fff;
        background: #fbaa3c;
        border-color: #fbaa3c;
      }
    }

    .el-step.is-center .el-step__description {
      padding-right: 0;
      padding-left: 0;
    }

    .el-step__head.is-success, .el-step__head.is-finish {
      .el-step__line {
        background: #fbaa3c;
      }

      .el-step__icon.is-text {
        color: #fff;
        background: #fbaa3c;
        border-color: #fbaa3c;
      }
    }

    .el-step__head.is-finish {
      .el-step__line-inner {
        border-color: #fbaa3c;
      }
    }

    .el-step__head.is-wait {
      .el-step__line {
        background: #d6d6d6;
      }

      .el-step__line-inner {
        border-color: #d6d6d6;
      }

      .el-step__icon.is-text {
        color: #fff;
        background: #d6d6d6;
        border-color: #d6d6d6;
      }
    }

    .el-step__main {
      .el-step__title.is-process, .el-step__title.is-success, .el-step__title.is-finish {
        color: #fbaa3c;
        font-size: 14px;
      }

      .el-step__title.is-wait {
        font-size: 14px;
        color: #d6d6d6;
      }

      .el-step__description {
        color: #d6d6d6;
        font-size: 14px;
      }
    }

    .el-step.is-horizontal .el-step__line {
      height: 4px;
      top: 10px;
    }

    .el-tabs__active-bar {
      display: none;
    }

    .el-tabs__nav-wrap::after {
      height: 0;
    }

    .el-input {
      height: 100%;
    }

    .el-input__inner {
      border-radius: 0px;
      height: 100%;
    }
  }
  .settle {
    .el-step__head.is-process {
      .el-step__line {
        background: #fbaa3c;
      }
    }
  }

  .el-upload--picture-card {
    background: #e0e0e0;
    border: none;
    border-radius: 0px;
  }

  .sell-view {
    .el-tabs__header {
      padding: 16px 40px 16px;
      background: #ffffff;

      span {
        font-size: 18px;
        font-weight: normal;
      }
    }
  }

  .topbar-dropdwon {
    .el-dropdown-menu__item:hover a {
      color: $themeColor;
    }

    a {
      color: #333;
    }
  }

  .hot-select.el-popper {
    .popper__arrow {
      left: 60px !important;
    }
  }

  .el-pagination button, .el-pagination span:not([class*=suffix]) {
    height: 40px;
    line-height: 44px;
  }
</style>
<template>
  <div class="app">
    <the-top-bar v-show="!beginLogin"></the-top-bar>
    <the-search-bar v-if="!isSettle&!beginLogin"></the-search-bar>
    <router-view></router-view>
    <the-footer v-show="!beginLogin"></the-footer>
  </div>
</template>
<script>
  import TheTopBar from "./components/single/TheTopBar.vue";
  import TheSearchBar from "./components/single/TheSearchBar.vue";
  import TheFooter from "./components/single/TheFooter.vue";
  import { getCategories } from './api/terrace'
  export default {
    name: "App",
    components: {
      TheTopBar,
      TheSearchBar,
      TheFooter
    },
    data() {
      return {

      }
    },
    created() {
      this.initCategor()
    },
    mounted() {

    },
    computed: {
      isSettle() {
        return this.$store.state.settle.isSettle
      },
      beginLogin() {
          var self = this
          if(self.$route.fullPath.indexOf("/Advertisement")>-1||self.$route.fullPath.indexOf("/advertisement")>-1){
              return true
          }else {
              return self.$store.state.user.justLogin
          }
      }
    },
    methods: {
      initCategor() {
        getCategories().then((res) => {
          this.$store.dispatch('tagList', res.data)
        }).catch((err) => {
          console.log(err)
          this.$message.error('获取商城分类失败')
        })
      }
    },
    beforeDestory(){
      
    }
  };
</script>

