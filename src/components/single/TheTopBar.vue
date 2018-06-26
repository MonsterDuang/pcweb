<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .topbar {
    background: $topBarBgColor;
    height: $topBarHeight;
  }

  .topbar-box {
    position: relative;
    z-index: 11;
    height: 100%;
  }

  .app-qrcode {
    position: fixed;
    bottom: 120px;
    right: 54px;
    width: 65px;
    height: 80px;
    background-size: 100%;
    cursor: pointer;
    z-index: 9999;
    transition: bottom 0.35s;

    .qrcode-img {
      position: absolute;
      width: 135px;
      height: 174px;
      background: #fff;
      right: 65px;
      top: 0;
      z-index: 9999;
      padding: 5px;

      img {
        width: 125px;
        height: 125px;
      }

      p {
        font-size: 14px;
        text-align: center;
        color: #989898;
      }
    }
  }

  .back-top {
    position: fixed;
    bottom: -66px;
    right: 56px;
    width: 65px;
    height: 50px;
    background: url('../../assets/img/121.png') no-repeat center;
    background-size: 100%;
    cursor: pointer;
    z-index: 9999;
    transition: bottom 0.35s;
  }

  .topbar-logo {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 240px;
    height: $topBarLogoHeight;
    color: #e0e0e0;
    font-size: 48px;
    text-align: center;
    background: #fff;
    z-index: 15;
    line-height: 132px;
    box-shadow: 0px -3px 6px 0px rgba(0, 0, 0, 0.3);

    img {
      height: 100%;
    }
  }

  .topbar-nav {
    float: right;
    margin: 0;
    font-size: $topBarFontSize;
    line-height: 32px;
    color: $topBarFontColor;

    &>li {
      float: left;
      margin-left: 30px;
      cursor: pointer;
      font-size: 14px;

      a {
        color: #868686;
      }

      .nickname {
        color: #333;
      }

      .theme-font {
        color: $themeColor;
      }
    }

    .el-dropdown-link {
      color: $topBarFontColor;
      font-size: 14px;

      a {
        color: #333;
      }
    }
  }
</style>


<template>
  <div class="topbar">
    <div class="container clearfix topbar-box">
      <router-link class="topbar-logo" tag="div" :to="{name: 'homeIndex'}">
        <img src="../../assets/img/logo.png" alt="">
      </router-link>
      <ul class="topbar-nav clearfix">
        <li v-if="!isLogin">
          <router-link :to="{name: 'login'}" class="theme-font" v-if="this.$route.path.split('/')[2] != 'businessmanage'">登录</router-link>
          <span class="theme-font" @click="business()" v-else>登录</span>
          |
          <router-link :to="{name:'register'}" v-if="this.$route.path.split('/')[2] != 'businessmanage'">注册</router-link>
        </li>
        <li v-else>
          <router-link class="nickname" :to="{name: userInfo.type==='shop'?'myStore':'myOrder'}" v-text="userInfo.nickname" v-if="this.$route.path.split('/')[2] != 'businessmanage'"></router-link>
          <router-link class="nickname" to="" v-text="userInfo.nickname" v-else></router-link>
          |
          <a @click="logout" v-if="this.$route.path.split('/')[2] != 'businessmanage'">退出</a>
          <a @click="businessLogout" v-else>退出</a>
        </li>
        <li v-show="this.$route.path.split('/')[2] != 'businessmanage'">
          <el-dropdown placement="bottom-start" trigger="click">
            <span class="el-dropdown-link">
              个人中心
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu class="topbar-dropdwon" slot="dropdown">
              <el-dropdown-item v-for="r in myRoute" :key="r.route">
                <router-link :to="{name: r.route}" v-text="r.name"></router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li v-if="userInfo.type === 'shop'" v-show="this.$route.path.split('/')[2] != 'businessmanage'">
          <router-link :to="{name: 'goodsUpload'}">上传商品</router-link>
        </li>
        <li v-show="this.$route.path.split('/')[2] != 'businessmanage'">
          <router-link :to="{name: 'referAbout'}">关于我们</router-link>
        </li>
        <li v-show="this.$route.path.split('/')[2] != 'businessmanage'">
          <router-link :to="{name: 'referCustomer'}">联系我们</router-link>
        </li>
        <li>
          <router-link :to="{name: 'businessStore'}">商家管理</router-link>
        </li>
      </ul>
      <div class="app-qrcode">
        <img src="../../assets/img/120.png" @mouseover="showQRCode=true" @mouseleave="showQRCode=false" alt="">
        <div class="qrcode-img" v-show="showQRCode">
          <img src="../../assets/img/qrcode.png" alt="">
          <p>下载艺方购app体验更多精彩</p>
        </div>
      </div>
      <div @click="backTop" class="back-top" :style="{bottom:`${bottom_px}px`,right:`${right_px}px`}"></div>
    </div>
  </div>
</template>
<script>
  import { logout } from '../../api/user'
  export default {
    name: "TheTopBar",
    data() {
      return {
        right_px: 54,
        bottom_px: -66,
        showQRCode: false
      };
    },
    computed: {
      userInfo() {
        return this.$store.state.user.userInfo
      },
      isLogin() {
        return this.$store.state.user.isLogin
      },
      myRoute() {
        return this.$store.getters.myRoute
      }
    },
    created() {
      this.right_px = (window.innerWidth - 1200) / 2 - 66
      window.onscroll = this.scrollHandler
    },
    methods: {
      logout() {
        logout().then((res) => {
          this.$message.info('退出成功')
          this.$store.dispatch('userLogout')
          this.$router.push({ name: 'login' })
          localStorage.setItem('loginBol', false);
        }).catch((err) => {
          console.log(err)
          this.$message.error(err.resMessage || err.message)
        })
      },
      business(){
        this.$router.push({name: 'businessLogin'})
        setTimeout(function(){
          localStorage.removeItem('loginBol');
        }, 0)
      },
      businessLogout() {
        logout().then((res) => {
          localStorage.setItem('loginBol', false);
          this.$message.info('退出成功')
          this.$store.dispatch('userLogout')
          this.$router.push({ name: 'businessLogin' })
        }).catch((err) => {
          console.log(err)
          this.$message.error(err.resMessage || err.message)
        })
      },
      backTop() {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        let time = setInterval(() => {
          scrollTop -= 100
          document.documentElement.scrollTop = document.body.scrollTop = scrollTop
          if (scrollTop <= 0) {
            document.documentElement.scrollTop = document.body.scrollTop = 0
            clearInterval(time)
          }
        }, 1000 / 60)
      },
      scrollHandler(e) {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop > window.innerHeight) {
          this.bottom_px = 200
        } else {
          this.bottom_px = -66
        }
      }
    }
  };
</script>
