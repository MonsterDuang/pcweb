
<style lang="stylus" scoped>

    @import '../../stylus/variables.styl';

    .drawback-view {
        width: 100%;
        position: relative;
    }

    .back-box {
        position: absolute;
        cursor: pointer;
        top: -30px;
        left: 0;
        font-size: 14px;

        a {
            color: $shopBgColor;
        }
    }

    .drawback-info {
        background: #fff;
        padding: 24px 35px;

        >div {
            min-height: 36px;
            width: 100%;
            margin-bottom: 24px;

            >span {
                float: left;
                vertical-align: middle;
                width: 90px;
                line-height: 36px;
                font-size: 16px;
                color: #333;
            }

            >div {
                float: left;
            }
        }

        .drawback-type {
            .type-select {
                label {
                    position: relative;
                    display: inline-block;
                    outline: none;
                    margin-right: 20px;
                }

                input {
                    opacity: 0;
                    outline: none;
                    position: absolute;
                    z-index: -1;
                    left: -999px;
                }

                .slect-radio:checked + .inner {
                    border: 1px solid $themeColor;

                    &:after {
                        content: '\E611';
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        z-index: 11;
                        font-family: element-icons !important;
                        speak: none;
                        font-style: normal;
                        color: #fff;
                        line-height: 10px;
                        font-size: 8px;
                    }

                    &:before {
                        content: ' ';
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        z-index: 10;
                        border: 10px solid $themeColor;
                        border-top-color: transparent;
                        border-left-color: transparent;
                    }
                }

                span {
                    color: #333;
                    font-size: 14px;
                    display: block;
                    border: 1px solid #e0e0e0;
                    text-align: center;
                    position: relative;
                    height: 36px;
                    width: 114px;
                    cursor: pointer;
                    line-height: 34px;

                    i {
                        color: #a5a5a5;
                        font-style: normal;
                    }
                }
            }
        }

        .drawback-cause {
            .cause-box {
                .select-cause {
                    width: 178px;
                    height: 38px;

                    input {
                        border-radius: 0px;
                    }
                }

                .select-input {
                    border-radius: 0px;
                }
            }
        }

        .drawback-money {
            .money-input input {
                width: 178px;
                padding: 0 14px;
                line-height: 34px;
                height: 36px;
                border: 1px solid #e0e0e0;
                font-size: 14px;
                outline: none;

                &:focus {
                    border: 1px solid $themeColor;
                }
            }
        }

        .drawback-state {
            height: 140px;

            textarea {
                width: 514px;
                height: 114px;
                border: 1px solid #e0e0e0;
                resize: none;
                outline: none;
                padding: 10px 16px;
            }

            p {
                text-align: right;
                color: #a5a5a5;
            }
        }

        .drawback-upload {
            height: 160px;

            .upload-box {
                width: 90%;

                >div {
                    float: left;
                }

                div.img-box {
                    width: 148px;
                    height: 148px;
                    margin-right: 10px;
                    position: relative;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                    .remove-img {
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        top: -10px;
                        right: -10px;
                        background: #fff;
                        border-radius: 50%;
                        color: $themeColor;
                        font-size: 20px;
                        cursor: pointer;
                    }
                }
            }

            p {
                padding-left: 90px;
                color: #a5a5a5;
                margin-top: 10px;
            }

            .upload-icon {
                font-size: 60px;
                color: #fff;
                font-weight: bold;
                line-height: 148px;
            }
        }
    }

    .drawback-action {
        text-align: right;
        padding: 35px 0;

        button {
            width: 150px;
            height: 40px;
            border: 1px solid $themeColor;
            background: $themeColor;
            border-radius: 4px;
            text-align: center;
            line-height: 38px;
            color: #fff;
            font-size: 16px;
            outline: none;
            cursor: pointer;

            &:active {
                background: red;
            }
        }
    }
</style>
<template>
    <div class="drawback-view" id="container" v-loading="loading">
        <div class="back-box">
            <a @click="toBack">
                <span class="el-icon-arrow-left"></span>返回上一级</a>
        </div>
        <div class="drawback-info">
            <div class="drawback-type">
                <span>退款类型:</span>
                <div class="type-select">
                    <label><input name="type" v-model="type" value="退款" class="slect-radio" type="radio">
                        <span class="inner">退款
                            <i>(无需退货)</i>
                        </span>
                    </label>
                    <label><input name="type" v-model="type" value="退货" class="slect-radio" type="radio">
                        <span class="inner">退货</span>
                    </label>
                </div>
            </div>
            <div class="drawback-cause">
                <span>退款原因:</span>
                <div class="cause-box">
                    <el-select popper-class="select-input" class="select-cause" v-model="cause" placeholder="请选择退款原因">
                        <el-option v-for="cause in causeList" :key="cause" :label="cause" :value="cause">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="drawback-money">
                <span>退款金额:</span>
                <div class="money-input">
                    <input type="text" v-model.number="amount" placeholder="请输入退款金额(元)">
                </div>
            </div>
            <div class="drawback-state">
                <span>退款说明:</span>
                <div>
                    <textarea v-model="description"></textarea>
                    <p class="prompt">10-500字</p>
                </div>
            </div>
            <div class="drawback-upload">
                <span>上传凭条:</span>
                <div class="upload-box clearfix">
                    <div class="img-box" v-for="(img,index) in previewImg" :key="index">
                        <img :src="img" />
                        <span @click="removeImg(index)" class="remove-img el-icon-circle-close-outline"></span>
                    </div>
                    <div v-show="previewImg.length<3" tabindex="0" id="uploadImg" class="el-upload el-upload--picture-card">
                        <i class="upload-icon el-icon-plus"></i>
                    </div>
                </div>
                <p>最多可上传3张图片，每张图片大小不超过1M，支持bmp,gif,jpg,png,jpeg格式文件</p>

            </div>
        </div>
        <div class="drawback-action">
            <button @click="submit">提交申请</button>
        </div>
    </div>
