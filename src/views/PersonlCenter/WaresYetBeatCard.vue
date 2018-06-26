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
        position: absolute;
        bottom: 0;
        left: 0;
        width: 90px;
        height: 32px;
        text-align: center;
        color: #fff;
        border-radius: 4px;
        background: $themeColor;
        border: none;
        outline: none;
        cursor: pointer;

        &:active {
            background: red;
        }
    }
}
</style>
<template>
    <div class="wares-card clearfix">
        <div class="wares-img">
            <router-link :to="{ name: 'pickGoods', params: { goodsID: goods.id } }"><img :src="goods.photos[0]" alt=""></router-link>
        </div>
        <div class="wares-info">
            <p class="wares-name" v-text="goods.name"></p>
            <p class="wares-price theme-font">¥{{order.price}}</p>
            <p class="wares-buyes">买家信息：{{order.buyer.nickname}} {{addressBook.phone}}</p>
            <p class="wares-address">收货地址：{{address.province}} {{address.city}} {{address.region}} {{address.street}}</p>
        </div>
        <div class="wares-action">
            <button v-if="order.status === 'wait-shipping'" @click="$emit('receiving',order)">立即发货</button>
            <span v-else-if="order.shipping">运单编号：{{order.shipping.no}}</span>
        </div>
    </div>
</template>
<script>
export default {
  name: "WaresYetBeatCard",
  props: {
    order: {
      required: true,
      type: Object
    }
  },
  computed: {
    goods() {
      return this.order.auctionGoods || this.order.goods || {};
    },
    addressBook() {
      return this.order.addressBook || {};
    },
    address() {
      return this.addressBook.address || {};
    }
  }
};
</script>

