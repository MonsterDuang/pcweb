<style lang="stylus" scoped>
@import '../../stylus/variables.styl';

.preview-wares-card {
    width: 596px;
    height: 251px;
    background: #fff;
    cursor: pointer;
}

.wares-img {
    float: left;
    width: 246px;
    height: 100%;
    background: #d6d6d6;

    img {
        width: 100%;
        height: 100%;
    }
}

.wares-info {
    float: left;
    width: 350px;
    height: 100%;
    padding: 20px;
    font-size: 18px;
    border-left: 1px solid #e0e0e0;

    p {
        text-wrap();
        color: #c0c0c0;
        line-height: 50px;

        span {
            color: #333;
        }
    }
}
</style>
<template>
    <div class="preview-wares-card clearfix" @click="toPreviewWares">
        <div class="wares-img">
            <img :src="wares.covers[0]" :alt="wares.name">
        </div>
        <div class="wares-info">
            <p>产品名称：
                <span v-text="wares.name"></span>
            </p>
            <p>产品编号：
                <span v-text="wares.no"></span>
            </p>
            <p>产品估价：
                <span>¥{{wares.valuation}}</span>
            </p>
            <p>拍卖时间：
                <span v-text="$_dateFormat(wares.auctionStartAt)"></span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
  name: "PreviewWaresCard",
  props: {
    wares: {
      required: true,
      type: Object
    }
  },
  methods: {
    toPreviewWares() {
      this.$router.push({
        name: "previewWares",
        params: { goodsID: this.wares.id }
      });
    }
  }
};
</script>
