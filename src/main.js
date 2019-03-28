import Vue from 'vue'
import App from './App.vue'
// 全局引入样式
import './assets/statics/site/css/style.css'
// Vue.config.productionTip = false
// 路由相关
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//统一设置axois
import axios from 'axios'
Vue.prototype.$axios = axios

//设置基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899'
    //导入组件
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'

//规则
let routes = [{
    path: '/',
    component: index
}, {
    path: '/index',
    component: index
}, {
    path: '/cart',
    component: cart
}, {
    path: '/detail/:id',
    component: detail
}]
let router = new VueRouter({
    routes
})
new Vue({
    el: '#app',
    render: h => h(App),
    router
})