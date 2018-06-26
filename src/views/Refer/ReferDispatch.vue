<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .refer-dispatch-view {
    width: 100%;
    background: #f4f4f4;
    padding-bottom: 30px;
  }

  .dispatch-head-bar {
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

  .dispatch-content {
    width: 100%;
    margin-top: 30px;

    .dispatch-box {
      width: 100%;
      background: #fff;
      min-height: 374px;
    }
  }
</style>
<template>
  <div class="refer-dispatch-view">
    <div class="dispatch-head-bar">
      <div class="container">
        <h4>配送费收取标准</h4>
      </div>
    </div>
    <div class="dispatch-content">
      <div class="container">
        <div class="dispatch-box"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ReferDispatch'
  }
</script>
