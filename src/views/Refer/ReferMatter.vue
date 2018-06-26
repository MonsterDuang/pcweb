<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .refer-matter-view {
    width: 100%;
    background: #f4f4f4;
    padding-bottom: 30px;
  }

  .matter-head-bar {
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

  .matter-content {
    width: 100%;
    margin-top: 30px;

    .matter-box {
      width: 100%;
      background: #fff;
      min-height: 374px;
    }
  }
</style>
<template>
  <div class="refer-matter-view">
    <div class="matter-head-bar">
      <div class="container">
        <h4>常见问题</h4>
      </div>
    </div>
    <div class="matter-content">
      <div class="container">
        <div class="matter-box"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ReferMatter'
  }
</script>
