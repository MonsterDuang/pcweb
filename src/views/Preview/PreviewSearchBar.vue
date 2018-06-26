<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .preview-search-bar {
        background: $shopBgColor;
        height: 100px;
    }

    .search-bar {
        color: #ffffff;
    }

    .preview-info {
        float: left;
        padding: 14px 0;

        h3 {
            color: #fff;
            font-weight: normal;
            font-size: 24px;
            line-height: 72px;
        }
    }

    .search-box {
        float: right;
        width: 451px;
        height: 40px;
        line-height: 36px;
        margin: 31px 0;

        .search-input {
            width: 390px;
            vertical-align: middle;
            background: rgba(255, 255, 255, 0.3);
            height: 100%;
            padding: 0 16px;
            font-size: 16px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            outline: none;
            color: #ffffff;
        }

        .icon-search {
            display: inline-block;
            vertical-align: middle;
            width: 61px;
            border-left: 1px solid #c1e0e1;
            height: 100%;
            color: $shopBgColor;
            background: #fff;
            font-size: 30px;
            line-height: 38px;
            text-align: center;
            cursor: pointer;
        }
    }
</style>
<template>
    <div class="preview-search-bar">
        <div class="container search-bar clearfix">
            <div class="preview-info">
                <h3 v-text="title"></h3>
            </div>
            <div class="search-box">
                <input class="search-input" type="text" placeholder="搜索">
                <span @click="search" class="icon-search el-icon-search"></span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PreviewSearchBar',
        data() {
            return {

            }
        },
        computed: {
            title() {
                return this.$store.state.preview.title
            }
        },
        methods: {
            search() {
                this.$router.push({ name: 'previewSearch' })
            }
        }
    }
</script>
