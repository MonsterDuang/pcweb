import {
    orderStatusEnum
} from '../common/enums'
import {
    dateFormat
} from '../util/index'


function backTop() {
    document.documentElement.scrollTop = document.body.scrollTop = 0
}

function getOrderStatus(status) {
    return orderStatusEnum[status]
}

function install(Vue) {
    Vue.mixin({
        methods: {
            $_dateFormat: dateFormat,
            $_backTop: backTop,
            $_orderStatusEnum: getOrderStatus
        }
    })
}

export default {
    install
}