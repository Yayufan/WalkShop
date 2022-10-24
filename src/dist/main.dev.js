"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

require("./mock/mockServer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//加載寫好的mockServer
_vue["default"].config.productionTip = false;
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"]
}).$mount('#app');