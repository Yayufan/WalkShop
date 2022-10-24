"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ajax;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//ajax請求函數模塊封裝,講簡單點就是簡化我們後續對於ajax的操作
//返回值為promise對象(異步返回的數據是:response.data,而不是response)
function ajax(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  return new Promise(function (resolve, reject) {
    //執行異步ajax請求
    //聲明promise對象
    var promise; //如果對象為GET請求

    if (type === 'GET') {
      // 准备 url query 参数数据
      var dataStr = ''; //数据拼接字符串

      Object.keys(data).forEach(function (key) {
        dataStr += key + '=' + data[key] + '&';
      });

      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      } // 发送 get 请求


      promise = _axios["default"].get(url);
    } else {
      // 发送 post 请求
      promise = _axios["default"].post(url, data);
    } //成功了調用resolve()


    promise.then(function (response) {
      resolve(response.data);
    })["catch"](function (error) {
      //失敗了調用reject()
      reject(error);
    });
  });
}