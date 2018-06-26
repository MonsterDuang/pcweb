<style lang="stylus" scoped>
    // @import '../../stylus/variables.styl';

    .shop-setting-view {
        width: 100%;
        background: #f4f4f4;
        padding-bottom: 30px;
    }
    .setting-content {
        width: 100%;

        .setting-box {
            width: 100%;
            background: #fff;
            min-height: 374px;
        }
    }

    .base-info {
        padding: 20px;

        >div {
            min-height: 36px;
            font-size: 16px;
            color: #333;
            margin-bottom: 20px;

            >span {
                padding-left: 30px;
                display: inline-block;
                height: 36px;
                line-height: 36px;
                vertical-align: top;
                margin-bottom 10px
            }

            >div {
                width: 80px;
                height: 80px;
                background: #e0e0e0;
                vertical-align: middle;
                margin-left 30px
                &.cover-box {
                    width: 300px;
                    height: 200px;
                }

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            textarea {
                width: 544px;
                height: 108px;
                background: #fff;
                padding: 10px;
                font-size: 14px;
                resize: none;
                outline: none;
                border: 1px solid #e0e0e0;
            }
        }

        button {
            cursor: pointer;
            background: #fc3c4e;
            border-radius: 4px;
            border: none;
            color: #fff;
            font-size: 14px;
            height: 36px;
            line-height: 36px;
            width: 76px;
            text-align: center;
            outline: none;
        }
    }

    #logoBtn {
        cursor: pointer;
    }

    #coverBtn {
        cursor: pointer;
    }
