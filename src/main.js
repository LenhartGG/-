// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import qs from 'qs'
import ElementUI from 'element-ui'
import VueVideoPlayer from 'vue-video-player'
import md5 from 'js-md5'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store.js'
import base from './assets/js/base/base.js'
import headernav from './components/header'
import footernav from './components/footer'
import recordMsg from './components/recordMsg'
import './assets/css/init.css'


// 以下是注册组件的方法
Vue.component('headernav', headernav)
Vue.component('footernav', footernav)
Vue.component('recordMsg', recordMsg)

Vue.use(ElementUI)
Vue.use(VueVideoPlayer)
Vue.use(VueAwesomeSwiper)
Vue.use(base)
Vue.prototype.$md5 = md5;
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    VueAwesomeSwiper,
    components: { App },
    template: '<App/>'
})