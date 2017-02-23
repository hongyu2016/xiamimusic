import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '../views/index.vue'
import bangList from '../views/bangList.vue'
import searchList from '../views/searchList.vue'
export default new Router({
    base:__dirname,
    //linkActiveClass:"my-active", //自定义 路由选中类
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
        path: '/index',
        name: 'index',
        component: index
    },
    {
        path: '/bangList',
        name: 'bangList',
        component: bangList
    },
    {
        path: '/searchList',
        name: 'searchList',
        component: searchList
    },
    /*{
        path:'*',
        redirect:'/index'
    }*/
  ]
})
