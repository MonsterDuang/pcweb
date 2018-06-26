import http from '../util/http'

// 获取平台分类
export function getCategories() {
    return http.get('/categories')
}

export function getCustomer() {
    return http.get('/p/contact-number')
}