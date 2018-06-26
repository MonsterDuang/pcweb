<template>
<div class="business">
  <div class="business-manage">
    <ul class="nav-items">
      <li><router-link :to="{name: 'businessStore'}" :class="{'a-active' : this.$route.path.split('/')[2] == 'businessstore'}">我的店铺</router-link></li>
      <li><router-link :to="{name: 'settingShop'}" :class="{'a-active' : this.$route.path.split('/')[2] == 'settingshop'}">店铺设置</router-link></li>
      <li><router-link :to="{name: 'productManage'}" :class="{'a-active' : this.$route.path.split('/')[2] == 'productmanage'}">商品管理</router-link></li>
      <li><router-link :to="{name: 'myCase'}" :class="{'a-active' : this.$route.path.split('/')[2] == 'mycase'}">我的订单</router-link></li>
      <li><router-link :to="{name: 'myAuction'}" :class="{'a-active' : this.$route.path.split('/')[2] == 'myauction'}">我的竞拍</router-link></li>
      <li><router-link :to="{name: 'uploadPro'}" :class="{'a-active' : this.$route.path.split('/')[2] == 'uploadpro'}">上传商品</router-link></li>
      <li><router-link :to="{name: 'statistics'}" :class="{'a-active' : this.$route.path.split('/')[2] == 'statistics'}">统计</router-link></li>
    </ul>
    <router-view class="business-manage-view"></router-view>
    <div class="clear"></div>
  </div>
</div>
</template>

<script>
export default {
};
</script>

<style scoped>
.business{
  width: 100%;
  height: 100%;
  background: #f4f4f4
}
.business-manage{
  width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
}
.nav-items{
  width: 130px;
  float: left;
}
.nav-items li {
  width: 100%;
  border-top: 1px solid #e0e0e0;
  padding: 16px 0;
}
.nav-items li:last-child {
  border-bottom: 1px solid #e0e0e0;
}

.nav-items li a {
  font-size: 18px;
  color: #333
}
.nav-items li a:hover{
  color: #fc3c4e;
}
.a-active{
  color: #fc3c4e !important;
}
.business-manage-view{
  width: 1040px !important;
  float: right;
}
.clear{
  clear: both;
}
</style>