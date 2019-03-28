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
    //导入饿了么ui
import ElementUI from 'element-ui'
//导入饿了么ui样式
import 'element-ui/lib/theme-chalk/index.css'
// vue插件
Vue.use(ElementUI)
    //全局过滤器
import moment from 'moment'
Vue.filter('globalFormatTime', function(value, fmtTemplate) {
        if (fmtTemplate) {
            return moment(value).format(fmtTemplate)
        } else {
            return moment(value).format('YYYY-MM-DD')
        }
    })
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