export const constants = {
    BASE_API_URL: '/api',
    // 商户
    USER_TYPE_SHOP: 'shop',
    // 鉴定师
    USER_TYPE_APPRAISER: 'appraiser',
    // 普通用户
    USER_TYPE_USER: 'user',
    // pc
    CHANNEL_PC: 'pc',
    // 手机登录
    SSOURCE_PHONE: 'phone',
    // 微信登录
    SOURCE_WECHAT: 'wechat',
    // qq登录
    SOURCE_QQ: 'qq',
    // 验证码
    PASSWORD_TYPE_OTP: 'otp',
    // 验证码类型
    PASSWORD_TYPE_P: 'p',
    // 验证码--注册
    OTP_TYPE_SIGNUP: 'signup',
    // 验证码--登录
    OTP_TYPE_SIGNIN: 'signin',
    // 验证码--绑定
    OTP_TYPE_BIND: 'bind',
    // 验证码--重置密码
    OTP_TYPE_RESETPWD: 'resetpwd',
    // 加密iv
    PASS_IV: 'YFGIVPARAMETERAA',
    // 加密key
    PASS_KEY: 'YFGPASSWORDAAAAA',
    // 支付宝支付接口
    ALI_PAY_URI: 'https://openapi.alipay.com/gateway.do?',
    // 微信appid
    WX_APP_ID: 'wx0db5aa034455d42b',
    // 微信登录接口
    WX_AUTH_URI: 'https://open.weixin.qq.com/connect/qrconnect?appid={APPID}&redirect_uri={REDIRECT_URI}&response_type=code&scope=snsapi_login&state={STATE}#wechat_redirect',
    // 微信登录重定向地址
    WX_REDIRECT_URI: 'http://www.aworld.cn/#/login',
    BUSINESS_WX_REDIRECT_URI: 'https://www.aworld.xyz/pcweb/businessmanage/businessstore',
    // qq开放平台id
    QQ_APP_ID: '101451102',
    // qq登录接口
    QQ_AUTH_URI: 'https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id={APPID}&redirect_uri={REDIRECT_URI}&state={STATE}',
    // qq登录重定向地址
    QQ_REDIRECT_URI: 'https://www.aworld.xyz/pcweb/home/index',
    BUSINESS_QQ_REDIRECT_URI: 'https://www.aworld.xyz/pcweb/businessmanage/businessstore',
    // 微信、qq登录 state session key
    STATE_KEY: 'state',
    // 订单状态--未付款
    ORDER_STATUS_NOPAY: 'nopay',
    // 订单状态--待发货
    ORDER_STATUS_WAIT_SHIPPING: 'wait-shipping',
    // 订单状态--待收货
    ORDER_STATUS_WAIT_RECEIVING: 'wait-receiving',
    // 订单状态--退款中
    ORDER_STATUS_REFUNDING: 'refunding',
    // 订单状态--已完成
    ORDER_STATUS_COMPLETED: 'completed',
    // 订单状态--已关闭
    ORDER_STATUS_CLOSED: 'closed'
}