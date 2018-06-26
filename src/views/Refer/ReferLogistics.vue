<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .refer-logistics-view {
    width: 100%;
    background: #f4f4f4;
    padding-bottom: 30px;
  }

  .logistics-head-bar {
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

  .logistics-content {
    width: 100%;
    margin-top: 30px;

    .logistics-box {
      width: 100%;
      background: #fff;
      min-height: 374px;
    }
  }
</style>
<template>
  <div class="refer-logistics-view">
    <div class="logistics-head-bar">
      <div class="container">
        <h4>物流服务</h4>
      </div>
    </div>
    <div class="logistics-content">
      <div class="container">
        <div class="logistics-box"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ReferLogistics'
  }
</script>
