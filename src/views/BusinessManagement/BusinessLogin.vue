<style lang="stylus" scoped>
@import '../../stylus/variables.styl';

.login-view {
    width: 100%;
    background: #fff;
}

.top-bar {
    height: 88px;

    .logo-box {
        position: relative;
        font-size: 30px;
        color: #4d9ea2;
        line-height: 80px;
        cursor: pointer;

        img {
            position: absolute;
            left: 0;
            top: 0;
            // width: 140px;
            height: 88px;
        }
    }
}

.login-content {
    width: 100%;
    height: 600px;
    background: #f4f4f4;
    position: relative;

    .login-container {
        position: relative;
        z-index: 11;

        .login-card {
            position: absolute;
            top: 100px;
            right: 0;
            width: 350px;
            background: #fff;

            .card-title {
                height: 50px;
                padding: 0 25px;
                line-height: 50px;
                font-size: 18px;
                color: #333;
            }

            .account-content {
                border-top: 2px solid #f4f4f4;
                border-bottom: 2px solid #f4f4f4;
                padding: 30px 24px;
            }

            .tel-box, .pw-box {
                width: 302px;
                border: 1px solid #e0e0e0;
                margin-bottom: 20px;

                span {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    background: #f4f4f4;
                    vertical-align: bottom;
                }

                .icon-user {
                    background: #f4f4f4 url('../../assets/img/126.png') no-repeat center;
                    background-size: 50%;
                }

                .icon-pw {
                    background: #f4f4f4 url('../../assets/img/127.png') no-repeat center;
                    background-size: 50%;
                }

                input {
                    width: 260px;
                    border: none;
                    border-left: 1px solid #e0e0e0;
                    padding: 0 10px;
                    line-height: 36px;
                    height: 40px;
                    color: #a4a4a4;
                    outline: none;
                }
            }

            .account-content>p {
                text-align: right;
                font-size: 14px;
                margin-bottom: 20px;

                a {
                    color: #4d4d4d;
                    cursor: pointer;
                }
            }

            .login-btn {

                button {
                    width: 302px;
                    height: 30px;
                    background: $themeColor;
                    text-align: center;
                    color: #fff;
                    line-height: 30px;
                    font-size: 18px;
                    border-radius: 0px;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    letter-spacing: 8px;

                    &:active {
                        background: red;
                    }
                }
            }

            .rest-login {
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                color: #333;
                text-align: center;

                .qqlogin-box {
                    float: left;
                    width: 175px;
                    border-right: 1px solid #efefef;
                }

                .qqlogin-box, .wxlogin-box {
                    cursor: pointer;
                }

                .icon-qq, .icon-wx {
                    display: inline-block;
                    vertical-align: middle;
                    width: 30px;
                    height: 30px;
                    border-radius: 4px;
                    margin-right: 4px;
                }

                .icon-wx {
                    background: url('../../assets/img/054.png') no-repeat center;
                    background-size: 100%;
                }

                .icon-qq {
                    background: #f4f4f4 url('../../assets/img/qq.png') no-repeat center;
                    background-size: 90%;
                    border: 1px solid #d8d8d8;
                }

                .wxlogin-box {
                    float: left;
                    width: 175px;
                }
            }
        }
    }
}

.login-footer {
    .app-qrcode {
        padding: 30px;
        border-bottom: 1px solid #e0e0e0;

        .qrcode-box {
            text-align: center;
            margin-bottom: 10px;

            img {
                width: 124px;
                height: 124px;
            }
        }

        p {
            text-align: center;
            font-size: 14px;
            color: #a4a4a4;
        }
    }

    .nav-urls {
        padding: 20px 0;
        text-align: center;
        color: #a4a4a4;

        a {
            color: #a4a4a4;
            padding: 0 10px;
        }
    }

    .papers-box {
        text-align: center;
        color: #a4a4a4;
        font-size: 14px;

        span {
            padding: 0 10px;
        }
    }
}

