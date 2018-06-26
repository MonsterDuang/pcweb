<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';

  .index-carousel {
    height: 500px;
    background: #000000;
    width: 100%;
    cursor: pointer;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 450px;
    text-align: center;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .banner-url {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }
</style>
<template>
  <div class="index-carousel">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="(item,index) in banner" :key="item.id">
        <a class="banner-url" :href="item.uri?item.uri:'javascript:void(0);'" :style="{'backgroundImage':`url(${item.img})`}"></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    name: "BaseCarousel",
    props: {
      banner: {
        type: Array,
        default() {
          return [{ uri: '#', img: '', id: 1 },
          { uri: '#', img: '', id: 2 },
          { uri: '#', img: '', id: 3 },
          { uri: '#', img: '', id: 4 }]
        }
      }
    },
    data() {
      return {};
    }
  };
</script>


