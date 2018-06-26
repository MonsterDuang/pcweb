<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .personlCenter {
        width: 100%;
        background: $shopBgColor;
        height: 101px;
    }

    .personl-navbar {
        overflow: hidden;
    }

    .user-box {
        float: left;
        line-height: 100px;

        .user-port {
            float: left;
            position: relative;
            cursor: pointer;
            border-radius: 50%;

            &::after {
                content: ' ';
                position: absolute;
                padding: 0;
                margin: 0;
                bottom: -16px;
                left: 50%;
                transform: translateX(-50%);
                border: 10px solid transparent;
                border-bottom: 15px solid #f4f4f4;
                border-top-width: 0px;
                transition: bottom 0.36s;
            }

            &.active::after {
                bottom: -1px;
            }

            img {
                width: 54px;
                height: 54px;
                vertical-align: middle;
            }
        }

        h4 {
            float: left;
            vertical-align: middle;
            margin-left: 20px;
            font-size: 18px;
            color: #ffffff;
            font-weight: normal;
            cursor: pointer;
        }
    }

    .nav-list {
        float: right;

        li {
            float: left;
            font-size: 18px;
            line-height: 101px;
            margin-left: 80px;
            position: relative;

            &::after {
                content: ' ';
                position: absolute;
                padding: 0;
                margin: 0;
                bottom: -15px;
                left: 50%;
                transform: translateX(-50%);
                border: 10px solid transparent;
                border-bottom: 15px solid #f4f4f4;
                border-top-width: 0px;
                transition: bottom 0.36s;
            }

            &.active::after {
                bottom: 0px;
            }

            a {
                color: #fff;
            }
        }
    }
</style>
<template>
    <div class="personlCenter">
        <div class="container personl-navbar clearfix">
            <div class="user-box clearfix">
                <router-link class="user-port " active-class="active" :to="{name:'myData'}" tag="div">
                    <img v-if="userInfo.avatar" :src="userInfo.avatar" alt="">
                    <img v-else src="../../assets/img/shopLogo.png" alt="">
                </router-link>
                <router-link class="user-nick" :to="{name:'myData'}" tag="h4" v-text="userInfo.nickname"></router-link>
            </div>
            <ul class="nav-list clearfix">
                <router-link active-class="active" :to="{path: '/pcweb/personl/index'}" tag="li">
                    <a>个人中心首页</a>
                </router-link>
                <router-link active-class="active" :to="{name:'collectAddress'}" tag="li">
                    <a>我的收货地址</a>
                </router-link>
                <router-link active-class="active" :to="{name:'accountSetting'}" tag="li">
                    <a>账户设置</a>
                </router-link>
                <router-link active-class="active" :to="{name:'myMessage'}" tag="li">
                    <a>我的消息</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "PersonlCenterNavBar",
        data() {
            return {};
        },
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo
            }
        }
    };
</script>
