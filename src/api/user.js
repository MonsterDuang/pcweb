import http from '../util/http'

// 获取验证码
export function getOTP(reqData) {
    return http.post('/otp', reqData)
}

// 注册
export function registerUser(reqData) {
    return http.post('/auth/signup', reqData)
}

// 修改密码 
export function editPassword(reqData) {
    return http.put('/auth/user/password', reqData)
}

// 退出登录
export function logout() {
    return http.get('/auth/signout')
}

// 修改用户信息
export function changeUserInfo(reqData) {
    return http.put('/auth/user', reqData)
}
// 登录
export function login(reqData) {
    return http.post('/auth/signin', reqData)
}

// 登录态存在的情况下获取用户信息
export function getUserInfo() {
    return http.get('/my')
}

// 忘记密码
export function forgetPassword(reqData) {
    return http.post('/auth/user/password/forget', reqData)
}

// 绑定手机
export function bindPhone(reqData) {
    return http.post('/auth/phone/bind', reqData)
}