<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .purse-view {
        width: 100%;
        background: #fff;
        margin-bottom: 30px;
    }

    .purse-tabs {
        height: 51px;
        line-height: 50px;
        border-bottom: 1px solid #e8e8e8;
        color: #333;
        font-size: 20pxs;

        span {
            padding-left: 30px;
            cursor: pointer;
        }

        .active {
            color: $themeColor;
        }
    }

    .purse-content {
        padding: 0 20px;
    }

    .assets-box {
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

    .assort-box {
        width: 100%;
        border: 1px solid #e0e0e0;
        height: 231px;
        background: #f4f4f4;
        font-size: 22px;
        color: #aaaaaa;

        .case-box {
            float: left;
            width: 499px;
            border-right: 1px solid #e0e0e0;
            height: 100%;
            text-align: center;
            padding: 74px 0;
            line-height: 40px;
        }

        .disabled-box {
            float: left;
            width: 498px;
            height: 100%;
            text-align: center;
            padding: 74px 0;
            line-height: 40px;
        }
    }

    .prompt {
        padding: 60px 0;
        text-align: center;
    }
</style>
<template>
    <div class="purse-view">
        <div class="purse-tabs">
            <span @click="switchTab('sell')" :class="[curTab==='sell'?'active':'']">寄售钱包</span>
            <span v-if="userInfo.type==='appraiser'" @click="switchTab('check')" :class="[curTab==='check'?'active':'']">鉴定钱包</span>
        </div>
        <div class="purse-content" v-if="curTab==='sell'">
            <div class="assets-box">
                <div class="icon-money"></div>
                <p>我的资产</p>
                <p class="theme-font">¥{{sale.assets}}</p>
            </div>
            <div class="assort-box clearfix">
                <div class="case-box">
                    <p>可提现</p>
                    <p class="theme-font">¥{{sale.cash}}</p>
                </div>
                <div class="disabled-box">
                    <p v-if="curTab==='sell'">待解冻（订单未完成）</p>
                    <p>¥{{sale.frozen}}</p>
                </div>
            </div>
            <div class="prompt">提示：PC端不支持提现，若要提现请去APP上操作</div>
        </div>
        <div class="purse-content" v-else-if="curTab==='check'">
            <div class="assets-box">
                <div class="icon-money"></div>
                <p>我的资产</p>
                <p class="theme-font">¥{{sale.assets}}</p>
            </div>
            <div class="assort-box clearfix">
                <div class="case-box">
                    <p>可提现</p>
                    <p class="theme-font">¥{{sale.cash}}</p>
                </div>
                <div class="disabled-box">
                    <p v-if="curTab==='check'">待解冻（鉴定未完成）</p>
                    <p>¥{{sale.frozen}}</p>
                </div>
            </div>
            <div class="prompt">提示：PC端不支持提现，若要提现请去APP上操作</div>
        </div>
    </div>
</template>
<script>
    import { getMyWalletSale, getMyWalleAppraisal } from '../../api/my'
    export default {
        name: 'PersonlCenterPurse',
        data() {
            return {
                curTab: 'sell',
                sale: {},
                appraisal: {}
            }
        },
        computed:{
            userInfo() {
                return this.$store.state.user.userInfo
            }
        },
        created() {
            this.getWalletSaleData();
            this.getWalletCheckData();
        },
        methods: {
            getWalletSaleData() {
                getMyWalletSale().then((res) => {
                    this.sale = res.data
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            getWalletCheckData() {
                getMyWalleAppraisal().then((res) => {
                    this.appraisal = res.data
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },
            switchTab(tab) {
                this.curTab = tab
            }
        }
    }
</script>


