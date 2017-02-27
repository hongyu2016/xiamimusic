import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '../views/index.vue'
import bangList from '../views/bangList.vue'
import aliBangList from '../views/aliBangList.vue'
import searchList from '../views/searchList.vue'
import bangDetailList from '../views/bangDetailList.vue'
export default new Router({
    base:__dirname,
    linkActiveClass:"my-active", //自定义 路由选中类
  routes: [
    /*{
      path: '/',
      name: 'index',
      component: index
    },*/
    {
        path: '/index',
        name: 'index',
        component: index
    },
      //榜单分类列表
    {
        path: '/bangList',
        name: 'bangList',
        component: bangList
    },
      //阿里榜单分类列表
     /* {
          path: '/aliBangList',
          name: 'aliBangList',
          component: aliBangList
      },*/
      //虾米榜单歌曲列表
      {
          path: '/bangList/topid/:topid',
          name: 'xDetailList',
          component: bangDetailList
      },
      //阿里榜单歌曲列表
      /*{
          path: '/aliBangList/type/:type/song_type/:song_type',
          name: 'aliDetailList',
          component: bangDetailList
      },*/
    {
        path: '/searchList',
        name: 'searchList',
        component: searchList
    },
    {
        path:'*',
        redirect:'/index'
    }
  ]
})
