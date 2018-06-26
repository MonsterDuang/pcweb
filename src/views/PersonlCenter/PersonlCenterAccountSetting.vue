<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .account-view {
        width: 100%;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .edit-pw, .message-setting {
        width: 100%;
        background: #fff;
        height: 100px;
        padding: 25px 34px;
        font-size: 18px;
        margin-bottom: 20px;
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.37);
        line-height: 50px;

        .icon-edit, .icon-message {
            display: inline-block;
            vertical-align: middle;
            width: 50px;
            height: 50px;
            border-radius: 4px;
            margin-right: 20px;
        }

        .icon-edit {
            background: url('../../assets/img/124.png') no-repeat center;
            background-size: 100%;
        }

        .icon-message {
            background: url('../../assets/img/125.png') no-repeat center;
            background-size: 100%;
        }

        .left {
            float: left;
        }

        .edit-action {
            color: $shopBgColor;
        }

        .right {
            float: right;
        }

        .message-switch {
            position: relative;
            overflow: hidden;
            z-index: 11;
            height: 50px;
            display: block;

            input {
                position: absolute;
                z-index: -1;
                left: -999px;
                opacity: 1;
            }

            input.message-check:checked+.icon-switch {
                background: url('../../assets/img/089.png') center no-repeat;
                background-size: 100%;
            }

            .icon-switch {
                display: inline-block;
                width: 84px;
                height: 50px;
                cursor: pointer;
                background: url('../../assets/img/088.png') center no-repeat;
                background-size: 100%;
            }
        }
    }
</style>
<template>
    <div class="account-view">
        <div class="container">
            <div class="edit-pw clearfix">
                <div class="left">
                    <span class="icon-edit"></span>修改登录密码
                </div>
                <div class="right">
                    <router-link :to="{name:'modifyPwd'}" class="edit-action">修改</router-link>
                </div>
            </div>
            <div class="message-setting clearfix">
                <div class="left">
                    <span class="icon-message"></span>消息设置
                </div>
                <div class="right">
                    <label class="message-switch">
                        <input class="message-check" type="checkbox" v-model="settings.notify">
                        <span class="icon-switch"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PersonlCenterAccountSetting',
        data() {
            return {
                messageSwitch: false,
                settings: {
                    notify: false
                }
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo
            }
        }
    }
</script>

 