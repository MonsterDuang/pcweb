<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .shop-navbar {
        border-top: 1px solid #bbdcde;
        border-bottom: 1px solid #bbdcde;
        background: #fff;
        height: 40px;
        line-height: 36px;
    }

    .nav-list {
        float: left;

        a {
            color: #787878;
            font-size: 18px;
            padding-right: 100px;

            &.ative {
                color: $themeColor;
            }
        }
    }

    .share-box {
        float: right;

        .icon-share {
            vertical-align: middle;
            width: 28px;
            color: #4fa2a9;
            font-size: 26px;
            line-height: 30px;
        }

        a {
            vertical-align: middle;
            color: #333;
        }
    }
</style>
<template>
    <div class="shop-navbar">
        <div class="container clearfix">
            <div class="nav-list">
                <router-link active-class="ative" :to="{name:'shopIndex'}" exact>店铺首页</router-link>
                <router-link active-class="ative" :to="{name:'shopWares'}" exact>店铺商品</router-link>
                <router-link active-class="ative" :to="{name:'shopAuction'}" exact>店铺拍卖专场</router-link>
            </div>
            <!-- <div class="share-box">
                <span class="icon-share el-icon-share"></span>
                <a href="#">分享店铺</a>
            </div> -->
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ShopNavBar'
    }
</script>
