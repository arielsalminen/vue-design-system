import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/templates/Dashboard'
import Posts from '@/templates/Posts'
import Settings from '@/templates/Settings'
import NotFound from '@/templates/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/posts/',
      name: 'Posts',
      component: Posts
    },
    { path: '/settings/',
      name: 'Settings',
      component: Settings
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
