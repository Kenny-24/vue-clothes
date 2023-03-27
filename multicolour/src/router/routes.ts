import {
    RouteRecordRaw
  } from 'vue-router'
  import Home from '@/views/home.vue'
  
  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/vuex',
    //   name: 'Vuex',
    //   component: Vuex
    // },
    // {
    //   path: '/axios',
    //   name: 'Axios',
    //   component: () => import('@/views/axios.vue') // 懒加载组件
    // }
  ]

export default routes;
