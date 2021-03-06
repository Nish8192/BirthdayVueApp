// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import('../node_modules/vuetify/dist/vuetify.min.css')

import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.use(Vuetify)

Vue.config.productionTip = false

// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8081'
// Vue.http.headers.common['Access-Control-Request-Method'] = '*'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
