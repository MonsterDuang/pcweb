<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .settle-confirm-head {
    width: 100%;
    background: #f4f4f4;
    height: 103px;
    border-bottom: 1px solid #e0e0e0;
  }

  .settle-steps {
    padding-left: 290px;

    h4 {
      float: left;
      font-weight: normal;
      font-size: 18px;
      line-height: 102px;
    }

    .steps-box {
      padding-top: 30px;
      float: right;
      overflow: hidden;
      margin-left: 77px;
    }

    .steps {
      width: 400px;
    }
  }

  .settle-main-view {
    width: 100%;
    background: #fff;

    .settle-title {
      font-size: 18px;
      color: #969696;
      font-weight: normal;
      padding-top: 16px;
      line-height: 60px;
      border-bottom: 1px solid #efefef;
    }
  }

  .consignee-info {
    border-bottom: 1px solid #efefef;
    padding-top: 12px;
    padding-bottom: 14px;

    h4 {
      font-weight: normal;
      line-height: 16px;
      font-size: 16px;
      padding: 20px 0;
    }

    .info-line {
      margin-bottom: 30px;

      .info-name {
        cursor: pointer;
        width: 120px;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #e0e0e0;
        outline: none;
        background: #fff;
        color: #969696;

        &.active {
          border: 1px solid $themeColor;
          background: $themeColor;
          color: #fff;
        }
      }

      .info-tel {
        padding: 0 20px;
        font-size: 16px;
        color: #333333;
        line-height: 40px;
      }

      .info-address {
        font-size: 16px;
        color: #969696;
        line-height: 40px;
      }

      .info-default {
        cursor: pointer;
        border: 1px solid $themeColor;
        width: 120px;
        height: 40px;
        border-radius: 4px;
        color: $themeColor;
        background: #fff;
        margin-left: 20px;
      }
    }
  }

  .wares-box {
    padding-top: 40px;

    .business-name {
      font-size: 18px;
      color: #333;

      a {
        color: #333;
      }

      .icon-bus {
        display: inline-block;
        vertical-align: middle;
        width: 32px;
        height: 28px;
        background: url('../../assets/img/084.png') no-repeat center;
        background-size: 100%;
        margin-right: 10px;
      }

      .bus-arrow {
        color: #969696;
      }
    }

    .wares {
      margin-top: 30px;
      border-bottom: 1px solid #efefef;
      padding-bottom: 40px;

      .wares-block {
        width: 500px;
        height: 150px;
      }

      .wares-img {
        float: left;
        width: 150px;
        height: 150px;
        background: #c8c8c8;
        margin-right: 20px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .wares-bus {
        float: left;

        .wares-name {
          color: #333;
          font-size: 16px;
          text-wrap();
          padding-bottom: 50px;
          line-height: 32px;
        }

        .wares-price {
          color: $themeColor;
          font-size: 18px;
          line-height: 40px;
        }

        .wares-nums {
          color: #969696;
        }
      }
    }
  }

  .wares-info {
    padding: 28px 0;
    border-bottom: 1px solid #efefef;

    h4 {
      padding: 16px 0;
      font-weight: normal;
      font-size: 16px;
      font-size: 18px;
      color: #333;
    }

    .info-line {
      padding: 16px 0;
      border-top: 1px dashed #efefef;
      font-size: 18px;

      .info-key {
        float: left;
      }

      .info-val {
        float: right;
      }

      .bus-nums {
        .bus-cut, .bus-add {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          vertical-align: middle;
          cursor: pointer;
        }

        .bus-nums {
          font-size: 18px;
          padding: 0 14px;
          line-height: 30px;
        }

        .bus-cut {
          background: url('../../assets/img/081.png') no-repeat center;
          background-size: 100%;
        }

        .bus-add {
          background: url('../../assets/img/083.png') no-repeat center;
          background-size: 100%;
        }
      }
    }
  }

  .pay-type {
    border-bottom: 1px solid #efefef;
    padding: 36px 0;

    p {
      font-size: 18px;
      color: #333;
      padding-bottom: 24px;
    }

    .pay-box {
      .wxplay-btn, .alipay-btn {
        height: 61px;
        width: 591px;
        background: #f4f4f4;
        font-size: 18px;

        &.active {
          border: 1px solid $themeColor;
          color: $themeColor;
        }
      }

      .wxplay-btn+.alipay-btn {
        margin-left: 18px;
      }

      .icon-wx {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('../../assets/img/054.png') no-repeat center;
        background-size: 100%;
        margin-right: 10px;
        vertical-align: middle;
      }

      .icon-ali {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('../../assets/img/055.png') no-repeat center;
        background-size: 100%;
        margin-right: 10px;
        vertical-align: middle;
      }
    }
  }

  .confirm-action {
    text-align: right;
    padding: 30px 0 50px 0;

    button {
      width: 150px;
      height: 40px;
      border-radius: 4px;
      background: $themeColor;
      color: #fff;
      outline: none;
      border: 1px solid $themeColor;
      cursor: pointer;

      &:active {
        background: red;
      }
    }
  }

  .not-address {
    line-height: 100px;
    text-align: left;
    color: #989898;

    a {
      color: $shopBgColor;
    }
  }
</style>
<template>
  <div class="settle-confirm-view" v-loading="loading">
    <div class="settle-confirm-head">
      <div class="settle-steps container clearfix">
        <h4>购买结算页</h4>
        <div class="steps-box">
          <el-steps class="confirm-steps steps" :active="currStep" finish-status="success" align-center>
            <el-step title="1.填写核对订单信息">
              <div slot="icon" class="el-step__icon-inner">1</div>
            </el-step>
            <el-step title="2.成功提交订单"></el-step>
          </el-steps>
        </div>
      </div>
    </div>
    <div class="settle-main-view">
      <div class="container">
        <h3 class="settle-title">填写并核对订单信息</h3>
        <div class="consignee-info">
          <h4>选择并确认收货人信息</h4>
          <div class="info-line" v-for="address in addressList" :key="address.id">
            <button class="info-name" @click="selectAddress(address)" :class="{active:address.id === order.addressBook}" v-text="address.name"></button>
            <span class="info-tel" v-text="address.phone"></span>
            <span class="info-address">收货地址：{{address.address.province}} {{address.address.city}} {{address.address.region}} {{address.address.street}}</span>
            <button class="info-default" v-if="address.isDefault">默认地址</button>
          </div>
          <div v-if="addressList.length ===0" class="not-address">
            你还没有收货地址，请去
            <router-link :to="{name: 'collectAddress'}">添加地址</router-link>
          </div>
        </div>
        <div class="wares-box">
          <p class="business-name" v-if="goods.shop">
            <span class="icon-bus"></span>
            <router-link :to="{name:'shopIndex',params:{shopID:shop.id}}">{{shop.name}}</router-link>
            <span class="el-icon-arrow-right bus-arrow"></span>
          </p>
          <div class="wares clearfix">
            <div class="wares-block">
              <div class="wares-img"><img v-if="goods.photos" :src="goods.photos[0]" alt=""></div>
              <div class="wares-bus">
                <p class="wares-name" v-text="goods.name"></p>
                <p class="wares-price">¥{{goods.price}}</p>
                <p class="wares-nums">x{{amount}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="wares-info">
          <h4>费用明细</h4>
          <div class="info-line clearfix">
            <span class="info-key">购买数量:</span>
            <div class="bus-nums info-val">
              <span @click="cut" class="bus-cut"></span>
              <span class="bus-nums" v-text="amount"></span>
              <span @click="add" class="bus-add"></span>
            </div>
          </div>
          <div class="info-line clearfix">
            <span class="info-key">需付运费:</span>
            <span class="info-val theme-font">+ ¥{{totalPostage}}</span>
          </div>
          <div class="info-line clearfix">
            <span class="info-key">应付总额:</span>
            <span class="info-val theme-font">¥{{totalPrice}}</span>
          </div>
        </div>
        <div class="pay-type">
          <p>请选择支付方式</p>
          <div class="pay-box">
            <el-button class="wxplay-btn" :class="{active:order.payment.channel==='wechat'}" plain @click="order.payment.channel='wechat'">
              <i class="icon-wx"></i>微信支付</el-button>
            <el-button class="alipay-btn" :class="{active:order.payment.channel==='alipay'}" plain @click="order.payment.channel='alipay'">
              <i class="icon-ali"></i>支付宝支付</el-button>
          </div>
        </div>
        <div class="confirm-action">
          <button class="confirm-btn" @click="place">提交订单</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { getAddressList } from '../../api/my'
  import { getGoodsDetail, getShop, placeOrder } from '../../api/common'
  export default {
    name: 'SettleConfirm',
    data() {
      return {
        currStep: 0,
        amount: 0,
        addressList: [],
        goods: {},
        order: {
          goods: '',
          payment: { channel: '' },
          quantity: 0,
          addressBook: '',
          from: 'pc'
        },
        shop: {},
        loading: false,
        orderInfo: {}
      }
    },
    props: {
      goodsID: {
        required: true
      },
      num: {
        required: true
      }
    },
    computed: {
      totalPrice() {
        return (this.amount * this.goods.price + (this.totalPostage - 0)).toFixed(2)
      },
      totalPostage() {
        return (this.amount * this.goods.postage).toFixed(2)
      }
    },
    created() {
      this.getAddressList()
      this.getGoodsDetail()
      this.amount = this.num
      this.order.goods = this.goodsID
    },
    methods: {
      place() {
        if (this.amount <= 0) {
          this.$message.error('商品数量必须大于0')
          return
        }
        if (!this.order.addressBook) {
          this.$message.error('收货地址必须选择')
          return
        }
        if (!this.order.payment.channel) {
          this.$message.error('支付方式必须选择')
          return
        }
        this.loading = true
        this.order.quantity = this.amount
        placeOrder(this.order).then((res) => {
          this.orderInfo = res.data
          if (this.order.payment.channel === 'wechat') {
            this.$router.push({ name: 'settleWxPay', params: { orderID: this.orderInfo.id } })
          } else if (this.order.payment.channel === 'alipay') {
            window.location.href = this.orderInfo.payment.order
          }
        }).catch((err) => {
          console.log(err)
          this.loading = false
          this.$message.error(err.resMessage || err.message)
        })
      },
      toPay() {

      },
      selectAddress(address) {
        if (this.order.addressBook === address.id) {
          this.order.addressBook = ''
        } else {
          this.order.addressBook = address.id
        }
      },
      cut() {
        if (!this.amount) return
        this.amount--
      },
      add() {
        this.amount++
      },
      getAddressList() {
        getAddressList().then((res) => {
          this.addressList = res.data
          this.getDefaultAddress()
        }).catch((err) => {
          console.log(err)
          this.$message.error(err.resMessage || err.message)
        })
      },
      getGoodsDetail() {
        getGoodsDetail(this.goodsID).then((res) => {
          this.goods = res.data
          if (this.goods.shop) {
            this.getShop(this.goods.shop)
          }
        }).catch((err) => {
          console.log(err)
          this.$message.error(err.resMessage || err.message)
        })
      },
      getDefaultAddress() {
        this.addressList.forEach((item) => {
          if (item.isDefault) {
            this.order.addressBook = item.id
          }
        })
      },
      getShop(shopID) {
        getShop(shopID).then((res) => {
          this.shop = res.data
        }).catch((err) => {
          console.log(err)
          this.$message.error(err.resMessage || err.message)
        })
      }
    }
  }
</script>
