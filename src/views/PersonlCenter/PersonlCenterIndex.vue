<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .main-content {
        padding-top: 50px;
    }

    .nav-menu {
        float: left;
        width: 130px;

        li {
            width: 100%;
            border-top: 1px solid #e0e0e0;
            padding: 16px 0;

            &:last-child {
                border-bottom: 1px solid #e0e0e0;
            }

            a {
                font-size: 18px;
                color: #333;

                &.active {
                    color: $themeColor;
                }

                &:hover {
                    color: $themeColor;
                }
            }
        }
    }

    .view-container {
        float: right;
        width: 1040px;
    }

    .personlCenter-view {
        width: 100%;
    }
</style>
<template>
    <div class="index-view">
        <div class="clearfix container main-content">
            <ul class="nav-menu">
                <li v-for="r in myRoute" :key="r.route">
                    <router-link active-class="active" :to="{name: r.route}" v-text="r.name"></router-link>
                </li>
            </ul>
            <div class="view-container">
                <router-view class="personlCenter-view"></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PersonlCenterIndex',
        data() {
            return {}
        },
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo
            },
            myRoute() {
                return this.$store.getters.myRoute
            }
        }
    }
</script>
