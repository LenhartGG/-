import Vue from 'vue'
import Router from 'vue-router'
import sf_index from '../pages/sf_index'
import login from '../pages/login'
import register from '../pages/register'
import my_center from '../pages/my_center'
import detail from '../pages/detail'
import user from '../pages/user'
import payBond from '../pages/payBond'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: "*",
            redirect: "/"
        },
        {
            path: '/',
            name: 'sf_index',
            component: sf_index
        }, {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/sf_index',
            name: 'sf_index',
            component: sf_index
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/my_center',
            name: 'my_center',
            component: my_center
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },
        {
            path: '/user',
            name: 'user',
            component: user
        },
        {
            path: '/payBond',
            name: 'payBond',
            component: payBond
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log(savedPosition)
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})