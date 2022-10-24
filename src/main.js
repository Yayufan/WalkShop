import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/mockServer'  //加載寫好的mockServer
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
