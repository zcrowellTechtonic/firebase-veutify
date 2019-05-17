import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from './views/Login'
import Home from './views/Home'
import SignUp from './views/SignUp'

import VueChartJS from './views/VueChartJS'
import ProjectInfo from './views/ProjectInfo'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/chartjs',
      name: 'VueChartJS',
      component: VueChartJS,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/projectinfo',
      name: 'ProjectInfo',
      component: ProjectInfo,
      meta: {
        requiresAuth: true
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router
