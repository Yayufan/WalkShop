//引用模塊
import Vue from 'vue'
import VueRouter from 'vue-router'
//聲明使用插件
Vue.use(VueRouter)
//引入路由組件
import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
export default new VueRouter({
    //所有路由
    routes:[
        {   //首頁路由
            path:'/home',
            component:Home,
            meta:{
                showFooter:true,
            }
        },
        {   //搜尋路由
            path:'/search',
            component:Search,
            meta:{
                showFooter:true,
            }
        },
        {   //訂單路由
            path:'/order',
            component:Order,
            showFooter:true, meta:{
                showFooter:true,
            }
        },
        {   //會員中心路由
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true,
            }
        },
        {   //登入路由
            path:'/login',
            component:Login
        },
        {
            //預設路由(重定向至首頁)
            path:'/',
            redirect:'/home'
        }
    ]
})