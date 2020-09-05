import Vue from 'vue'
import Router from 'vue-router'
import perfil from '../pages/perfil.vue'
import home from '../pages/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      //name: 'App',
      component: home
    },
    { 
      path: '/perfil',
      //name: 'perfil',
      component: perfil 
    },
  ]
})