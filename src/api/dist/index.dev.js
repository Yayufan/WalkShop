"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqShopList = exports.reqFoodTypes = exports.reqAddress = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//包含N個接口請求函數的模塊
//因為剛剛有封裝ajax過,所以返回的是response.data(響應体數據)
//根據經緯度獲取位置詳情,參數為params,是直接在url中的
// export function reqAddress(geohash) {}  正規寫法
var reqAddress = function reqAddress(geohash) {
  return (0, _ajax["default"])("/position/".concat(geohash));
}; //獲取食物分類列表


exports.reqAddress = reqAddress;

var reqFoodTypes = function reqFoodTypes() {
  return (0, _ajax["default"])('/index_category');
}; //根據經緯度獲取商鋪列表,參數前者為經度,後者為緯度,且是query,這裡ajax封裝過,所以會自動套入&來為query拼接url


exports.reqFoodTypes = reqFoodTypes;

var reqShopList = function reqShopList(longitude, latitude) {
  return (0, _ajax["default"])('/shops', {
    longitude: longitude,
    latitude: latitude
  });
}; //


exports.reqShopList = reqShopList;