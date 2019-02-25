/* eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App'
import Index from '@/pages/index.vue'
import List from '@/pages/list.vue'
import Detail from '@/pages/detail.vue'
Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: "index",
      redirect: to => {
        return '/main'
      }
    },
    {
      path: '/main',
      name: "main",
      component: Index
    },
  {
      path: '/list',
      name: 'list',
      component: List
  },
  {
      path: '/detail',
      name: 'detail',
      component: Detail
  }
  ]
})
