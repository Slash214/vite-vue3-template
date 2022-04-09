// 404 路由 or 错误路由

import { RouteRecordRaw } from 'vue-router';

const errorRoutes: Array<RouteRecordRaw> = [
    {
       path: '/401',
       name: '401',
       meta: {
          title: '需要登陆'
       },
       component: () => import('@/views/error/404.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: {
          title: '非常抱歉,页面走丢了',
        },
        component: () => import('@/views/error/404.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      meta: {},
      redirect: '/404',
    },
]

export default errorRoutes