</style>
<template>
    <div class="shop-setting-view" id="container" v-loading="loading">
        <div class="setting-content">
            <div class="container" style="width: 100%;">
                <div class="setting-box">
                    <div class="base-info">
                        <div>
                            <span>LOGO：<em style="color: #666; font-size:14px">(建议上传图片尺寸 80 * 80 或者宽高比为 1 ： 1 的图片)</em></span>
                            <div id="logoBtn"><img v-show="shop.logo" :src="shop.logo"><img v-show="!shop.logo" src="../../assets/img/shopLogo.png" alt=""></div>
                        </div>
                        <div>
                            <span>背景图：<em style="color: #666; font-size:14px">(建议上传图片尺寸 750 * 350 或者宽高比为 2 ： 1 的图片)</em></span>
                            <div id="coverBtn" class="cover-box big-box"><img v-show="shop.cover" :src="shop.cover "><img v-show=" !shop.cover" src="../../assets/img/shopBg.png" alt=""></div>
                        </div>
                        <div>
                            <span>拍卖封面：<em style="color: #666; font-size:14px">(建议上传图片尺寸 750 * 350 或者宽高比为 2 ： 1 的图片)</em></span>
                            <div id="auctionCoverBtn" class="cover-box big-box"><img v-show="shop.auctionCover" :src="shop.auctionCover"><img v-show="!shop.auctionCover" src="../../assets/img/shopBg.png" alt=""></div>
                        </div>
                        <div>
                            <span>简介：</span>
                            <textarea cols="30" rows="10" placeholder="店铺简介" v-model="shop.intro"></textarea>
                        </div>
                        <div>
                            <span></span>
                            <button @click="save">保存</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { editShopInfo } from '../../api/my'
    export default {
        name: 'settingShop',
        data() {
            return {
                uploader: null,
                auctionUploader: null,
                coverUploader: null,
                logoImgReady: false,
                coverImgReady: false,
                auctionImgReady: false,
                logoKey: '',
                coverKey: '',
                auctionCoverKey: '',
                loading: false,
                shop: {},
                readyKeys: { logoImgReady: false, coverImgReady: false, auctionCoverReady: false },
                demo: null
            }
        },
        computed: {
            shopInfo: {
                get() {
                    this.shop = this.$store.state.user.shop;
                    return this.$store.state.user.shop
                }
            }
        },
        watch: {
            'shopInfo'() {
                this.shop = Object.assign({}, this.shopInfo)
            }
        },
        mounted() {
            var self = this
            this.$nextTick(() => {
                self.uploader = Qiniu.uploader({
                    runtimes: "html5,flash,html4",
                    browse_button: "logoBtn",
                    get_new_uptoken: false,
                    container: "container",
                    max_file_size: "25mb",
                    multi_selection: false,
                    max_retries: 3,
                    dragdrop: true,
                    drop_element: "container",
                    chunk_size: "25mb",
                    auto_start: false,
                    unique_names: false,
                    save_key: false,
                    uptoken: "MDoA3HDqtRSVEd_tq8bJ7pPj9Emm5AFEuWygwLdw:aj-rpYO3EW36K5URfZ5BWFuL0WQ=:eyJzY29wZSI6InlpdGFvIiwiZGVhZGxpbmUiOjE1NDQ1NzI4MDAwMDB9",
                    domain: "http://img.aworld.cn/",
                    config: {
                        region: 'Qiniu.region.z2'
                    },
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
                            up.files.splice(0)
                            up.files.push(files[0])
                            if (files.length > 0) {
                                self.readyKeys.logoImgReady = false
                            }
                            self.previewImgHandle(files, 'logoImg', 'logo')
                        },
                        BeforeUpload: function (up, file) {
                        },
                        UploadProgress: function (up, file) {
                        },
                        FileUploaded: function (up, file, info) {
                            self.logoKey = ''
                            var res = JSON.parse(info);
                            self.logoKey = res.key;
                        },
                        Error: function (up, err, errTip) {
                            //上传出错时，处理相关的事情
                            if (errTip == 'Duplicate file error.undefined') {
                                self.$message.error('请勿选择同一张图片')
                                return
                            }
                            self.$message.error(errTip || '上传图片出错')
                        },
                        UploadComplete: function () {
                            self.readyKeys.logoImgReady = true
                            self.confrim()
                        }
                    }
                });
                self.coverUploader = Qiniu.uploader({
                    runtimes: "html5,flash,html4",
                    browse_button: "coverBtn",
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
                    config: {
                        region: 'Qiniu.region.z2'
                    },
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
                            up.files.splice(0)
                            up.files.push(files[0])
                            if (files.length > 0) {
                                self.readyKeys.coverImgReady = false
                            }
                            self.previewImgHandle(files, 'coverImg', 'cover')
                        },
                        BeforeUpload: function (up, file) {
                        },
                        UploadProgress: function (up, file) {
                        },
                        FileUploaded: function (up, file, info) {
                            self.coverKey = ''
                            var res = JSON.parse(info);
                            self.coverKey = res.key;
                        },
                        Error: function (up, err, errTip) {
                            //上传出错时，处理相关的事情
                            if (errTip == 'Duplicate file error.undefined') {
                                self.$message.error('请勿选择同一张图片')
                                return
                            }
                            self.$message.error(errTip || '上传图片出错')
                        },
                        UploadComplete: function () {
                            self.readyKeys.coverImgReady = true
                            self.confrim()
                        }
                    }
                });
                self.auctionUploader = Qiniu.uploader({
                    runtimes: "html5,flash,html4",
                    browse_button: "auctionCoverBtn",
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
                    config: {
                        region: 'Qiniu.region.z2'
                    },
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
                            up.files.splice(0)
                            up.files.push(files[0])
                            if (files.length > 0) {
                                self.readyKeys.auctionCoverReady = false
                            }
                            self.previewImgHandle(files, 'auctionCoverImg', 'auctionCover')
                        },
                        BeforeUpload: function (up, file) {
                        },
                        UploadProgress: function (up, file) {
                        },
                        FileUploaded: function (up, file, info) {
                            self.auctionCoverKey = ''
                            var res = JSON.parse(info);
                            self.auctionCoverKey = res.key;
                        },
                        Error: function (up, err, errTip) {
                            //上传出错时，处理相关的事情
                            if (errTip == 'Duplicate file error.undefined') {
                                self.$message.error('请勿选择同一张图片')
                                return
                            }
                            self.$message.error(errTip || '上传图片出错')
                        },
                        UploadComplete: function () {
                            self.readyKeys.auctionCoverReady = true
                            self.confrim()
                        }
                    }
                });
            })
        },
        methods: {
            previewImgHandle(files, key, imgKey) {
                let self = this;
                let file = files[0].getNative();
                let imageType = /^image\//;
                if (!imageType.test(file.type)) {
                    return;
                }
                var reader = new FileReader();
                reader.onload = function (e) {
                    self.shop[imgKey] = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            save() {
                this.loading = true
                this.uploader.start()
                this.coverUploader.start()
                this.auctionUploader.start()
            },
            confrim() {
                if (this.readyKeys.logoImgReady && this.readyKeys.coverImgReady && this.readyKeys.auctionCoverReady) {
                    editShopInfo({ logoKey: this.logoKey || this.shop.logoKey, coverKey: this.coverKey || this.shop.coverKey, auctionCoverKey: this.auctionCoverKey || this.shop.auctionCoverKey, intro: this.shop.intro }).then((res) => {
                        this.loading = false
                        this.$message.success(res.data.message)
                    }).catch((err) => {
                        console.log(err)
                        this.$message.error(err.resMessage || err.message)
                        console.log(err.resMessage || err.message, confrim)
                    })
                }
            }
        }
    }
</script>
