import Vue from 'vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/Home'
import news from '@/components/News'

Vue.use(Router)
Vue.use(MintUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/news',
      name: 'news',
      component: news
    }
  ]
})
