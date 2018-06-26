<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .refer-business-view {
    width: 100%;
    background: #f4f4f4;
    padding-bottom: 30px;
  }

  .business-head-bar {
    width: 100%;
    background: #4f9da4;
    height: 101px;

    h4 {
      color: #fff;
      font-size: 18px;
      font-weight: normal;
      line-height: 101px;
    }
  }

  .business-content {
    width: 100%;
    margin-top: 30px;

    .business-box {
      width: 100%;
      background: #fff;
      min-height: 374px;

      .wrap-block {
        margin: 0 auto;
        padding-top: 90px;
        width: 560px;

        .app-qrcode {
          float: left;
          width: 180px;
          height: 180px;
          margin-right: 40px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .propmt-info {
          float: left;
          padding: 25px 0;
          font-size: 20px;
          line-height: 40px;
        }
      }
    }
  }
</style>
<template>
  <div class="refer-business-view">
    <div class="business-head-bar">
      <div class="container">
        <h4>商家入驻</h4>
      </div>
    </div>
    <div class="business-content">
      <div class="container">
        <div class="business-box">
          <div class="wrap-block clearfix">
            <div class="app-qrcode">
              <img src="../../assets/img/qrcode.png" alt="">
            </div>
            <div class="propmt-info">
              <p>PC端暂不支付商家入驻申请</p>
              <p>请
                <span class="theme-font">扫描二维码</span>下载艺方天地APP,</p>
              <p>在APP个人中心既可申请!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ReferBusiness'
  }
</script>
