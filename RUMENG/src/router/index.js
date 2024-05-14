import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'notFound',
            path: '/404',
            component: () => import('../views/ErrorView.vue')
        },
        {path: '/:pathMatch(.*)', redirect: '/404'},

        {
            name: 'home',
            path: '/',
            component: () => import('../views/HomeView.vue'),
            meta: {requireAuth: false},
        },
        {
            name: 'about',
            path: '/about',
            component: () => import('../views/AboutUs.vue'),
            meta: {requireAuth: false},
        },
        {
            name: 'store',
            path: '/store',
            component: () => import('../views/StoreView.vue'),
            meta: {requireAuth: true},
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('../views/LoginView.vue'),
            meta: {requireAuth: false},
        }

    ],
    scrollBehavior(to, from, savedPosition) {
        // 重置路由后的滚动位置
        // return 期望滚动到哪个的位置
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    }
})

router.beforeEach((to, from) => {
    // 而不是去检查每条路由记录
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requireAuth && !localStorage.getItem('token')) {
        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        return {
            path: '/login',
            // 保存我们所在的位置，以便以后再来
            query: {redirect: to.fullPath},
        }
    }
})
export default router
