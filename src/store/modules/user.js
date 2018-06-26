export default {
    state: {
        justLogin: false,
        userInfo: {},
        businessInfo: {},
        isLogin: false,
        cacheRoute: '',
        myMenu: {
            common: [{
                    name: '我的订单',
                    route: 'myOrder'
                },
                {
                    name: '我的钱包',
                    route: 'myPurse'
                },
                {
                    name: '我的竞拍',
                    route: 'myAuction'
                },
                {
                    name: '我的保证金',
                    route: 'myPledge'
                },
                {
                    name: '我的鉴定',
                    route: 'myCheck'
                }
            ],
            user: [{
                name: '我的寄售',
                route: 'mySell'
            }],
            shop: [{
                name: '我的店铺',
                route: 'myStore'
            }, {
                name: '商品管理',
                route: 'goodsManage'
            }],
            appraiser: [{
                name: '鉴定管理',
                route: 'myAppraisal'
            }, {
                name: '我的寄售',
                route: 'mySell'
            }]
        },
        shop: {},
        bindUserInfo: {}
    },
    getters: {
        myRoute(state) {
            if (Object.keys(state.userInfo).length === 0) {
                return [].concat(state.myMenu.common, state.myMenu.user, state.myMenu.shop)
            } else {
                return [].concat(state.myMenu[state.userInfo.type], state.myMenu.common)
            }
        }
    },
    mutations: {
        enterLogin(state) {
            state.justLogin = true
        },
        leaveLogin(state) {
            state.justLogin = false
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
            state.isLogin = true
        },
        setBusinessInfo(state, businessInfo) {
            state.businessInfo = businessInfo
            state.isLogin = true
        },
        clearUserInfo(state) {
            state.userInfo = {}
            state.isLogin = false
        },
        setBackRoute(state, route) {
            state.cacheRoute = route
        },
        setUserShop(state, shop) {
            shop.auctionCover = shop.auctionCover ? shop.auctionCover : ''
            shop.logo = shop.logo ? shop.logo : ''
            shop.cover = shop.cover ? shop.cover : ''
            state.shop = shop
        },
        setBingUser(state, userInfo) {
            state.bindUserInfo = Object.assign({}, userInfo)
        }
    },
    actions: {
        preLogin({
            commit
        }) {
            commit('enterLogin')
        },
        loginComplete({
            commit
        }) {
            commit('leaveLogin')
        },
        userLogin({
            commit
        }, userInfo) {
            commit('setUserInfo', userInfo)
        },
        userLogout({
            commit
        }) {
            commit('clearUserInfo')
        },
        backRoute({
            commit
        }, routeName) {
            commit('setBackRoute', routeName)
        },
        shopLogin({
            commit
        }, shop) {
            commit('setUserShop', shop)
        },
        toUserBind({
            commit
        }, userInfo) {
            commit('setBingUser', userInfo)
        }
    }
}