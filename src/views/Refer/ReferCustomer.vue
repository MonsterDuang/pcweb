<style lang="stylus" scoped>
@import '../../stylus/variables.styl';

.refer-customer-view {
  width: 100%;
  background: #f4f4f4;
  padding-bottom: 30px;
}

.customer-head-bar {
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

.customer-content {
  width: 100%;
  margin-top: 30px;

  .customer-box {
    width: 100%;
    background: #fff;
    min-height: 374px;
    text-align: center;
    padding-top: 140px;

    .tel {
      font-size: 18px;
      color: #333;
      margin-bottom: 20px;

      .customer-font {
        color: #20ae39;
        font-size: 20px;
      }
    }

    .time {
      color: #959595;
      font-size: 18px;
      padding-bottom: 20px;
    }

    .location {
      color: #959595;
      font-size: 18px;
    }
  }
}
</style>
<template>
  <div class="refer-customer-view">
    <div class="customer-head-bar">
      <div class="container">
        <h4>联系客服</h4>
      </div>
    </div>
    <div class="customer-content">
      <div class="container">
        <div class="customer-box">
          <p class="tel">
            <span class="icon-tel"></span>服务热线：
            <span class="customer-font" v-text="tel"></span>
          </p>
          <p class="time">服务时间：09:00-18:00</p>
          <p class="location">联系地址：深圳市宝安区新安街道宝安中心区海天路和宝华路交汇处卓越宝中时代广场A座1709号</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCustomer } from "../../api/terrace";
export default {
  name: "ReferCustomer",
  data() {
    return {
      tel: ""
    };
  },
  created() {
    this.getTel();
  },
  methods: {
    getTel() {
      getCustomer()
        .then(res => {
          this.tel = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
