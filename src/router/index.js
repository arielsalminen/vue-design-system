import Vue from 'vue'
import Router from 'vue-router'
import Styleguide from '@/templates/Styleguide'
import Template1 from '@/templates/Template1'
import Template2 from '@/templates/Template2'
import Template3 from '@/templates/Template3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Styleguide',
      component: Styleguide
    },
    {
      path: '/templates/1/',
      name: 'Template1',
      component: Template1
    },
    {
      path: '/templates/2/',
      name: 'Template2',
      component: Template2
    },
    {
      path: '/templates/3/',
      name: 'Template3',
      component: Template3
    }
  ]
})
