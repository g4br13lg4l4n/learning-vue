import Vue from 'vue'
import Router from 'vue-router'
import perfil from '../pages/perfil'
import home from '../pages/home'
import contacto from '../pages/contacto'


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
    {
      path: '/contacto',
      component: contacto
    }
  ]
})