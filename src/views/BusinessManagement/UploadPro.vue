<style lang="stylus" scoped>
@import '../../stylus/variables.styl';

.refer-goods-view {
    width: 100%;
    background: #f4f4f4;
    padding-bottom: 30px;
}


.goods-content {
    width: 100%;
    background: #fff;
    padding: 20px 0px 32px;
    .goods-box {
        width: 100%;
        min-height: 374px;
    }
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
        <div class="goods-content" id="container" v-loading="loading">
            <div class="container">
                <div class="goods-box">
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
                                    <input v-model.number="goods.price" type="text" placeholder="请输入商品价格，最低为0.01">
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
                                                <img :src="item" alt="">
                                                <span @click="removeImg(index)" class="remove-img el-icon-circle-close-outline"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">邮费:</span>
                                <div class="info-val">
                                    <input v-model.number="goods.postage" type="text" placeholder="请输入商品邮费">
                                </div>
                            </li>
                            <li class="info-line clearfix">
                                <span class="info-name">库存:</span>
                                <div class="info-val">
                                    <input v-model.number="goods.stock" type="text" placeholder="请输入商品库存">
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
                        <button @click="uploadImg">上传</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getCategories } from "../../api/terrace";
import { uploadGoods } from "../../api/common";
export default {
  name: "uploadPro",
  data() {
    return {
      category: "",
      categoryList: [],
      uploader: null,
      keyArray: [],
      previewImg: [],
      loading: false,
      imgReady: false,
      goods: {
        name: "",
        description: "",
        price: "",
        props: [],
        postage: 0,
        category: "",
        photoKeys: [],
        stock: ""
      },
      uploadFiles: []
    };
  },
  computed: {},
  created() {
    this.initParams();
    let self = this;
    this.$nextTick(() => {
      self.uploader = Qiniu.uploader({
        runtimes: "html5,flash,html4",
        browse_button: "uploadImg",
        get_new_uptoken: false,
        container: "container",
        max_file_size: "25mb",
        multi_selection: true,
        max_retries: 3,
        dragdrop: true,
        drop_element: "container",
        chunk_size: "0mb",
        auto_start: false,
        uptoken:
          "MDoA3HDqtRSVEd_tq8bJ7pPj9Emm5AFEuWygwLdw:aj-rpYO3EW36K5URfZ5BWFuL0WQ=:eyJzY29wZSI6InlpdGFvIiwiZGVhZGxpbmUiOjE1NDQ1NzI4MDAwMDB9",
        domain: "http://img.aworld.cn",
        config: {
            region: 'Qiniu.region.z2'
        },
        filters: {
          max_file_size: "25mb",
          prevent_duplicates: true,
          mime_types: [{ title: "Image files", extensions: "jpg,gif,png,jpeg" }]
        },
        unique_names: true,
        save_key: false,
        init: {
          FilesAdded: function(up, files) {
            if (!self.imgReady) {
              self.previewImgHandle(files);
            }
          },
          BeforeUpload: function(up, file) {},
          UploadProgress: function(up, file) {},
          FileUploaded: function(up, file, info) {
            // 多文件上传，每次上传一个文件，push图片key到临时数组
            var res = JSON.parse(info);
            self.keyArray.push(res.key);
          },
          Error: function(up, err, errTip) {
            //上传出错时，处理相关的事情
            self.$message.error(errTip || "上传图片出错");
          },
          UploadComplete: self.confrim
        }
      });
    });
  },
  methods: {
    removeImg(item) {
      let delIndex = this.previewImg.indexOf(item)
        this.previewImg.splice(delIndex, 1)
        this.uploadFiles.splice(delIndex, 1)
    },
    uploadImg() {
      if (!/[\\p{Blank}*\\p{Alpha}+\\p{Blank}*\\p{Alpha}\u4e00-\u9fa5*\w*]+/g.test(this.goods.name)) {
        this.$message.error("商品名称是必须的且长度不超过15个");
        return;
      } else if (!/[\\p{Blank}*\\p{Alpha}+\\p{Blank}*\\p{Alpha}\u4e00-\u9fa5*\w*]+/g.test(this.goods.description)) {
        this.$message.error('请输入商品描述')
        return
      } else if (!this.goods.price || this.goods.price <= 0) {
        this.$message.error("商品价格不能为空且必须大于0");
        return;
      } else if (!this.goods.category) {
        this.$message.error("请选择一个分类");
        return;
      } else if (this.uploadFiles.length < 3 || this.uploadFiles.length > 6) {

        this.$message.error("请选择至少3张至多6张图片");
        return;
      } else if (!this.goods.stock || this.goods.stock < 1) {
        this.$message.error("库存至少为1");
        return;
      } else if (!/^\d+(\.{0,1}\d+){0,1}$/.test(this.goods.postage)) {
        this.$message.error("邮费是必须的且邮费不能是负数");
        return;
      } else if (
          !this.goods.props.every(item => {
          return item.name && item.val;
        })
      ) {
        this.$message.error("自定义属性的名字与值不能为空");
        return;
      }
      this.loading = true;
      this.imgReady = true;
      this.uploadFiles.forEach(file => {
        this.uploader.addFile(file);
      });
      this.uploader.start();
    },
    confrim() {
      this.goods.photoKeys = this.keyArray;
      uploadGoods(this.goods)
        .then(res => {
          this.loading = false;
          this.$message.success("上传成功");
          this.clearGoods();
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
          this.$message.error(err.resMessage || err.message);
        });
    },
    clearGoods() {
      this.goods = {
        name: "",
        description: "",
        price: "",
        props: [],
        postage: 0,
        category: "",
        photoKeys: [],
        stock: ""
      };
      this.keyArray = [];
      this.previewImg = [];
      this.uploadFiles = [];
      this.imgReady = false;
      this.uploader.files.forEach(file => {
        this.uploader.removeFile(file.id);
      });
    },
    previewImgHandle(files) {
      let self = this;
      let len = self.uploader.files.length;
      let filesLen = this.uploadFiles.length;
      if (len + filesLen > 6 || len + filesLen < 3) {
        this.$message.error("选择至少3张至多6张图片");
        let l = this.uploader.files.length - 1;
        for (let i = l; i >= 0; i--) {
          let file = this.uploader.files[i];
          this.uploader.removeFile(file.id);
        }
        return;
      }
      for (var i = 0; i < len; i++) {
        var uploadFile = files[i];
        var file = files[i].getNative();
        var imageType = /^image\//;
        if (!imageType.test(file.type)) {
          continue;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
          self.previewImg.push(e.target.result);
        };
        self.uploadFiles.push(file);
        self.uploader.removeFile(uploadFile.id);
        reader.readAsDataURL(file);
      }
    },
    addProp() {
      this.goods.props.push({ name: "", val: "" });
    },
    rmProp(index) {
      this.goods.props.splice(index, 1);
    },
    initParams() {
      getCategories()
        .then(res => {
          this.categoryList = res.data;
          this.$store.dispatch("tagList", this.categoryList);
        })
        .catch(err => {
          console.log(err);
          this.$message.error("获取商城分类失败");
        });
    }
  }
};
</script>
