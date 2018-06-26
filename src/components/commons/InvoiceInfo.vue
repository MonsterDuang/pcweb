<style lang="stylus">
@import '../../stylus/variables.styl';

.invoice-dialog {
    .el-dialog {
        overflow: hidden;
        border-radius: 8px;
        background: transparent;
        width: 500px;

        .el-dialog__header, .el-dialog__body, .el-dialog__footer {
            background: #fff;
        }

        .el-dialog__header {
            padding: 30px 30px 10px;
        }

        .el-dialog__body {
            padding: 0 30px 30px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            margin-bottom: 10px;
        }

        .el-dialog__footer {
            padding: 0;
            border-radius: 8px;
            overflow: hidden;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
    }

    .express-company, .express-code {
        >div {
            width: 100%;

            .company-select, input {
                width: 100%;
                background: #f4f4f4;
                height: 60px;
                border: 1px solid #e6e6e6;
                background: #f4f4f4;
                font-size: 18px;
            }
        }
    }

    .express-code {
        margin-top: 10px;

        >input {
            width: 100%;
            background: #f4f4f4;
            height: 60px;
            border: 1px solid #e6e6e6;
            background: #f4f4f4;
            padding: 0 15px;
            font-size: 18px;
            outline: none;

            &:focus {
                border: 1px solid $themeColor;
            }
        }
    }

    .invoice-footer {
        font-size: 0;
        padding: 0;

        button {
            border: none;
            width: 50%;
            margin: 0;
            font-size: 18px;
            background: #fff;
            height: 80px;
            text-align: center;
            font-weight: normal;
            border-radius: 0px;
        }

        .cancel-btn {
            color: #a4a4a4;
            border-right: 1px solid #e0e0e0;
        }

        .confrim-btn {
            color: $themeColor;
        }
    }
}
</style>
<template>
    <el-dialog class="invoice-dialog" title="请填写收货信息" :visible="showInfo" @close="$emit('cancel')">
        <div>
            <div class="express-company">
                <el-select class="company-select" v-model="express" placeholder="请选择快递收货公司">
                    <el-option v-for="e in expressList" :key="e" :label="e" :value="e">
                    </el-option>
                </el-select>
            </div>
            <div class="express-code">
                <input type="text" v-model="no" placeholder="请填写运单编号">
            </div>
        </div>
        <div slot="footer" class="invoice-footer">
            <el-button class="cancel-btn" @click="$emit('cancel')">取 消</el-button>
            <el-button class="confrim-btn" type="primary" @click="confirm">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
export default {
  name: "",
  props: {
    showInfo: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      expressList: [
        "顺丰速运",
        "圆通快递",
        "申通快递",
        "韵达",
        "中通",
        "EMS",
        "汇通"
      ],
      express: "顺丰速运",
      no: ""
    };
  },
  methods: {
    confirm() {
      var self = this;
      if (!self.express) {
        self.$message.error("请选择物流公司");
        return;
      }
      if (!self.no) {
        self.$message.error("请输入运单号");
        return;
      }
      self.$emit("confirm", { express: self.express, no: self.no });
    }
  }
};
</script>
