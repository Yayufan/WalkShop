"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

var _data = _interopRequireDefault(require("./data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//使用mockjs提供mock數據街口
//引入數據模板
//返回商品(goods)的接口
_mockjs["default"].mock('/goods', {
  code: 0,
  data: _data["default"].goods
}); //返回ratings的接口


_mockjs["default"].mock('/ratings', {
  code: 0,
  data: _data["default"].ratings
}); //返回info的接口


_mockjs["default"].mock('/info', {
  code: 0,
  data: _data["default"].info
}); //不須向外暴露任何數據即可使用,