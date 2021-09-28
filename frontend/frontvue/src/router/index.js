import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Creacion from '../views/Creacion.vue'
import Productos from '../views/Productos.vue'
import Usuarios from '../views/Usuarios.vue'






const routes = [

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/loging',
    name: 'Login',
    component: Login
  },
  {
    path: '/crearusuario',
    name: 'Creacion',
    component: Creacion
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios,
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth){
    if (!localStorage.getItem('token')) {
      next({
        name: 'Login'
      });      
    }else{
      next()
    }

  }else{
    next();
  }
});

export default router
