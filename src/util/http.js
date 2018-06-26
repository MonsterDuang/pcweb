import axios from 'axios'
import {
    guid
} from '../util'

axios.jsonp = function (url, callbackName) {
    if (!url) return new Error("url is jsonp request required")
    callbackName = callbackName || "callback_" + guid()
    url = url.indexOf("?") > 0 ? `${url}&callback=${callbackName}` : `${url}?callback=${callbackName}`

    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text\/javascript"
        script.onerror = function (err) {
            reject(err)
        }
        document.head.appendChild(script)
        window[callbackName] = function (data) {
            delete window[callbackName]
            document.head.removeChild(script)
            resolve(data)

        }
        script.src = url;
    })
}

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    if (error.response.data instanceof Array) {
        error.resMessage = error.response.data.map((m) => {
            return m.message
        }).join(',');
    } else {
        error.resMessage = '服务器异常，请稍后再试'
    }
    return Promise.reject(error);
});

export default axios