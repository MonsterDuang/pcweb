import http from '../util/http'

// 查询拍卖会列表
export function getAuctionVideoList(query) {
    return http.get('/auction', {
        params: query
    })
}

// 获取竞拍商品列表
export function getAuctionList(query) {
    return http.get('/auction-goods', {
        params: query
    })
}

// 获取竞拍商品
export function getAuctionDetail(id) {
    return http.get(`/auction-goods/${id}`)
}

// 获取拍卖会详情
export function getAuction(id) {
    return http.get(`/auction/${id}`)
}

// 发起竞拍
export function addAuction(data) {
    return http.post(`/auction-goods`, data)
}

// 编辑竞拍
export function editAuction(id, data) {
    return http.put(`/auction-goods/${id}`, data)
}

// 下架竞拍
export function outAuction(id) {
    return http.post(`/auction-goods/${id}/sold-out`)
}

// 上架竞拍
export function soldAuction(id) {
    return http.post(`/auction-goods/${id}/sold`)
}
// 
export function appraise(id, data) {
    return http.post(`/appraisal/${id}/result`, data)
}