"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../pages/Home/Home.vue"));

var _Search = _interopRequireDefault(require("../pages/Search/Search.vue"));

var _Order = _interopRequireDefault(require("../pages/Order/Order.vue"));

var _Profile = _interopRequireDefault(require("../pages/Profile/Profile.vue"));

var _Login = _interopRequireDefault(require("../pages/Login/Login.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//引用模塊
//聲明使用插件
_vue["default"].use(_vueRouter["default"]); //引入路由組件


var _default = new _vueRouter["default"]({
  //所有路由
  routes: [{
    //首頁路由
    path: '/home',
    component: _Home["default"],
    meta: {
      showFooter: true
    }
  }, {
    //搜尋路由
    path: '/search',
    component: _Search["default"],
    meta: {
      showFooter: true
    }
  }, {
    //訂單路由
    path: '/order',
    component: _Order["default"],
    showFooter: true,
    meta: {
      showFooter: true
    }
  }, {
    //會員中心路由
    path: '/profile',
    component: _Profile["default"],
    meta: {
      showFooter: true
    }
  }, {
    //登入路由
    path: '/login',
    component: _Login["default"]
  }, {
    //預設路由(重定向至首頁)
    path: '/',
    redirect: '/home'
  }]
});

exports["default"] = _default;