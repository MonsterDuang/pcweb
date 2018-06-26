import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// home
import Home from '../views/Home/Home.vue'
import HomeIndex from '../views/Home/HomeIndex.vue'
import HomeLive from '../views/Home/HomeLive.vue'
import HomeAuction from '../views/Home/HomeAuction.vue'
import HomeCheck from '../views/Home/HomeCheck.vue'
import HomePick from '../views/Home/HomePick.vue'
import HomeHotShop from '../views/Home/HomeHotShop.vue'
import HomePreview from '../views/Home/HomePreview.vue'
import HomeLabel from '../views/Home/HomeLabel.vue'
import HomePickGoods from '../views/Home/HomePickGoods.vue'

// shop
import Shop from '../views/Shop/Shop.vue'
import ShopIndex from '../views/Shop/ShopIndex.vue'
import ShopWares from '../views/Shop/ShopWares.vue'
import ShopAuction from '../views/Shop/ShopAuction.vue'
import ShopSearchResult from '../views/Shop/ShopSearchResult.vue'
import ShopWaresDetail from '../views/Shop/ShopWaresDetail.vue'

// settle
import Settle from '../views/Settle/Settle.vue'
import SettleConfirm from '../views/Settle/SettleConfirm.vue'
import SettlePay from '../views/Settle/SettlePay.vue'
import SettlePaySuccess from '../views/Settle/SettlePaySuccess.vue'
import SettleOrderStep from '../views/Settle/SettleOrderStep.vue'
import SettleStoreStep from '../views/Settle/SettleStoreStep.vue'

// personlCenter
import PersonlCenter from '../views/PersonlCenter/PersonlCenter.vue'
import PersonlCenterIndex from '../views/PersonlCenter/PersonlCenterIndex.vue'
import PersonlCenterOrder from '../views/PersonlCenter/PersonlCenterOrder.vue'
import PersonlCenterPurse from '../views/PersonlCenter/PersonlCenterPurse.vue'
import PersonlCenterStore from '../views/PersonlCenter/PersonlCenterStore.vue'
import PersonlCenterPledge from '../views/PersonlCenter/PersonlCenterPledge.vue'
import PersonlCenterAuction from '../views/PersonlCenter/PersonlCenterAuction.vue'
import PersonlCenterCheck from '../views/PersonlCenter/PersonlCenterCheck.vue'
import OrderDrawback from '../views/PersonlCenter/OrderDrawback.vue'
import PersonlCenterSell from '../views/PersonlCenter/PersonlCenterSell.vue'
import PersonlCenterAddress from '../views/PersonlCenter/PersonlCenterAddress.vue'
import PersonlCenterAccountSetting from '../views/PersonlCenter/PersonlCenterAccountSetting.vue'
import PersonlCenterMessage from '../views/PersonlCenter/PersonlCenterMessage.vue'
import PersonlCenterData from '../views/PersonlCenter/PersonlCenterData.vue'
import PersonlCenterGoods from '../views/PersonlCenter/PersonlCenterGoods.vue'
import PersonlCenterAppraisal from '../views/PersonlCenter/PersonlCenterAppraisal.vue'

// refer
import Refer from '../views/Refer/Refer.vue'
import ReferMatter from '../views/Refer/ReferMatter.vue'
import ReferCustomer from '../views/Refer/ReferCustomer.vue'
import ReferDispatch from '../views/Refer/ReferDispatch.vue'
import ReferLogistics from '../views/Refer/ReferLogistics.vue'
import ReferBusiness from '../views/Refer/ReferBusiness.vue'
import ReferModifyPwd from '../views/Refer/ReferModifyPwd.vue'
import ReferRegister from '../views/Refer/ReferRegister.vue'
import ReferAbout from '../views/Refer/ReferAbout.vue'
import ReferAuctionDetail from '../views/Refer/ReferAuctionDetail.vue'
import ReferAccountBinding from '../views/Refer/ReferAccountBinding.vue'

