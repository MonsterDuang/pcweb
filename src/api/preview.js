import http from '../util/http'

// 预展商家列表
export function getPreviewShops(query) {
    return http.get('/preview/shops', {
        params: query
    })
}

// 预展商品详情
export function getPreviewGoods(id) {
    if (!id) throw new Error('id must be a required')
    return http.get(`/preview/goods/${id}`)
}

// 预展商家商品列表
export function getPreviewGoodsList(id, query) {
    if (!id) throw new Error('id must be a required')
    return http.get(`/preview/shops/${id}/goods`, {
        params: query
    })
}

export function getPreviewShop(id) {
    if (!id) throw new Error('id must be a required')
    return http.get(`/preview/shops/${id}`)
}