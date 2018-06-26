<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .index-nav-bar {
        background: #ffffff;
        position: relative;
        z-index: 12;
        width: 100%;
        border-bottom: 1px solid #e0e0e0;
        height: 40px;
    }

    .nav-bar-box {
        position: relative;
        z-index: 13;
        line-height: 40px;
    }

    .nav-bar-sort {
        position: absolute;
        top: 0;
        left: 0;
        width: 240px;
        z-index: 15;

        .sort-title {
            height: 40px;
            background: $themeColor;
            color: #ffffff;
            text-align: center;
            font-size: 16px;
            vertical-align: middle;
        }

        .back-home {
            cursor: pointer;

            .icon-back {
                display: inline-block;
                border-width: 6px;
                border-style: solid;
                border-color: transparent;
                border-right-color: #fff;
                border-left-width: 0;

                &:last-child {
                    margin-right: 10px;
                }
            }
        }

        .sort-list {
            background: #ffffff;
            height: 500px;
            overflow: hidden;
            transition: height 0.3s;

            &.toggleSort {
                height: 0px;
            }

            // box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.26);
            li {
                height: 100px;
                border-bottom: 1px solid #e0e0e0;
                line-height: 100px;
                padding-left: 22px;
                cursor: pointer;

                a {
                    display: block;
                    font-size: 24px;
                    color: #737373;
                    vertical-align: middle;

                    span.icon {
                        display: inline-block;
                        vertical-align: middle;
                        width: 60px;
                        height: 60px;
                        margin-right: 22px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 100%;
                    }

                    .icon-font {
                        background: url('../../assets/img/003.png') no-repeat center;
                        background-size: 100%;
                    }

                    .icon-chinaware {
                        background: url('../../assets/img/004.png') no-repeat center;
                        background-size: 100%;
                    }

                    .icon-jade {
                        background: url('../../assets/img/005.png') no-repeat center;
                        background-size: 100%;
                    }

                    .icon-gem {
                        background: url('../../assets/img/006.png') no-repeat center;
                        background-size: 100%;
                    }

                    .icon-rest {
                        background: url('../../assets/img/007.png') no-repeat center;
                        background-size: 100%;
                    }
                }
            }
        }
    }

    .nav-bar-list {
        padding-left: 300px;

        .active {
            color: $themeColor;
        }

        a {
            color: #787878;
            font-size: 16px;
            margin-right: 75px;

            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
<template>
    <div class="index-nav-bar">
        <div class="nav-bar-box container">
            <div class="nav-bar-sort">
                <div v-show="showSort" class="sort-title">商品分类</div>
                <div @click="backHome" v-show="!showSort" class="sort-title back-home">
                    <span class="icon-back"></span>
                    <span class="icon-back"></span>商城首页</div>
                <ul class="sort-list" :class="{'toggleSort':!showSort}">
                    <li v-for="(tag,key) in tagMap" :key="tag.id">
                        <router-link :to="{name:'homeLabel',params:{tag:tag.id}}">
                            <span class="icon" :style="{backgroundImage: `url(${tag.icon})`}"></span>{{tag.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="nav-bar-list">
                <router-link v-show="showSort" active-class="active" :to="{name:'homeIndex'}">商城首页</router-link>
                <router-link active-class="active" :to="{name:'homeLive'}">视频直播</router-link>
                <router-link active-class="active" :to="{name:'homeAuction'}">拍卖专场</router-link>
                <router-link active-class="active" :to="{name:'homeCheck'}">鉴宝专区</router-link>
                <router-link active-class="active" :to="{name:'homePick'}">捡漏专场</router-link>
                <router-link active-class="active" :to="{name:'homeHotShop'}">人气好店</router-link>
                <router-link active-class="active" :to="{name:'homePreview'}">预展专区</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeNavBar",
        data() {
            return {

            };
        },
        computed: {
            showSort() {
                return this.$store.state.home.navbar.showSort;
            },
            tagMap() {
                return this.$store.state.home.navbar.tagMap
            }
        },
        created() {
            var self = this


        },
        methods: {
            backHome() {
                var self = this
                self.$router.push({ name: "homeIndex" });
                self.$store.dispatch("backHome");
            }
        }
    };
</script>
