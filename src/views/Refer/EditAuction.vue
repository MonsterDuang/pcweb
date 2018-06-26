<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .refer-auction-view {
        width: 100%;
        background: #f4f4f4;
        padding-bottom: 30px;
    }

    .auction-head-bar {
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

    .auction-content {
        width: 100%;
        margin-top: 30px;

        .auction-box {
            width: 100%;
            min-height: 374px;
        }
    }

    .auction-head {
        height: 50px;
        padding: 0 20px;
        line-height: 50px;
        color: #333;
        background: #fff;
        font-weight: normal;
        font-size: 18px;
        margin-bottom: 20px;
    }

    .auction-info {
        .info-line {
            margin-bottom: 26px;

            .info-name {
                float: left;
                width: 100px;
                line-height: 36px;
                font-size: 14px;
                text-align: right;
                margin-right: 20px;

                input {
                    width: 90%;
                    height: 36px;
                    border: 1px solid #e0e0e0;
                    padding-left: 6px;
                    outline: none;
                }
            }

            .info-val {
                float: left;

                input[type='text'] {
                    height: 36px;
                    border: 1px solid #e0e0e0;
                    background: #fff;
                    font-size: 14px;
                    padding: 10px;
                    outline: none;
                    width: 254px;
                }

                textarea {
                    width: 544px;
                    height: 108px;
                    background: #fff;
                    padding: 10px 10px;
                    font-size: 14px;
                    resize: none;
                    outline: none;
                    border: 1px solid #e0e0e0;
                }
            }

            .img-upload {
                input[type='file'] {
                    display: none;
                }

                button {
                    display: inline-block;
                    cursor: pointer;
                    border: 1px solid $themeColor;
                    border-radius: 4px;
                    background: transparent;
                    color: $themeColor;
                    font-size: 14px;
                    height: 32px;
                    line-height: 30px;
                    width: 146px;
                    text-align: center;
                    outline: none;
                    margin-bottom: 4px;
                }

                .img-preivew {
                    p {
                        margin: 10px 0;
                    }

                    img {
                        width: 100px;
                        height: 100px;
                        border: 1px solid #e0e0e0;
                    }

                    .img-box {
                        float: left;
                        width: 100px;
                        height: 100px;
                        border: 1px solid #e0e0e0;
                        margin-right: 20px;
                        position: relative;

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
            }
        }

        .add-line {
            padding-left: 120px;

            button {
                cursor: pointer;
                border: 1px solid $themeColor;
                border-radius: 4px;
                background: transparent;
                color: $themeColor;
                font-size: 14px;
                height: 36px;
                line-height: 34px;
                width: 76px;
                text-align: center;
                outline: none;
            }
        }

        .remove-btn {
            margin: 0 10px;
            border: 1px solid $themeColor;
            background: $themeColor;
            border-radius: 50%;
            color: #fff;
            display: inline-block;
            width: 26px;
            height: 26px;
            font-size: 20px;
            text-align: center;
            line-height: 20px;
            cursor: pointer;
        }
    }

    .auction-action {
        padding-left: 120px;
        margin-bottom: 0;

        button {
            cursor: pointer;
            background: $themeColor;
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
</style>
<template>
    <div class="refer-auction-view">
        <div class="auction-head-bar">
            <div class="container">
                <h4>编辑竞拍</h4>
            </div>
        </div>
        <div class="auction-content" id="container" v-loading="loading">
            <div class="container">
                <div class="auction-box">
                    <h4 class="auction-head">编辑竞拍</h4>
                    <div class="auction-info">
                        <ul class="info-box">
                            <li class="info-line clearfix">
                                <span class="info-name">竞拍标题:</span>
                                <div class="info-val">
                                    <input v-model="auction.title" type="text" placeholder="请输入竞拍标题" maxlength="15">
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">竞拍描述:</span>
                                <div class="info-val">
                                    <textarea v-model="auction.description" type="text" placeholder="请输入商品描述"></textarea>
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">底价:</span>
                                <div class="info-val">
                                    <input v-model.number="auction.floorPrice" type="text" placeholder="请输入底价">
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">加价幅度:</span>
                                <div class="info-val">
                                    <input v-model.number="auction.raisePriceRange" type="text" placeholder="请输入加价幅度，最底为1">
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">保证金:</span>
                                <div class="info-val">
                                    <input v-model.number="auction.marginMoney" type="text" placeholder="请输入保证金，最底为0，不可大于底价的50%">
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">邮费:</span>
                                <div class="info-val">
                                    <input v-model.number="auction.postage" type="text" placeholder="请输入邮费">
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">起止时间:</span>
                                <div class="info-val">
                                    <el-date-picker v-model="startEndAt" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">拍品图片:</span>
                                <div class="info-val img-upload">
                                    <div>
                                        <button id="uploadImg">选择图片</button>
                                    </div>
                                    <div class="img-preivew">
                                        <p>图片预览</p>
                                        <div class="clearfix">
                                            <div class="img-box" v-for="(item,index) in previewImg" :key="index">
                                                <img :src="item.img" alt="">
                                                <span @click="removeImg(item,index)" class="remove-img el-icon-circle-close-outline"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="auction-action">
                        <button @click="upload">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { editAuction, getAuctionDetail } from '../../api/auction'
    export default {
        name: 'EditAuction',
        props: {
            auctionID: {
                required: true
            }
        },
        data() {
            return {
                category: '',
                categoryList: [],
                uploader: null,
                keyArray: [],
                previewImg: [],
                loading: false,
                imgReady: false,
                startEndAt: [],
                auction: {
                    title: "",
                    floorPrice: "",
                    marginMoney: "",
                    raisePriceRange: "",
                    postage: "",
                    auctionStartAt: "",
                    auctionEndAt: "",
                    description: "",
                    photoKeys: []
                },
                uploadFiles: [],
                oldAuction: {}
            }
        },
        computed: {
        },
        created() {
            let self = this;
            this.loading = true
            getAuctionDetail(this.auctionID).then((res) => {
                this.oldAuction = res.data
                this.auction = {
                    title: res.data.title,
                    floorPrice: res.data.floorPrice,
                    marginMoney: res.data.marginMoney,
                    raisePriceRange: res.data.raisePriceRange,
                    postage: res.data.postage,
                    auctionStartAt: res.data.auctionStartAt,
                    auctionEndAt: res.data.auctionEndAt,
                    description: res.data.description,
                    photoKeys: res.data.photoKeys
                }
                this.keyArray = res.data.photoKeys
                this.startEndAt = [res.data.auctionStartAt, res.data.auctionEndAt]
                this.previewImg = res.data.photos.map((img, index) => {
                    return { img: img, isUploader: false, orignIndex: index }
                })
                this.loading = false
            }).catch((err) => {
                console.log(err)
                this.loading = false
                this.$message.error(err.resMessage || err.message)
            })
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
            removeImg(item, index) {
                this.previewImg.splice(index, 1)
                let delIndex
                if (item.isUploader) {
                    delIndex = this.uploadFiles.indexOf(item.img.split('/')[3])
                    this.uploadFiles.splice(delIndex, 1)
                } else {
                    delIndex = this.auction.photoKeys.indexOf(item.img.split('/')[3])
                    this.auction.photoKeys.splice(delIndex, 1)
                }
            },
            upload() {
                if (!/[\\p{Blank}*\\p{Alpha}+\\p{Blank}*\\p{Alpha}\u4e00-\u9fa5*\w*]+/g.test(this.auction.title)) {
                    this.$message.error('请输入竞拍标题且长度不超过15个')
                    return
                }
                if (!/[\\p{Blank}*\\p{Alpha}+\\p{Blank}*\\p{Alpha}\u4e00-\u9fa5*\w*]+/g.test(this.auction.description)) {
                    this.$message.error('请输入商品描述')
                    return
                }
                if (!/^\S+$/g.test(this.auction.floorPrice) || !/^([0-9][0-9]*)$/.test(this.auction.floorPrice)) {
                    this.$message.error('请输入竞拍底价')
                    return
                }
                if (!this.auction.raisePriceRange || this.auction.raisePriceRange < 1) {
                    this.$message.error('请输入加价幅度，且金额必须大于1')
                    return
                }
                if (!/^\d+(\.{0,1}\d+){0,1}$/.test(this.auction.marginMoney)) {
                    this.$message.error('请输入保证金，且金额必须大于等于0')
                    return
                }
                if (!/^\d+(\.{0,1}\d+){0,1}$/.test(this.auction.postage)) {
                    this.$message.error('邮费是必须的且邮费不能是负数')
                    return
                }
                if (this.startEndAt.length !== 2) {
                    this.$message.error('请选择竞拍开始与结束时间')
                    return
                }
                if (this.previewImg.length < 1) {
                    this.$message.error('请至少选择1张图片')
                    return
                }
                this.loading = true;
                this.imgReady = true;
                this.uploadFiles.forEach((file) => {
                    this.uploader.addFile(file);
                });
                this.uploader.start();
            },
            confrim() {
                this.auction.photoKeys = this.keyArray;
                this.auction.auctionStartAt = this.startEndAt[0]
                this.auction.auctionEndAt = this.startEndAt[1]
                editAuction(this.auctionID, this.auction).then((res) => {
                    this.loading = false;
                    this.$message.success(res.data.message)
                    this.clearAuction()
                    this.$router.go(-1)
                }).catch((err) => {
                    console.log(err)
                    this.loading = false;
                    this.$message.error(err.resMessage || err.message)
                })
            },
            clearAuction() {
                this.uploadFiles = []
                this.previewImg = this.previewImg.map((item) => {
                    item.isUploader = false
                    return item
                })
                this.imgReady = false
                let l = this.uploader.files.length - 1
                for (let i = l; i >= 0; i--) {
                    let file = this.uploader.files[i]
                    this.uploader.removeFile(file.id)
                }
            },
            previewImgHandle(files) {
                let self = this;
                let len = self.uploader.files.length;
                if (len + this.previewImg.length > 6) {
                    this.$message.error('最多只能选择6张图片')
                    let l = this.uploader.files.length - 1
                    for (let i = l; i >= 0; i--) {
                        let file = this.uploader.files[i]
                        this.uploader.removeFile(file.id)
                    }
                    return
                }
                for (var i = 0; i < len; i++) {
                    var uploadFile = files[i];
                    var file = files[i].getNative();
                    var imageType = /^image\//;
                    if (!imageType.test(file.type)) {
                        continue;
                    }
                    var reader = new FileReader();
                    reader.onload = (function (n) {
                        return function (e) {
                            self.previewImg.push({ img: e.target.result, isUploader: true, orignIndex: n });
                        }
                    })(i)
                    self.uploadFiles.push(file);
                    self.uploader.removeFile(uploadFile.id);
                    reader.readAsDataURL(file);
                }
            }
        }
    }
</script>
