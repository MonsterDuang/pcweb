<style lang="stylus" scoped>
    @import '../../stylus/variables.styl';

    .address-view {
        width: 100%;
        padding-bottom: 30px;
        padding-top: 36px;
    }

    .address-head {
        height: 50px;
        padding: 0 20px;
        line-height: 50px;
        color: #333;
        background: #fff;
        font-size: 18px;

        .to-back {
            float: right;
            color: $shopBgColor;
            cursor: pointer;
        }
    }

    .add-address_box {
        padding: 20px 0;

        .add-title {
            margin-bottom: 26px;
            font-size: 18px;
            line-height: 36px;
            margin-bottom: 10px;

            span {
                font-size: 18px;
                width: 120px;
                text-align: left;
            }
        }

        >div {
            margin-bottom: 26px;

            >span {
                float: left;
                width: 100px;
                line-height: 36px;
                font-size: 14px;
                text-align: right;
                margin-right: 20px;
            }

            >div {
                float: left;

                .home-select, .city-select {
                    width: 254px;
                    height: 36px;
                    margin-right: 10px;
                }

                input {
                    height: 36px;
                    border: 1px solid #e0e0e0;
                    background: #fff;
                    font-size: 14px;
                    padding: 10px;
                    outline: none;
                }
            }
        }

        .address-detail {
            textarea {
                width: 544px;
                height: 108px;
                background: #fff;
                padding: 10px 20px;
                font-size: 14px;
                resize: none;
                outline: none;
                border: 1px solid #e0e0e0;
            }
        }

        .code-box {
            .zipcode-input {
                width: 254px;
            }
        }

        .name-box {
            input {
                width: 254px;
            }
        }

        .phone-box {
            .home-select {
                width: 138px;
            }

            .phone-input {
                width: 254px;
            }
        }

        .tel-box {
            .home-select {
                width: 138px;
            }

            .tel-input {
                width: 106px;
            }
        }

        .select-default {
            padding-left: 120px;

            label {
                position: relative;
                overflow: hidden;
                cursor: pointer;
                vertical-align: middle;
                line-height: 30px;
                font-size: 14px;
            }

            .input-select {
                position: absolute;
                z-index: -1;
                left: -999px;
            }

            .input-select:checked+.icon-default {
                background: url('../../assets/img/087.png') no-repeat center;
                background-size: 100%;
            }

            .icon-default {
                display: inline-block;
                vertical-align: middle;
                width: 26px;
                height: 26px;
                background: url('../../assets/img/086.png') no-repeat center;
                background-size: 100%;
                margin-right: 10px;
            }
        }

        .address-action {
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
    }

    .address-list {
        width: 100%;

        .theme-font {
            margin: 20px 0;
        }

        .list-box {
            .list-head {
                height: 50px;
                line-height: 50px;
                padding: 0 16px;
                background: #fff;

                >span {
                    color: #aaaaaa;
                    font-size: 16px;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
        }

        .head-name, .line-name {
            width: 86px;
            text-wrap();
        }

        .head-area, .line-area {
            width: 254px;
            text-wrap();
        }

        .head-detail, .line-detail {
            width: 285px;
            text-wrap();
        }

        .head-code, .line-code {
            width: 128px;
            text-wrap();
        }

        .head-phone, .line-phone {
            width: 158px;
            text-wrap();
        }

        .head-action, .line-action {
            width: 150px;
            text-wrap();
        }

        .line-action {
            button {
                outline: none;
            }
        }

        .address-line {
            background: #fff;
            border: 1px solid #e0e0e0;
            border-bottom: none;
            height: 50px;
            line-height: 48px;
            color: #333;
            font-size: 16px;
            padding: 0 16px;

            &:last-child {
                border-bottom: 1px solid #e0e0e0;
            }

            .line-default {
                text-wrap();

                button {
                    display: none;
                    border: 1px solid $themeColor;
                    background: $themeColor;
                    color: #fff;
                    font-size: 14px;
                    border-radius: 4px;
                    width: 92px;
                    text-align: center;
                    line-height: 28px;
                    height: 30px;
                    cursor: pointer;
                }

                .default-btn {
                    display: inline;
                    background: #fff;
                    color: $themeColor;
                }
            }

            .line-action {
                color: #60a4d0;

                button {
                    border: none;
                    color: #60a4d0;
                    background: none;
                    cursor: pointer;
                    padding: 0;
                    margin-right: 8px;
                }
            }

            &:hover {
                background: #f4f4f4;
                border: 1px solid #f4f4f4;

                .line-default button {
                    display: inline;
                }
            }

            >span {
                display: inline-block;
            }
        }
    }
</style>
<template>
    <div class="address-view">
        <div class="container" v-loading="loading">
            <div class="address-head clearfix">我的收货地址
                <span class="to-back" @click="$router.go(-1)">返回上一页</span>
            </div>
            <div class="add-address_box">
                <div class="add-title">
                    <span class="theme-font">新增收货地址</span>电话号码、手机号选填一项，其余均为必填</div>
                <div class="area-box clearfix">
                    <span>所在地区：</span>
                    <div>
                        <el-cascader placeholder="请选择省市区" class="city-select" :options="options" :props="{children:'district',value:'code',label:'name'}" v-model="address.cityCode">
                        </el-cascader>
                    </div>
                </div>
                <div class="address-detail clearfix">
                    <span>详细地址：</span>
                    <div>
                        <textarea v-model="address.street" placeholder="建议你填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息"></textarea>
                    </div>
                </div>
                <div class="code-box clearfix">
                    <span>邮政编码：</span>
                    <div>
                        <input class="zipcode-input" v-model="address.zipCode" type="text" placeholder="如您不清楚邮递区号，请填写000000">
                    </div>
                </div>
                <div class="name-box clearfix">
                    <span>收货人姓名：</span>
                    <div>
                        <input type="text" v-model="address.name" placeholder="长度不超过25个字符">
                    </div>
                </div>
                <div class="phone-box clearfix">
                    <span>手机号码</span>
                    <div>
                        <input class="phone-input" type="text" v-model="address.phone" placeholder="请输入手机号码">
                    </div>
                </div>
                <div class="select-default">
                    <label><input class="input-select" v-model="address.isDefault" type="checkbox">
                        <span class="icon-default"></span>设置为默认收货地址</label>
                </div>
                <div class="address-action">
                    <button @click="addAddress">保存</button>
                </div>
            </div>
            <div class="address-list">
                <div class="theme-font">已保存{{addressList.length}}条地址，你还能保存{{15 - addressList.length}}条地址</div>
                <div class="list-box">
                    <div class="list-head">
                        <span class="head-name">收货人</span>
                        <span class="head-area">所在地区</span>
                        <span class="head-detail">详细地址</span>
                        <span class="head-code">邮编</span>
                        <span class="head-phone">手机号码</span>
                        <span class="head-action">操作</span>
                    </div>
                    <div class="address-line" v-for="address in addressList" :key="address.id">
                        <span class="line-name" v-text="address.name"></span>
                        <span class="line-area">{{address.address.province + address.address.city }}</span>
                        <span class="line-detail" v-text="addressTransform(address.address)"></span>
                        <span class="line-code" v-text="address.zipCode"></span>
                        <span class="line-phone" v-text="address.phone"></span>
                        <span class="line-action">
                            <button @click="changeAddress(address)">修改</button>|
                            <button @click="rmAddress(address.id)">删除</button>
                        </span>
                        <span class="line-default">
                            <button class="default-btn" v-if="address.isDefault">默认地址</button>
                            <button @click="toDefault(address)" v-else>设为默认</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { getAddressList, addAddress, removeAddress, editAddress } from '../../api/my'
    import { cityHash, cityData, searchCityCode } from '../../util/city'
    export default {
        name: 'PersonlCenterAddress',
        data() {
            return {
                selectedOptions: [],
                options: cityData,
                addressList: [],
                loading: true,
                address: {
                    cityCode: [],
                    phone: '',
                    street: '',
                    province: '',
                    isDefault: false,
                    zipCode: '',
                    name: ''
                },
                isEdit: false,
                editAddress: {}
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo
            }
        },
        created() {
            this.getAddressList()
        },
        methods: {
            addAddress() {
                if (!this.address.name || this.address.name.length > 25) {
                    this.$message.error('请输入长度合适的姓名')
                    return
                }
                if (!this.address.phone || this.address.phone.length !== 11) {
                    this.$message.error('请填写正确的手机号码')
                    return
                }
                if (!this.address.street) {
                    this.$message.error('详细地址必须填写')
                    return
                }
                if (this.address.cityCode.length < 3) {
                    this.$message.error('请选择所在地区')
                    return
                }
                if (!this.address.zipCode) {
                    this.$message.error('请输入邮编')
                    return
                }
                let province = cityHash[this.address.cityCode[0]]
                let city = cityHash[this.address.cityCode[1]]
                let region = cityHash[this.address.cityCode[2]]
                let reqData = {
                    address: {
                        "province": province.fullname,
                        "city": city.fullname,
                        "region": region.fullname,
                        "street": this.address.street,
                    },
                    "name": this.address.name,
                    "phone": this.address.phone,
                    "zipCode": this.address.zipCode,
                    "isDefault": this.address.isDefault
                }
                this.loading = true
                if (this.isEdit) {
                    editAddress(this.editAddress.id, reqData).then((res) => {
                        this.loading = false
                        this.$message.success('修改地址成功')

                        this.clearAddress()
                        this.getAddressList()
                    }).catch((err) => {
                        console.log(err)
                        this.loading = false
                        this.$message.error(err.resMessage || err.message)
                    })
                } else {
                    addAddress(reqData).then((res) => {
                        this.loading = false
                        this.$message.success('增加地址成功')
                        this.clearAddress()
                        this.getAddressList()
                    }).catch((err) => {
                        console.log(err)
                        this.loading = false
                        this.$message.error(err.resMessage || err.message)
                    })
                }
            },
            toDefault(address) {
                address.isDefault = true
                this.changeAddress(address)
                this.addAddress()
            },
            clearAddress() {
                this.address = {
                    cityCode: [],
                    phone: '',
                    street: '',
                    province: '',
                    isDefault: false,
                    zipCode: '',
                    name: ''
                }
            },
            rmAddress(id) {
                this.$confirm('确认删除该地址吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.loading = true
                    removeAddress(id).then((res) => {
                        this.loading = false
                        this.$message.success(res.data.message)
                    }).catch((err) => {
                        console.log(err)
                        this.loading = false
                        this.$message.error(err.resMessage || err.message)
                    })
                }).catch(() => { });
            },
            changeAddress(address) {
                this.address = {
                    cityCode: searchCityCode(address.address.province, address.address.city, address.address.region),
                    phone: address.phone,
                    street: address.address.street,
                    province: address.address.province,
                    isDefault: address.isDefault,
                    zipCode: address.zipCode,
                    name: address.name
                }
                this.editAddress = address
                this.isEdit = true
            },
            addressTransform(address) {
                return address.province + address.city + address.region + address.street
            },
            getAddressList() {
                getAddressList().then((res) => {
                    this.addressList = res.data
                    this.$nextTick(() => {
                        this.loading = false
                    })
                }).catch((err) => {
                    console.log(err)
                    this.$message.error(err.resMessage || err.message)
                })
            },

        }
    }
</script>
