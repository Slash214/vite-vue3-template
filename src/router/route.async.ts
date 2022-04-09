import { RouteRecordRaw } from "vue-router";

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: {},
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: '首页', icon: ''},
    component: () => import('views/home/index.vue')
  },
  {
    path: '/article',
    name: 'article',
    meta: { title: '文章', icon: ''},
    component: () => import('views/article/index.vue')
  }
]

export default asyncRoutes