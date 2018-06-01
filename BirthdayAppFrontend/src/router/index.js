import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Login from '@/components/pages/Login/Login'
import Birthday from '@/components/pages/Birthday/Birthday'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/checkBirthday',
      name: 'Birthday',
      component: Birthday
    },
  ]
})
