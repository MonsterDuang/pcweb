import http from '../util/http'

// 获取直播列表
export function getLvsList(query) {
    return http.get('/lvs', {
        params: query
    })
}

// 设置直播推荐商品
export function setLvsGoods(id, reqData) {
    return http.post(`/goods/${id}/lvs/recommend`, reqData)
}

// 获取直播推荐商品
export function getLvsGoods(id) {
    return http.get(`/api/lvs/${id}/goods`)
}