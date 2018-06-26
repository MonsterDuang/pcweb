import http from '../util/http'

// 我的寄售
export function getSaleList(query) {
    return http.get('/my/goods/sale', {
        params: query
    })
}

// 我的地址
export function getAddressList() {
    return http.get('/my/address-books')
}

// 增加地址 
export function addAddress(data) {
    return http.post('/my/address-books', data)
}

// 删除地址
export function removeAddress(id) {
    return http.delete(`/my/address-books/${id}`)
}

// 修改地址
export function editAddress(id, data) {
    return http.put(`/my/address-books/${id}`, data)
}

// 获取买家订单列表
export function getMyOrderList(query) {
    return http.get('/my/order', {
        params: query
    })
}

// 我的商品
export function getMyGoodsList(query) {
    return http.get('/my/goods', {
        params: query
    })
}

// 删除订单
export function rmOrder(id) {
    return http.delete(`/my/order/${id}`)
}

// 获取商家订单
export function getMyBusOrder(query) {
    return http.get('/my/order/shop', {
        params: query
    })
}

// 获取寄售订单
export function getMyConsignOrder(query) {
    return http.get('/my/order/consign', {
        params: query
    })
}

// 我的寄售钱包
export function getMyWalletSale() {
    return http.get('/my/wallet/sale')
}

// 我的鉴定钱包
export function getMyWalleAppraisal() {
    return http.get('/my/wallet/appraisal')
}

// 我的保证金
export function getMyMarginMoney() {
    return http.get('/my/wallet/marginMoney')
}

// 我的鉴定列表
export function getMyAppraisal(query) {
    return http.get('/my/appraisal', {
        params: query
    })
}

// 我的拍卖
export function getMyAuctionGoods(query) {
    return http.get('/my/auction-goods', {
        params: query
    })
}

// 订单统计
export function getOrderStatistics() {
    return http.get('/my/shop/statistics/order')
}

// 收入统计
export function getIncomeStatistics() {
    return http.get('/my/shop/statistics/income')
}

// 获取我的寄售统计数据
export function getSaleStatistics() {
    return http.get('/my/order/statistics/status')
}

// 获取订单信息
export function getOrderInfo(id) {
    return http.get(`/my/order/${id}`)
}

// 退货退款
export function orderRefund(id, data) {
    return http.post(`/my/order/${id}/refund`, data)
}

// 确认收货
export function confirmOrder(id) {
    return http.post(`/my/order/${id}/confirm`)
}

// 取消订单
export function cancelOrder(id) {
    return http.post(`/my/order/${id}/cancel`)
}

// 退款处理
export function refundHandle(id, data) {
    return http.post(`/my/order/${id}/refund/result`, data)
}

// 获取消息列表
export function getMessageList(query) {
    return http.get('/message', {
        params: query
    })
}

// 获取消息
export function getMessageDetail(id) {
    return http.get(`/message/${id}`)
}

// 发货
export function orderShipping(id, data) {
    return http.post(`/my/order/${id}/shipping`, data)
}

// 修改店铺信息
export function editShopInfo(data) {
    return http.put('/my/shop', data)
}

// 修改店铺信息
export function getShopInfo() {
    return http.get('/my/shop')
}