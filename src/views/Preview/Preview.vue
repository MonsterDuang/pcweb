<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .preview {
    width: 100%;
  }

  .preview-view {
    width: 100%;
    background: $themeBgColor;
  }
</style>
<template>
  <div class="preview">
    <preview-search-bar></preview-search-bar>
    <router-view class="preview-view"></router-view>
  </div>
</template>
<script>
  import PreviewSearchBar from './PreviewSearchBar.vue'
  export default {
    name: "Preview",
    components: {
      PreviewSearchBar
    },
    data() {
      return {};
    }
  };
</script>
