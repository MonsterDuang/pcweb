<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .pledge-view {
        width: 100%;
        background: #fff;
        padding: 0 42px;
        padding-bottom: 30px;
        margin-bottom: 30px;
    }

    .money-box {
        padding: 50px 0;
        font-size: 20px;
        color: #aaaaaa;

        .icon-money {
            background: url('../../assets/img/097.png') no-repeat center;
            background-size: 100%;
            width: 124px;
            height: 124px;
            margin: 0 auto;
        }

        p {
            text-align: center;
            margin: 10px;
        }

        .theme-font {
            font-size: 24px;
        }
    }

    .drawback-box, .wait-box {
        width: 100%;
        height: 192px;
        border: 1px solid #e0e0e0;
        margin-bottom: 20px;

        .box-title {
            height: 51px;
            border-bottom: 1px solid #e0e0e0;
            background: #f4f4f4;
            text-align: center;
            font-size: 18px;
            line-height: 50px;
        }

        .theme-font {
            font-size: 24px;
            line-height: 137px;
            height: 138px;
            text-align: center;
        }
    }
</style>
<template>
    <div class="pledge-view" v-loading="loading">
        <div class="money-box">
            <div class="icon-money"></div>
            <p>我的资产</p>
            <p class="theme-font">¥{{marginWallet.waitRefund+marginWallet.waitDeduct}}</p>
        </div>
        <div class="drawback-box">
            <div class="box-title">待退款（元）</div>
            <div class="theme-font" v-text="marginWallet.waitRefund"></div>
        </div>
        <div class="wait-box">
            <div class="box-title">待扣除（元）</div>
            <div class="theme-font" v-text="marginWallet.waitDeduct"></div>
        </div>
    </div>
</template>
<script>
    import { getMyMarginMoney } from '../../api/my'
    export default {
        name: 'PersonlCenterPledge',
        data() {
            return {
                marginWallet: {},
                loading: true
            }
        },
        created() {
            this.getMoney()
        },
        methods: {
            getMoney() {
                this.loading = true
                getMyMarginMoney().then((res) => {
                    this.marginWallet = res.data
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            }
        }
    }
</script>