</template>
<script>
    import { orderRefund, getOrderInfo } from '../../api/my'
    export default {
        name: 'OrderDrawBack',
        props: {
            orderID: {
                required: true
            }
        },
        data() {
            return {
                causeList: ['拍错', '多拍', '不想要', '不喜欢'],
                cause: '拍错',
                uploader: null,
                previewImg: [],
                keyArray: [],
                imgReady: false,
                amount: '',
                description: '',
                type: '退款',
                loading: true,
                uploadFiles: [],
                order: {}
            }
        },
        created() {
            getOrderInfo(this.orderID).then((res) => {
                this.order = res.data
                this.amount = this.order.amount
                this.loading = false
            }).catch((err) => {
                console.log(err)
                this.loading = false
                this.$message.error(err.resMessage || err.message)
            })
        },
        mounted() {
            let self = this;
            this.$nextTick(() => {
                this.uploader = Qiniu.uploader({
                    runtimes: "html5,flash,html4",
                    browse_button: "uploadImg",
                    get_new_uptoken: false,
                    container: "container",
                    max_file_size: "25mb",
                    multi_selection: true,
                    max_retries: 3,
                    dragdrop: true,
                    drop_element: "container",
                    chunk_size: "25mb",
                    auto_start: false,
                    uptoken: "MDoA3HDqtRSVEd_tq8bJ7pPj9Emm5AFEuWygwLdw:aj-rpYO3EW36K5URfZ5BWFuL0WQ=:eyJzY29wZSI6InlpdGFvIiwiZGVhZGxpbmUiOjE1NDQ1NzI4MDAwMDB9",
                    domain: "http://img.aworld.cn/",
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
                            if (!self.imgReady) {
                                self.previewImgHandle(files)
                            }
                        },
                        BeforeUpload: function (up, file) {
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
            removeImg(index) {
                this.previewImg.splice(index, 1)
                this.uploadFiles.splice(index, 1)
            },
            toBack() {
                this.$router.go(-1)
            },
            submit() {
                if (!this.amount) {
                    this.$message.error('请输入退款金额')
                    return
                }
                if (this.amount > this.order.amount) {
                    this.$message.error('退款金额不可大于付款金额')
                    return
                }
                if (!this.cause) {
                    this.$message.error('请选择退款原因')
                    return
                }
                if (!this.description) {
                    this.$message.error('请输入退款说明')
                    return
                }
                if (this.uploadFiles.length <= 0 || this.uploadFiles.length > 3) {
                    this.$message.error('凭条必须上传照片，至多3张')
                    return
                }
                this.loading = true
                this.imgReady = true;
                this.uploadFiles.forEach((file) => {
                    this.uploader.addFile(file);
                });
                this.uploader.start()
            },
            confrim() {
                orderRefund(this.orderID, { type: this.type, reason: this.cause, amount: this.amount, description: this.description, voucherKeys: this.keyArray }).then((res) => {
                    this.$message.success(res.data.message)
                    this.$router.replace({ name: 'myOrder' })
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    this.$message.error(err.resMessage || err.message)
                })
            },
            previewImgHandle(files) {
                let self = this;
                let len = self.uploader.files.length;
                if (len > 3) {
                    this.$message.error('最多只能选择3张图片')
                    let l = this.uploader.files.length - 1
                    for (let i = l; i >= 0; i--) {
                        let file = this.uploader.files[i]
                        this.uploader.removeFile(file.id)
                    }
                    return
                }
                self.previewImg = []
                self.uploadFiles = []
                for (var i = 0; i < len; i++) {
                    var uploadFile = files[i];
                    var file = files[i].getNative();
                    var imageType = /^image\//;
                    if (!imageType.test(file.type)) {
                        continue;
                    }
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        self.previewImg.push(e.target.result);
                    };
                    self.uploadFiles.push(file);
                    self.uploader.removeFile(uploadFile.id);
                    reader.readAsDataURL(file);
                }
            }
        }
    }
</script>