.bg-box {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>
<template>
    <div class="login-view" v-loading="loading">
        <div class="top-bar">
            <div class="container">
                <router-link :to="{name: 'homeIndex'}" class="logo-box" tag="div">
                    <img src="../../assets/img/logo.png" alt=""></router-link>
            </div>
        </div>
        <div class="login-content">
            <div class="bg-box"><img :src="bgURL" alt="" class="bg"></div>
            <div class="container login-container">
                <div class="ad-box"><img src="" alt=""></div>
                <div class="login-card">
                    <div class="card-title">欢迎登录</div>
                    <div class="account-content">
                        <div class="tel-box">
                            <span class="icon-user"></span><input v-model="phone" @keyup.13="login" type="text" placeholder="手机号码"></div>
                        <div class="pw-box">
                            <span class="icon-pw"></span><input v-model="password" @keyup.13="login" type="password" placeholder="密码"></div>
                        <p>
                            <router-link :to="{name: 'modifyPwd'}">忘记密码</router-link>
                        </p>
                        <div class="login-btn">
                            <button @click="login">登录</button>
                        </div>
                    </div>
                    <!-- <div class="rest-login clearfix">
                        <div class="qqlogin-box" @click="qqLogin">
                            <span class="icon-qq"></span>QQ登录
                        </div>
                        <div class="wxlogin-box" @click="wxLogin">
                            <span class="icon-wx"></span>微信登录
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="login-footer">
            <div class="container">
                <div class="app-qrcode">
                    <div class="qrcode-box"><img src="../../assets/img/qrcode.png" alt=""></div>
                    <p>扫描下载艺方天地APP体验更多精彩</p>
                </div>
                <p class="nav-urls">
                    <a>关于我们</a>|
                    <a>联系我们</a>|
                    <a>商家入驻</a>
                </p>
                <p class="papers-box">
                    <span>网络文化经营许可证：粤ICP备17135544号-1</span>
                    <span>Copyright&copy;2017 艺方天地版权所有</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { login } from "../../api/user";
import { loginBG } from "../../api/common";
import { getShopInfo } from "../../api/my";
import { aesEncode } from "../../util/crypto";
import { guid } from "../../util/index";
import { constants } from "../../common/constants";

export default {
  name: "businessLogin",
  data() {
    return {
      phone: "",
      password: "",
      bgURL: "",
      loading: false
    };
  },
  created() {
    this.getBg();
    this.checkLoginSource();
  },
  mounted() {
    this.$store.dispatch("preLogin");
  },
  destroyed() {
    this.$store.dispatch("loginComplete");
  },
  methods: {
    getBg(){
      loginBG()
        .then(res => {
          this.bgURL = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    login() {
      if (!this.phone || !this.password || this.phone.length !== 11) {
        this.$message.error("请先输入正确的手机号码及密码");
        return;
      }
      this.loading = true;
      login({
        source: constants.SSOURCE_PHONE,
        phone: this.phone,
        password: aesEncode(
          this.password,
          constants.PASS_IV,
          constants.PASS_KEY
        ),
        passwordType: "p"
      })
        .then(res => {
          this.$message.success("登录成功");
          this.loading = false;
          this.$store.dispatch("userLogin", res.data);
          if (res.data.type === constants.USER_TYPE_SHOP) {
              getShopInfo().then(shopRes => {
                localStorage.setItem('loginBol', true);
              this.$message.success("登录成功");
              this.$store.dispatch("shopLogin", shopRes.data);
              this.$router.replace({name: 'businessStore'});
            });
          } else {
            this.loading = false;
            this.$message.error("您还不是商家，暂不能登录商家管理！");
          }
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
          this.$message.error(err.resMessage || err.message);
        });
    },
    getQuery() {},
    checkLoginSource() {
      if (!this.$route.query.code || !this.$route.query.state) {
        return;
      }
      let state = sessionStorage.getItem(constants.STATE_KEY);
      if (
        state !== this.$route.query.state ||
        (state.indexOf(constants.SOURCE_WECHAT) !== 0 &&
          state.indexOf(constants.SOURCE_QQ) !== 0)
      ) {
        return;
      }
      let source;
      if (state.indexOf(constants.SOURCE_QQ) > -1) {
        source = constants.SOURCE_QQ;
      } else if (state.indexOf(constants.SOURCE_WECHAT) > -1) {
        source = constants.SOURCE_WECHAT;
      } else {
        return;
      }
      let loginData = {
        source: source,
        code: this.$route.query.code,
        channel: constants.CHANNEL_PC
      };

      this.loading = true;
      login(loginData)
        .then(res => {
          if (res.data.phone) {
            if (auth === constants.SOURCE_QQ) {
              window.location.href = `${location.protocol}//${location.host}/${
                this.$router.resolve({name: 'businessStore'}).href
              }`;
            } else {
              this.$store.dispatch("userLogin", res.data)
              console.log(res.data)
              if (res.data.type === constants.USER_TYPE_SHOP) {
                getShopInfo().then(shopRes => {
                  this.loading = false;
                  this.$message.success("登录成功");
                  this.$store.dispatch("shopLogin", shopRes.data);
                  this.$router.replace({name: 'businessStore'});
                });
              } else {
                this.loading = false;
                this.$message.error("您还不是商家，暂不能登录商家管理！");
              }
            }
          } else {
            this.loading = false;
            this.$store.dispatch("toUserBind", res.data);
            this.$router.replace({ name: "accountBinding" });
          }
        })
        .catch(err => {
          console.dir(err);
          this.loading = false;
          this.$message.error(err.resMessage || err.message);
        });
    },
    loginSucess() {},
    wxLogin() {
      let state = guid().replace(/-/gi, "");
      state = constants.SOURCE_WECHAT + ":" + state;
      sessionStorage.setItem(constants.STATE_KEY, state);
      let wxLoginUrl = constants.WX_AUTH_URI.replace(
        "{APPID}",
        constants.WX_APP_ID
      )
        .replace(
          "{REDIRECT_URI}",
          encodeURIComponent(constants.BUSINESS_WX_REDIRECT_URI)
        )
        .replace("{STATE}",state);
      window.location.href = wxLoginUrl;
    },
    qqLogin() {
      let state = guid().replace(/-/gi, "");
      state = constants.SOURCE_QQ + ":" + state;
      sessionStorage.setItem(constants.STATE_KEY, state);
      let origin = location.origin || location.href.slice(0, location.href.indexOf("#"));
      let qqLoginUrl = constants.QQ_AUTH_URI.replace(
        "{APPID}",
        constants.QQ_APP_ID
      )
        .replace("{REDIRECT_URI}", encodeURI(constants.BUSINESS_QQ_REDIRECT_URI))
        .replace("{STATE}", state);
        localStorage.setItem('loginBol', true);
      window.location.href = qqLoginUrl;
    }
  }
};
</script>
