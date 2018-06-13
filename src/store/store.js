import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import common from '../assets/js/store/common.js'; //引入某个store对象

export default new vuex.Store({
    modules: {
        common: common
    }
})