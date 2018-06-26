import {
    constants
} from './constants'

export const orderStatusEnum = {
    [constants.ORDER_STATUS_NOPAY]: '待付款',
    [constants.ORDER_STATUS_WAIT_SHIPPING]: '待发货',
    [constants.ORDER_STATUS_WAIT_RECEIVING]: '待收货',
    [constants.ORDER_STATUS_REFUNDING]: '退款中',
    [constants.ORDER_STATUS_COMPLETED]: '已完成',
    [constants.ORDER_STATUS_CLOSED]: '交易关闭'
}