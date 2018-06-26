<style lang="stylus" scoped>
@import '../../stylus/variables.styl';

.refer-modify-view {
    width: 100%;
    background: #f4f4f4;
    padding-bottom: 30px;
}

.modify-head-bar {
    width: 100%;
    background: #4f9da4;
    height: 101px;

    h4 {
        color: #fff;
        font-size: 18px;
        font-weight: normal;
        line-height: 101px;
    }
}

.modify-content {
    width: 100%;
    margin-top: 30px;

    .modify-box {
        width: 100%;
        background: #fff;
        min-height: 374px;
        padding: 0 50px;
    }
}

.steps-box {
    padding-top: 30px;
    overflow: hidden;
}

.steps {
    width: 400px;
}

.check-box {
    margin-top: 50px;

    >div {
        height: 36px;
        margin-bottom: 20px;
        font-size: 14px;
        color: #333;

        span {
            display: inline-block;
            width: 85px;
            text-align: left;
            height: 36px;
            line-height: 36px;
        }

        input {
            height: 36px;
            border: 1px solid #e0e0e0;
            padding: 0 6px;
            outline: none;

            &:focus {
                border: 1px solid $themeColor;
            }
        }
    }

    .phone-input {
        width: 256px;
    }

    .phone-select {
        width: 140px;
        height: 36px;
        margin-right: 6px;
    }

    .auth-code {
        display: inline-block;
        width: 402px;

        input {
            width: 300px;
            border: none;
            border: 1px solid #e0e0e0;
        }

        button {
            width: 100px;
            height: 36px;
            border: 1px solid #e0e0e0;
            border-left: none;
            text-align: center;
            line-height: 34px;
            color: #333;
            padding: 0;
            border-radius: 0px;
            background: #f4f4f4;
            outline: none;
            cursor: pointer;

            &.code-time {
                color: $themeColor;
            }
        }
    }

    .deal-box {
        padding-left: 85px;
        color: #e0e0e0;

        .deal-url {
            color: #76d2d4;
        }
    }

    .confirm-box {
        padding-left: 85px;

        button {
            width: 92px;
            height: 32px;
            color: #333;
            background: #f4f4f4;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            font-size: 16px;
            line-height: 28px;
            text-align: center;
            cursor: pointer;
            outline: none;

            &:active {
                background: #e0e0e0;
            }
        }
    }
}

.reset-box {
    margin-top: 50px;

    >div {
        height: 36px;
        margin-bottom: 20px;
        font-size: 14px;
        color: #333;

        span {
            display: inline-block;
            width: 85px;
            text-align: left;
            height: 36px;
            line-height: 36px;
        }

        input {
            height: 36px;
            border: 1px solid #e0e0e0;
            padding: 0 6px;
            outline: none;
            width: 318px;

            &:focus {
                border: 1px solid $themeColor;
            }
        }

        .confrim-input {
            background: url('../../assets/img/086.png') no-repeat 96% center;
            background-size: 6%;

            &.right {
                background: url('../../assets/img/087.png') no-repeat 96% center;
                background-size: 6%;
            }
        }

        button {
            width: 92px;
            height: 32px;
            color: #fff;
            background: $themeColor;
            border: 1px solid $themeColor;
            border-radius: 4px;
            font-size: 16px;
            line-height: 28px;
            text-align: center;
            cursor: pointer;
            outline: none;

            &:active {
                background: red;
            }
        }
    }

    .reset-action {
        padding-left: 85px;
    }
}
</style>
<template>
    <div class="refer-modify-view" v-loading="loading">
        <div class="modify-head-bar">
            <div class="container">
                <h4>绑定手机号</h4>
            </div>
        </div>
        <div class="modify-content">
            <div class="container">
                <div class="modify-box">
                    <div class="steps-box">
                        <!-- <el-steps class="confirm-steps steps" :active="currStep" finish-status="success" align-center>
                            <el-step title="绑定并验证手机">
                                <div slot="icon" class="el-step__icon-inner">1</div>
                            </el-step>
                            <el-step title="2.设置密码"></el-step>
                        </el-steps> -->
                    </div>
                    <div v-if="currStep===0" class="check-box">
                        <div>
                            <span>手机号码:</span>
                            <el-select class="phone-select" :value="1" placeholder="请选择">
                                <el-option label="中国大陆 +86" :value="1">
                                </el-option>
                            </el-select>
                            <input type="text" v-model="phone" placeholder="请输入手机号码" class="phone-input"></div>
                        <div class="authcode-box">
                            <span>验证码:</span>
                            <div class="auth-code"><input v-model="authCode" t type="text" placeholder="请输入手机验证码">
                                <button v-if="!time" @click="getAuthCode">获取验证码</button>
                                <button v-else class="code-time">{{time}}s</button>
                            </div>
                        </div>
                        <div class="deal-box">
                            绑定既表示同意
                            <a class="deal-url">用户协议</a>
                        </div>
                        <div class="confirm-box">
                            <button @click="nextStep">绑定</button>
                        </div>
                    </div>
                    <!-- <div v-else class="reset-box">
                        <div>
                            <span>昵称：</span><input tabindex="1" v-model="nickname" type="text" placeholder="请输入昵称">
                        </div>
                        <div>
                            <span>密码：</span><input tabindex="2" v-model="password" type="password" placeholder="请输入密码">
                        </div>
                        <div>
                            <span>确认密码：</span><input tabindex="3" v-model="repassword" class="confrim-input right" type="password" placeholder="请再次输入密码">
                        </div>
                        <div class="reset-action">
                            <button @click="setting">设置</button>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
  getOTP,
  registerUser,
  editPassword,
  login,
  bindPhone
} from "../../api/user";
import { aesEncode } from "../../util/crypto";
import { constants } from "../../common/constants";
export default {
  name: "ReferAccountBinding",
  data() {
    return {
      currStep: 0,
      time: 0,
      phone: "",
      authCode: "",
      password: "",
      repassword: "",
      nickname: "",
      loading: false
    };
  },
  computed: {
    bindUserInfo() {
      return this.$store.state.user.bindUserInfo;
    }
  },
  mounted() {},
  methods: {
    authCodeTime() {
      this.time = 180;
      let interval = setInterval(() => {
        --this.time;
        if (this.time <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    },
    nextStep() {
      if (!this.phone) {
        this.$message.error("手机号码未填写或填写错误！");
        return;
      } else if (!this.authCode) {
        this.$message.error("请先获取验证码!");
        return;
      }
      this.loading = true;
      bindPhone({ verficode: this.authCode, phone: this.phone })
        .then(res => {
          this.$message.success("绑定成功");
          if (window.location.search.length > 10) {
            window.location.href = `${location.protocol}//${location.host}/${
              this.$router.resolve({ name: "homeIndex" }).href
            }`;
          } else {
            this.$store.dispatch("userLogin", this.bindUserInfo);
            this.$router.replace({ name: "homeIndex" });
          }
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
          this.$message.error(err.resMessage);
        });
    },
    getAuthCode() {
      if (!this.phone || this.phone.length !== 11) {
        this.$message.error("手机号码未填写或填写错误！");
        return;
      }
      getOTP({
        phone: this.phone,
        type: constants.OTP_TYPE_BIND,
        channel: constants.CHANNEL_PC
      })
        .then(res => {
          this.authCodeTime();
          this.$message.success(res.data.message);
        })
        .catch(err => {
          console.dir(err);
          this.$message.error(err.resMessage || err.message);
        });
    },
    setting() {}
  }
};
</script>
