<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .footer {
    border-top: 1px solid #e0e0e0;
  }

  .footer-nav {
    background: #ffffff;
    padding: 28px 0 10px;

    .nav-item {
      float: left;
      width: 20%;
      line-height: 30px;

      &:last-child {
        .qrcode-box {
          width: 124px;
          height: 124px;
          border: 1px solid #ccc;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      h5 {
        color: #000000;
        font-size: 16px;
        font-weight: normal;
      }

      a {
        color: #797079;
        font-size: 14px;
      }
    }
  }

  .info-box {
    background: #000;
    text-align: center;
    height: 100px;
    color: #fff;
    font-size: 12px;
    line-height: 100px;

    &.white {
      background: #fff;
      color: #c9c9c9;
    }

    span {
      margin: 0 20px;
    }
  }
</style>
<template>
  <div class="footer">
    <div class="footer-nav">
      <div class="container clearfix">
        <div class="nav-item">
          <h5>购物指南</h5>
          <ul>
            <li>
              <a href="#">免费注册</a>
            </li>
            <li>
              <router-link :to="{name:'referMatter'}">常见问题</router-link>
            </li>
            <li>
              <router-link :to="{name:'referCustomer'}">联系客服</router-link>
            </li>
          </ul>
        </div>
        <div class="nav-item">
          <h5>配送方式</h5>
          <ul>
            <li>
              <router-link :to="{name:'referDispatch'}">配送费收取标准</router-link>
            </li>
          </ul>
        </div>
        <div class="nav-item">
          <h5>支付方式</h5>
          <ul>
            <li>
              <a href="#">微信支付</a>
            </li>
            <li>
              <a href="#">支付宝支付</a>
            </li>
          </ul>
        </div>
        <div class="nav-item">
          <h5>商家服务</h5>
          <ul>
            <li>
              <router-link :to="{name:'referBusiness'}">商家入驻</router-link>
            </li>
            <li>
              <a href="#">商家中心</a>
            </li>
            <li>
              <router-link :to="{name:'referLogistics'}">物流服务</router-link>
            </li>
          </ul>
        </div>
        <div class="nav-item">
          <p>下载手机APP</p>
          <div class="qrcode-box">
            <img src="../../assets/img/qrcode.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="info-box" :class="[isPay?'white':'']">
      <div class="container">
        <!--<a style="color: white" href="http://www.miitbeian.gov.cn"></a>-->
        <span>网络文化经营许可证：粤ICP备17135544号-1</span>
        <span>Copyright&copy;2017 艺方天地版权所有</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TheFooter",
    computed: {
      isPay() {
        return this.$store.state.isPay
      }
    }
  };
</script>
