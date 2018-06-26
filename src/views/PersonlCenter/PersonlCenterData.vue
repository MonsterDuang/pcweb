<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .data-view {
        width: 100%;
        padding-bottom: 30px;
    }

    .data-title {
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: normal;
    }

    .data-content {
        width: 100%;

        .data-tabs {
            background: #ffffff;
            height: 40px;
            padding: 0 20px;
            font-size: 16px;
            line-height: 40px;
            border-bottom: 2px solid #f4f4f4;

            span {
                padding-right: 20px;
                cursor: pointer;
            }
        }

        .data-page {
            background: #fff;
            padding: 30px 20px;
        }

        .base-info {
            border-bottom: 2px solid #f4f4f4;
            padding-bottom: 20px;

            >div {
                min-height: 36px;
                font-size: 16px;
                color: #333;
                margin-bottom: 20px;

                >span {
                    padding-left: 30px;
                    display: inline-block;
                    width: 116px;
                    height: 36px;
                    line-height: 36px;
                    vertical-align: top;
                }

                >input {
                    width: 252px;
                    border: 1px solid #efefef;
                    height: 36px;
                    outline: none;
                    padding: 0 10px;

                    &:focus {
                        border: 1px solid $themeColor;
                    }
                }

                >div {
                    display: inline-block;
                    width: 80px;
                    height: 80px;
                    background: #e0e0e0;
                    vertical-align: middle;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                >label {
                    display: inline-block;
                    height: 36px;
                    line-height: 36px;
                    margin-right: 20px;
                    position: relative;
                    cursor: pointer;

                    span {
                        display: inline-block;
                        vertical-align: text-top;
                        margin-right: 4px;
                        width: 20px;
                        height: 20px;
                        background: url('../../assets/img/072.png') no-repeat center;
                        background-size: 100%;
                    }

                    input {
                        position: absolute;
                        z-index: -1;
                        left: -99999;
                    }

                    .input-radio:checked+.icon-radio {
                        background: url('../../assets/img/073.png') no-repeat center;
                        background-size: 100%;
                    }
                }
            }
        }

        .base-action {
            padding: 30px 0 20px 116px;

            button {
                border: 1px solid $themeColor;
                background: $themeColor;
                color: #fff;
                font-size: 16px;
                outline: none;
                width: 68px;
                height: 30px;
                line-height: 26px;
                text-align: center;
                cursor: pointer;

                &:active {
                    background: red;
                }
            }
        }

        .page-part {
            padding: 0 50px;

            .up-btn {
                padding-bottom: 20px;

                button {
                    border-radius: 4px;
                    background: #f4f4f4;
                    border: 1px solid #e0e0e0;
                    width: 90px;
                    height: 32px;
                    line-height: 28px;
                    color: #333;
                    font-size: 16px;
                    text-align: center;
                    outline: none;
                    cursor: pointer;

                    &:active {
                        background: #e0e0e0;
                    }
                }
            }

            .img-box {
                width: 300px;
                height: 300px;
                background: #d6d6d6;
                margin-bottom: 32px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .part-action {
                border-top: 2px solid #f4f4f4;
                padding: 20px 0;

                button {
                    border: 1px solid $themeColor;
                    background: $themeColor;
                    color: #fff;
                    font-size: 16px;
                    outline: none;
                    width: 68px;
                    height: 30px;
                    line-height: 26px;
                    text-align: center;
                    cursor: pointer;

                    &:active {
                        background: red;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="data-view" id="container" v-loading="loading">
        <div class="container">
            <h4 class="data-title">个人资料</h4>
            <div class="data-content">
                <div class="data-tabs">
                    <span @click="currTab='base'" :class="[currTab==='base'?'theme-font':'']">基本资料</span>
                    <span @click="currTab='part'" :class="[currTab==='part'?'theme-font':'']">头像照片</span>
                </div>
                <div class="data-page">
                    <div class="page-base" v-show="currTab==='base'">
                        <div class="base-info">
                            <div>
                                <span>当前头像：</span>
                                <div><img :src="user.avatar"></div>
                            </div>
                            <div>
                                <span>昵称：</span><input v-model="user.nickname" type="text"></div>
                            <div>
                                <span>性别：</span>
                                <label><input class="input-radio" v-model="user.gender" type="radio" name="sex" value="M">
                                    <span class="icon-radio"></span>男
                                </label>
                                <label><input class="input-radio" v-model="user.gender" type="radio" name="sex" value="F">
                                    <span class="icon-radio"></span>女
                                </label>
                            </div>
                            <!-- <div>
                                <span>手机：</span><input disabled type="tel" :value="user.phone"></div>
                           <div><span></span></div> -->
                        </div>
                        <div class="base-action">
                            <button @click="save">保存</button>
                        </div>
                    </div>
                    <div class="page-part" v-show="currTab==='part'">
                        <div class="up-btn">
                            <button id="uploadImg">本地上传</button>
                        </div>
                        <div class="img-box"><img :src="previewImg" alt=""></div>
                        <div class="part-action">
                            <button @click="save">保存</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { changeUserInfo } from '../../api/user'
    export default {
        name: 'PersonlCenterData',
        data() {
            return {
                currTab: 'base',
                user: {},
                uploader: null,
                previewImg: '',
                keyArray: [],
                loading: false
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo
            }
        },
        mounted() {
            this.user = this.userInfo
            let self = this;
            this.$nextTick(() => {
                this.uploader = Qiniu.uploader({
                    runtimes: "html5,flash,html4",
                    browse_button: "uploadImg",
                    get_new_uptoken: false,
                    container: "container",
                    max_file_size: "25mb",
                    multi_selection: false,
                    max_retries: 3,
                    dragdrop: true,
                    drop_element: "container",
                    chunk_size: "25mb",
                    auto_start: false,
                    uptoken: "MDoA3HDqtRSVEd_tq8bJ7pPj9Emm5AFEuWygwLdw:aj-rpYO3EW36K5URfZ5BWFuL0WQ=:eyJzY29wZSI6InlpdGFvIiwiZGVhZGxpbmUiOjE1NDQ1NzI4MDAwMDB9",
                    domain: "http://img.aworld.cn",
                    filters: {
                        max_file_size: "25mb",
                        prevent_duplicates: true,
                        mime_types: [
                            { title: "Image files", extensions: "jpg,gif,png,jpeg" }
                        ]
                    },
                    unique_names: true,
                    save_key: false,
                    init: {
                        FilesAdded: function (up, files) {
                            if (files.length > 0) {
                                self.imgReady = true
                                self.previewImg = ''
                                self.previewImgHandle(files)
                            }
                        },
                        BeforeUpload: function (up, file) {
                            console.log(up, file)
                        },
                        UploadProgress: function (up, file) {
                        },
                        FileUploaded: function (up, file, info) {
                            // 多文件上传，每次上传一个文件，push图片key到临时数组
                            var res = JSON.parse(info);
                            self.keyArray.push(res.key);
                        },
                        Error: function (up, err, errTip) {
                            //上传出错时，处理相关的事情
                            self.$message.error(errTip || '上传图片出错')
                        },
                        UploadComplete: self.confrim
                    }
                });
            })
        },
        methods: {
            save() {
                this.loading = true
                if (this.previewImg) {
                    this.uploader.start()
                } else {
                    this.confrim()
                }
            },
            changeUser(changeUser) {
                changeUserInfo(changeUser).then((res) => {
                    this.$message.success('修改成功')
                    this.$store.dispatch('userLogin', res.data)
                    this.user = res.data
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            confrim() {
                let changeUser = {
                    gender: this.user.gender,
                    nickname: this.user.nickname
                }
                if (this.keyArray.length > 0) {
                    changeUser.avatarKey = this.keyArray[0]
                }
                this.changeUser(changeUser)
            },
            previewImgHandle(files) {
                let self = this;
                let file = files[0].getNative();
                let imageType = /^image\//;
                if (!imageType.test(file.type)) {
                    return;
                }
                var reader = new FileReader();
                reader.onload = function (e) {
                    self.previewImg = e.target.result;
                };
                reader.readAsDataURL(file);

            }
        }
    }
</script>

