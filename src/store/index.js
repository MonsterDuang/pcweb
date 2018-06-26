import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// state modules
import home from './modules/home'
import settle from './modules/settle'
import user from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isPay: false,
        preview: {
            title: ''
        },
        shop: {
            shopID: '',
            shopInfo: {},
            searchResult: {
                goods: [],
                auctions: []
            }
        },
        user: ''
    },
    modules: {
        home,
        settle,
        user
    },
    mutations: {
        enterPay(state) {
            state.isPay = true
        },
        leavePay(state) {
            state.isPay = false
        },
        setPreviewTitle(state, title) {
            state.preview.title = title
        },
        setShopID(state, id) {
            state.shop.shopID = id
        },
        setShopInfo(state, info) {
            state.shop.shopInfo = info
        },
        setSearchResult(state, result) {
            state.shop.searchResult.goods = result.goods
            state.shop.searchResult.auctions = result.auctions
        }
    },
    actions: {
        launchPay({
            commit
        }) {
            commit('enterPay')
        },
        completePay({
            commit
        }) {
            commit('leavePay')
        },
        openPreviewShop({
            commit
        }, title) {
            commit('setPreviewTitle', title)
        },
        gotoShop({
            commit
        }, id) {
            commit('setShopID', id)
        },
        openShop({
            commit
        }, shopInfo) {
            commit('setShopInfo', shopInfo)
        },
        shopSearch({
            commit
        }, result) {
            commit('setSearchResult', result)
        }
    },
    strict: process.env.NODE_ENV !== 'production',
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})

export default store