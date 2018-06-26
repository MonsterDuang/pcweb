import http from '../util/http'

// 搜索接口
export function search(query) {
    return http.get('/search', {
        params: query
    })
}

// 获取商家商品列表
export function getShopGoods(id, query) {
    if (!id) throw new Error('id must be a required')
    return http.get(`/shop/${id}/goods`, {
        params: query
    })
}

// 获取商家拍卖列表
export function getShopAuction(id, query) {
    if (!id) throw new Error('id must be a required')
    return http.get(`/shop/${id}/auction-goods`, {
        params: query
    })
}

// 获取商家信息
export function getShop(id) {
    if (!id) throw new Error('id must be a required')
    return http.get(`/shop/${id}`)
}

// 获取商品列表
export function getHotGoods(query) {
    return http.get('/goods', {
        params: query
    })
}

// 获取商品详情
export function getGoodsDetail(id) {
    return http.get(`/goods/${id}`)
}

// 修改商品
export function editGoods(id, data) {
    return http.put(`/goods/${id}`, data)
}

// 获取鉴宝列表
export function getAppraisal(query) {
    return http.get('/appraisal', {
        params: query
    })
}

// 上传图片
export function uploadGoods(data) {
    return http.post('/goods', data)
}

export function getShopBanner(id) {
    return http.get(`/shop/${id}/banner`)
}

// 下单接口
export function placeOrder(data) {
    return http.post('/order', data)
}

// 登录背景图
export function loginBG() {
    return http.get('/p/signin-bg/pc')
}

// 店铺搜索商品
export function shopSearchGoods(id, query) {
    return http.get(`/search/shop/${id}/goods`, {
        params: query
    })
}

// 店铺搜索拍卖
export function shopSearchAuction(id, query) {
    return http.get(`/search/shop/${id}/auction-goods`, {
        params: query
    })
}

// 商品下架
export function outGoods(id) {
    return http.post(`/goods/${id}/sold-out`)
}

// 商品上架
export function soldGoods(id) {
    return http.post(`/goods/${id}/sold`)
}

