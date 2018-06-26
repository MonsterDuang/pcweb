<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .home-preview-card {
        cursor: pointer;
        width: 596px;
        height: 251px;
        border: 1px solid #e0e0e0;
        background: #fff;
    }

    .preview-img {
        float: left;
        width: 246px;
        height: 100%;
        background: #d6d6d6;

        img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
        }
    }

    .preview-info {
        float: left;
        width: 348px;
        height: 100%;
        padding: 20px;
        border-left: 1px solid #e0e0e0;

        h5 {
            color: #333333;
            font-size: 20px;
            line-height: 40px;
            text-wrap();
        }

        p {
            text-wrap();
            color: #c0c0c0;
            line-height: 42px;
        }
    }
</style>
<template>
    <div class="home-preview-card clearfix" @click="toPreviewShop">
        <div class="preview-img">
            <img :src="shop.cover" :alt="shop.name">
        </div>
        <div class="preview-info">
            <h5>{{shop.title}}</h5>
            <p>预展商家：{{shop.name}}</p>
            <p>预展地点：{{shop.address}}</p>
            <p>预展时间：{{toDate(shop.startAt)}}</p>
            <p>预展展品：({{shop.goodsCount}})</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomePreviewCard',
        props: {
            shop: {
                required: true,
                type: Object
            }
        },
        methods: {
            toPreviewShop() {
                this.$router.push({ name: 'previewShop', params: { shopID: this.shop.id } })
            },
            toDate(date) {
                return new Date(date).toLocaleDateString().replace(/\//ig, '-')
            }
        }
    }
</script>
