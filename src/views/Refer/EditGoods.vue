<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .refer-goods-view {
        width: 100%;
        background: #f4f4f4;
        padding-bottom: 30px;
    }

    .goods-head-bar {
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

    .goods-content {
        width: 100%;
        margin-top: 30px;

        .goods-box {
            width: 100%;
            min-height: 374px;
        }
    }

    .goods-head {
        height: 50px;
        padding: 0 20px;
        line-height: 50px;
        color: #333;
        background: #fff;
        font-weight: normal;
        font-size: 18px;
        margin-bottom: 20px;
    }

    .goods-info {
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

    .goods-action {
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
    <div class="refer-goods-view">
        <div class="goods-head-bar">
            <div class="container">
                <h4>修改商品</h4>
            </div>
        </div>
        <div class="goods-content" id="container" v-loading="loading">
            <div class="container">
                <div class="goods-box">
                    <h4 class="goods-head">修改商品</h4>
                    <div class="goods-info">
                        <ul class="info-box">
                            <li class="info-line clearfix">
                                <span class="info-name">商品名称:</span>
                                <div class="info-val">
                                    <input v-model="goods.name" type="text" placeholder="请输入商品名称" maxlength="15">
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">商品描述:</span>
                                <div class="info-val">
                                    <textarea v-model="goods.description" type="text" placeholder="请输入商品描述"></textarea>
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">商品价格:</span>
                                <div class="info-val">
                                    <input v-model="goods.price" type="text" placeholder="请输入商品价格，最低为0.01">
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">商品图片:</span>
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
                            <li class="info-line clearfix">
                                <span class="info-name">邮费:</span>
                                <div class="info-val">
                                    <input v-model="goods.postage" type="text" placeholder="请输入商品邮费">
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">库存:</span>
                                <div class="info-val">
                                    <input v-model="goods.stock" type="text" placeholder="请输入商品库存">
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">分类:</span>
                                <div class="info-val">
                                    <el-radio-group tabindex="1" v-model="goods.category">
                                        <el-radio-button :tabindex="index" v-for="(item,index) in categoryList" :key="item.id" :label="item.id">{{item.name}}</el-radio-button>
                                    </el-radio-group>
                                </div>
                            </li>
                            <li class="info-line clearfix" v-for="(prop,index) in goods.props" :key="index">
                                <span class="info-name"><input v-model="prop.name" type="text" placeholder="请输入名称">:</span>
                                <div class="info-val">
                                    <input type="text" v-model="prop.val" placeholder="请输入描述">
                                    <span class="remove-btn" @click="rmProp(index)">-</span>
                                </div>
                            </li>
                            <li class="info-line add-line">
                                <button @click="addProp">增加属性</button>
                            </li>
                        </ul>
                    </div>
                    <div class="goods-action">
                        <button @click="upload">修改</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { getCategories } from '../../api/terrace'
    import { uploadGoods, getGoodsDetail, editGoods } from '../../api/common'
    export default {
        name: 'EditGoods',
        props: {
            goodsID: {
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
                loading: true,
                imgReady: false,
                goods: {
                    name: '',
                    description: '',
                    price: '',
                    props: [{ name: '', val: '' }],
                    postage: '',
                    category: '',
                    photoKeys: [],
                    stock: ''
                },
                uploadFiles: []
            }
        },
        computed: {
        },
        created() {
            this.initParams();
            getGoodsDetail(this.goodsID).then((res) => {
                this.oldGoods = res.data
                this.goods.name = res.data.name
                this.goods.category = res.data.category
                this.previewImg = res.data.photos.map((img, index) => {
                    return { img: img, isUploader: false, orignIndex: index }
                })
                this.goods.photoKeys = res.data.photoKeys
                this.goods.props = [].concat(res.data.props)
                this.goods.description = res.data.description
                this.goods.price = res.data.price
                this.goods.postage = res.data.postage
                this.keyArray = this.goods.photoKeys
                this.goods.stock = res.data.stock
                this.loading = false
            }).catch((err) => {
                this.loading = false
                console.log(err)
                this.$message.error(err.resMessage || err.message)
            })
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
                    delIndex = this.goods.photoKeys.indexOf(item.img.split('/')[3])
                    this.goods.photoKeys.splice(delIndex, 1)
                }
            },
            upload() {
                if (!/[\\p{Blank}*\\p{Alpha}+\\p{Blank}*\\p{Alpha}\u4e00-\u9fa5*\w*]+/g.test(this.goods.name)) {
                    this.$message.error('商品名称是必须的且长度不超过15个')
                    return
                }
                if (!/[\\p{Blank}*\\p{Alpha}+\\p{Blank}*\\p{Alpha}\u4e00-\u9fa5*\w*]+/g.test(this.goods.description)) {
                    this.$message.error('请输入商品描述')
                    return
                }
                if (!this.goods.price) {
                    this.$message.error('商品价格是必须的')
                    return
                }
                if (!this.goods.category) {
                    this.$message.error('请选择一个分类')
                    return
                }
                if (!/^\d+(\.{0,1}\d+){0,1}$/.test(this.goods.postage)) {
                    this.$message.error('邮费是必须的且邮费不能是负数')
                    return
                }
                if (!this.goods.stock || this.goods.stock < 1) {
                    this.$message.error("库存至少为1");
                    return;
                }
                if (this.previewImg.length < 3 || this.previewImg.length > 6) {
                    this.$message.error('最少3张最多6张图片')
                    return
                }
                if (!this.goods.props.every((item) => { return item.name && item.val })) {
                    this.$message.error('自定义属性的名字与值不能为空')
                    return
                }
                this.loading = true;
                if (this.uploadFiles.length > 0) {
                    this.imgReady = true;
                    this.uploadFiles.forEach((file) => {
                        this.uploader.addFile(file);
                    });
                    this.uploader.start();
                } else {
                    this.confrim()
                }
            },
            confrim() {
                this.goods.photoKeys = this.keyArray;
                editGoods(this.goodsID, this.goods).then((res) => {
                    this.loading = false;
                    this.$message.success('修改成功');
                    this.uploadFiles = []
                    this.$router.go(-1)
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
                }).catch((err) => {
                    console.log(err)
                    this.loading = false;
                    this.$message.error(err.resMessage || err.message)
                })
            },
            previewImgHandle(files) {
                let self = this;
                let len = self.uploader.files.length;
                if (len + this.previewImg.length > 6) {
                    this.$message.error('选择至少3张至多6张图片')
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
                            self.previewImg.push({ img: e.target.result, isUploader: false, orignIndex: n });
                        }
                    })(i);
                    self.uploadFiles.push(file);
                    self.uploader.removeFile(uploadFile.id);
                    reader.readAsDataURL(file);
                }
            },
            addProp() {
                this.goods.props.push({ name: '', val: '' })
            },
            rmProp(index) {
                this.goods.props.splice(index, 1)
            },
            initParams() {
                getCategories().then((res) => {
                    this.categoryList = res.data
                    this.$store.dispatch('tagList', this.categoryList)
                }).catch((err) => {
                    console.log(err)
                    this.$message.error('获取商城分类失败')
                })
            }
        }
    }
</script>
