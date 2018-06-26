import http from '../util/http'

export function getHomeData() {
    return http.get('/app/home')
}

//  获取轮播区
export function getTopAuction() {
    return http.get('/app/home/top-auctions')
}

// 获取人气好店
export function getHotShop(query) {
    return http.get('/shop/hot', {
        params: query
    })
}

// 获取广告位
export function getBanner() {
    return http.get('/banner?type=bannerpc')
}

// 捡漏商品
export function getPickGoods(query) {
    return http.get('/goods/pick', {
        params: query
    })
}