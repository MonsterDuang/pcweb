import 'es6-promise/auto'
import './polyfill/object-assign.js'
import './lib/normalize.css'
import 'element-ui/lib/theme-chalk/display.css';


import VuePreview from 'vue-preview'
Vue.use(VuePreview)
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
})


import Vue from 'vue'
import {
    sync
} from 'vuex-router-sync'
import http from './util/http'
import router from './router'
import store from './store'
import App from './App.vue'
import mixin from './mixin'
import {
    constants
} from './common/constants'
import {
    getUserInfo
} from './api/user'
import {
    getShopInfo
} from './api/my'
import qs from 'querystring'

http.defaults.baseURL = constants.BASE_API_URL

sync(store, router)

Vue.use(mixin)

Vue.config.productionTip = false
const app = new Vue({
    router,
    store,
    ...App
})

router.onReady(() => {
    if (window.location.search) {
        let query = qs.parse(window.location.search.slice(1))
        if (query.code && query.state) {
            router.push({
                name: 'login',
                query: query
            })
        }
    }
})

getUserInfo().then((res) => {
    store.dispatch('userLogin', res.data.user)
    router.replace({
        name: store.state.user.cacheRoute.name,
        params: store.state.user.cacheRoute.params,
        query: store.state.user.cacheRoute.query
    })
    if (res.data.user.shop) {
        getShopInfo().then((shopRes) => {
            store.dispatch('shopLogin', shopRes.data)
        })
    }
    app.$mount('#app')
}).catch((err) => {
    app.$mount('#app')
})
