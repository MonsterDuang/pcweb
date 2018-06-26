<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .shop {
    width: 100%;
  }

  .shop-view {
    width: 100%;
    background: $themeBgColor;
  }
</style>
<template>
  <div class="shop">
    <shop-search-bar></shop-search-bar>
    <shop-nav-bar></shop-nav-bar>
    <router-view class="shop-view"></router-view>
  </div>
</template>
<script>
  import ShopNavBar from "./ShopNavBar.vue";
  import ShopSearchBar from './ShopSearchBar.vue'
  export default {
    name: "Shop",
    components: {
      ShopNavBar,
      ShopSearchBar
    },
    data() {
      return {};
    },
    created() {
      this.$store.dispatch('gotoShop', this.$route.params.shopID)
    }
  };
</script>
