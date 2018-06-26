<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .home {
    width: 100%;
  }

  .home-view {
    width: 100%;
    background: $themeBgColor;
    min-height: 340px;
  }
</style>
<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <router-view class="home-view"></router-view>
  </div>
</template>
<script>
  import HomeNavBar from "./HomeNavBar.vue";
  export default {
    name: "Home",
    components: {
      HomeNavBar
    },
    created () {
    },
    data() {
      return {};
    }
  };
</script>