// 上传商品，临时
import GoodsUpoload from '../views/Refer/GoodsUpload.vue'
import EditGoods from '../views/Refer/EditGoods.vue'
import ShopSetting from '../views/Refer/ShopSetting.vue'
import AuctionUpload from '../views/Refer/AuctionUpload.vue'
import EditAuction from '../views/Refer/EditAuction.vue'

// preview 
import Preview from '../views/Preview/Preview.vue'
import PreviewShop from '../views/Preview/PreviewShop.vue'
import PreviewWares from '../views/Preview/PreviewWares.vue'

// advertisement
import Advertisement from '../Advertisement/Advertisement.vue'

// login 
import AccountLogin from '../views/Account/AccountLogin.vue'

// 商家管理
import BusinessLogin from '../views/BusinessManagement/BusinessLogin.vue'
import BusinessManagement from '../views/BusinessManagement/Business.vue'
import BusinessStore from '../views/BusinessManagement/MyStore.vue'
import ProductManage from '../views/BusinessManagement/ProductManage.vue'
import MyCase from '../views/BusinessManagement/MyCase.vue'
import UploadPro from '../views/BusinessManagement/UploadPro.vue'
import SettingShop from '../views/BusinessManagement/SettingShop.vue'
import Statistics from '../views/BusinessManagement/Statistics.vue'
import MyAuction from '../views/BusinessManagement/MyAuction.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [{
        path: '/pcweb/',
        redirect: {
            name: 'homeIndex'
        }
    },{
            path: '/pcweb/advertisement',
            component: Advertisement,
            name: 'advertisement',
            beforeEnter(to, from, next) {
                if (store.state.user.isLogin) {
                    next(false)
                } else {
                    next()
                }
            }
        },{
            path: '/pcweb/login',
            component: AccountLogin,
            name: 'login'
        }, {
            path: '/pcweb/home',
            component: Home,
            children: [{
                path: '',
                redirect: {
                    name: 'homeIndex'
                }
            }, {
                path: 'index',
                name: 'homeIndex',
                component: HomeIndex
            }, {
                path: 'live',
                name: 'homeLive',
                component: HomeLive
            }, {
                path: 'auction',
                name: 'homeAuction',
                component: HomeAuction
            }, {
                path: 'check',
                name: 'homeCheck',
                component: HomeCheck
            }, {
                path: 'pick',
                name: 'homePick',
                component: HomePick
            }, {
                path: 'hotShop',
                name: 'homeHotShop',
                component: HomeHotShop
            }, {
                path: 'preview',
                name: 'homePreview',
                component: HomePreview
            }, {
                path: 'label/:tag',
                name: 'homeLabel',
                component: HomeLabel
            }, {
                path: 'pick/:goodsID',
                props: true,
                name: 'pickGoods',
                component: HomePickGoods
            }]
        }, {
            path: '/pcweb/preview',
            component: Preview,
            children: [{
                path: '',
                redirect: {
                    name: 'homePreview'
                }
            }, {
                path: 'shop/:shopID',
                component: PreviewShop,
                name: 'previewShop',
                props: true
            }, {
                path: 'wares/:goodsID',
                component: PreviewWares,
                name: 'previewWares',
                props: true
            }]
        }, {
            path: '/pcweb/shop/:shopID',
            component: Shop,
            props: true,
            children: [{
                path: '',
                redirect: {
                    name: 'shopIndex'
                }
            }, {
                path: 'index',
                name: 'shopIndex',
                component: ShopIndex
            }, {
                path: 'wares',
                name: 'shopWares',
                component: ShopWares
            }, {
                path: 'auction',
                name: 'shopAuction',
                component: ShopAuction
            }, {
                path: 'search',
                name: 'shopSearch',
                component: ShopSearchResult
            }, {
                path: '/waresDetail/:goodsID',
                name: 'waresDetail',
                props: true,
                component: ShopWaresDetail
            }]
        }, {
            path: '/pcweb/settle',
            component: Settle,
            beforeEnter(to, from, next) {
                if (store.state.user.isLogin) {
                    next()
                } else {
                    store.dispatch('backRoute', {
                        name: to.name,
                        params: to.params,
                        query: to.query
                    })
                    next({
                        name: 'login'
                    })
                }
            },
            children: [{
                path: 'confirm/:goodsID/:num',
                name: 'settleConfirm',
                props: true,
                component: SettleConfirm
            }, {
                path: 'wxPay/:orderID',
                name: 'settleWxPay',
                component: SettlePay,
                props: true,
                meta: {
                    title: '微信支付',
                    app: '微信'
                }
            }, {
                path: 'aliPay/:orderID',
                name: 'settleAliPay',
                component: SettlePay,
                props: true,
                meta: {
                    title: '支付宝支付',
                    app: '支付宝'
                }
            }, {
                path: 'orderStep/:orderID',
                name: 'orderStep',
                props: true,
                component: SettleOrderStep
            }, {
                path: '/settle/:orderID/paySuccess',
                name: 'paySuccess',
                props: true,
                component: SettlePaySuccess
            }, {
                path: 'storeStep/:orderID',
                name: 'storeStep',
                props: true,
                component: SettleStoreStep
            }]
        },
        {
            path: '/pcweb/personl',
            component: PersonlCenter,
            beforeEnter(to, from, next) {
                if (store.state.user.isLogin) {
                    next()
                } else {
                    store.dispatch('backRoute', {
                        name: to.name,
                        params: to.params,
                        query: to.query
                    })
                    next({
                        name: 'login'
                    })
                }
            },
            children: [{
                path: 'index',
                component: PersonlCenterIndex,
                children: [{
                    path: '',
                    redirect: {
                        name: 'myOrder'
                    }
                }, {
                    path: 'order',
                    name: 'myOrder',
                    component: PersonlCenterOrder
                }, {
                    path: 'store',
                    name: 'myStore',
                    component: PersonlCenterStore
                }, {
                    path: 'drawback/:orderID',
                    name: 'orderDrawback',
                    props: true,
                    component: OrderDrawback
                }, {
                    path: 'purse',
                    name: 'myPurse',
                    component: PersonlCenterPurse
                }, {
                    path: 'pledge',
                    name: 'myPledge',
                    component: PersonlCenterPledge
                }, {
                    path: 'auction',
                    name: 'myAuction',
                    component: PersonlCenterAuction
                }, {
                    path: 'check',
                    name: 'myCheck',
                    component: PersonlCenterCheck
                }, {
                    path: 'sell',
                    name: 'mySell',
                    component: PersonlCenterSell
                }, {
                    path: 'goods',
                    name: 'goodsManage',
                    component: PersonlCenterGoods
                }, {
                    path: 'appraisal',
                    name: 'myAppraisal',
                    component: PersonlCenterAppraisal
                }]
            }, {
                path: 'address',
                name: 'collectAddress',
                component: PersonlCenterAddress
            }, {
                path: 'account',
                name: 'accountSetting',
                component: PersonlCenterAccountSetting
            }, {
                path: 'message',
                name: 'myMessage',
                component: PersonlCenterMessage
            }, {
                path: 'data',
                name: 'myData',
                component: PersonlCenterData
            }]
        },
        {
            path: '/pcweb/refer',
            component: Refer,
            children: [{
                path: 'matter',
                name: 'referMatter',
                component: ReferMatter
            }, {
                path: 'customer',
                name: 'referCustomer',
                component: ReferCustomer
            }, {
                path: 'dispatch',
                name: 'referDispatch',
                component: ReferDispatch
            }, {
                path: 'logistics',
                name: 'referLogistics',
                component: ReferLogistics
            }, {
                path: 'business',
                name: 'referBusiness',
                component: ReferBusiness
            }, {
                path: 'modifyPwd',
                name: 'modifyPwd',
                component: ReferModifyPwd
            }, {
                path: 'register',
                name: 'register',
                component: ReferRegister
            }, {
                path: 'accountBinding',
                name: 'accountBinding',
                component: ReferAccountBinding
            }, {
                path: 'about',
                name: 'referAbout',
                component: ReferAbout
            }, {
                path: 'upload/goods',
                name: 'goodsUpload',
                component: GoodsUpoload,
                beforeEnter(to, from, next) {
                    if (store.state.user.isLogin) {
                        next()
                    } else {
                        store.dispatch('backRoute', {
                            name: to.name,
                            params: to.params,
                            query: to.query
                        });
                        next({
                            name: 'login'
                        })
                    }
                }
            }, {
                path: 'upload/auction',
                name: 'auctionUpload',
                component: AuctionUpload,
                beforeEnter(to, from, next) {
                    if (store.state.user.isLogin) {
                        next()
                    } else {
                        store.dispatch('backRoute', {
                            name: to.name,
                            params: to.params,
                            query: to.query
                        });
                        next({
                            name: 'login'
                        })
                    }
                }
            }, {
                path: 'edit/:auctionID/auction',
                name: 'editAuction',
                props: true,
                component: EditAuction,
                beforeEnter(to, from, next) {
                    if (store.state.user.isLogin) {
                        next()
                    } else {
                        store.dispatch('backRoute', {
                            name: to.name,
                            params: to.params,
                            query: to.query
                        });
                        next({
                            name: 'login'
                        })
                    }
                }
            }, {
                path: 'edit/:goodsID/goods',
                name: 'editGoods',
                props: true,
                component: EditGoods,
                beforeEnter(to, from, next) {
                    if (store.state.user.isLogin) {
                        next()
                    } else {
                        store.dispatch('backRoute', {
                            name: to.name,
                            params: to.params,
                            query: to.query
                        });
                        next({
                            name: 'login'
                        })
                    }
                }
            }, {
                path: '/pcweb/auction/:auctionID/detail',
                props: true,
                name: 'auctionDetail',
                component: ReferAuctionDetail
            }, {
                path: 'shop/setting',
                name: 'shopSetting',
                component: ShopSetting,
                beforeEnter(to, from, next) {
                    if (store.state.user.isLogin) {
                        next()
                    } else {
                        store.dispatch('backRoute', {
                            name: to.name,
                            params: to.params,
                            query: to.query
                        });
                        next({
                            name: 'login'
                        })
                    }
                }
            }]
        },
        {
            path: '/pcweb/businesslogin',
            component: BusinessLogin,
            name: 'businessLogin',
            beforeEnter(to, from, next) {
                console.log(localStorage.getItem('loginBol'))
                if (localStorage.getItem('loginBol') == 'true') {
                    next({
                        name: 'businessStore'
                    })
                } else {
                    next()
                }
            }
        },
        {
            path: '/pcweb/businessmanage',
            name: 'businessManagement',
            component: BusinessManagement,
            beforeEnter(to, from, next) {
                console.log(localStorage.getItem('loginBol'))
                if (localStorage.getItem('loginBol') == 'true') {
                    next()
                } else {
                    next({
                        name: 'businessLogin'
                    })
                }
            },
            children: [{
                path: '',
                redirect: {
                    name: 'businessStore'
                }
            },{
                path: 'businessstore',
                name:'businessStore',
                component: BusinessStore
            },{
                path: 'productmanage',
                name:'productManage',
                component: ProductManage
            },{
                path: 'mycase',
                name:'myCase',
                component: MyCase
            },{
                path: 'uploadpro',
                name:'uploadPro',
                component: UploadPro
            },{
                path: 'settingshop',
                name:'settingShop',
                component: SettingShop
            },{
                path: 'statistics',
                name:'statistics',
                component: Statistics
            },{
                path: 'myauction',
                name:'MyAuction',
                component: MyAuction
            }]
        }
    ]
})