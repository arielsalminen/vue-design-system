// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import WebFont from 'webfontloader'

Vue.config.productionTip = false

WebFont.load({
  google: {
    families: ['Fira+Sans:400,400i,600,700']
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
