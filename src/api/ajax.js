
import axios from 'axios'

//ajax請求函數模塊封裝,講簡單點就是簡化我們後續對於ajax的操作
//返回值為promise對象(異步返回的數據是:response.data,而不是response)
export default function ajax(url,data={},type='GET'){
    return new Promise(function (resolve, reject) {
        //執行異步ajax請求
        //聲明promise對象
        let promise
        //如果對象為GET請求
        if (type === 'GET') {
            // 准备 url query 参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送 get 请求
            promise = axios.get(url)
        } else {
            // 发送 post 请求
            promise = axios.post(url, data)
        }
        //成功了調用resolve()
        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            //失敗了調用reject()
            reject(error)
        })
    })
}

