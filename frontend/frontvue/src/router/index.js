import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Productos from '../views/Productos.vue'
import Usuarios from '../views/Usuarios.vue'
import Error from '@/views/Error404';
import Information from '../views/Informacion.vue'

const routes = [

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/dashboard/users/save/:id",
        name: "UserUpdate",
        component: () => import("../components/Users/Save.vue"),
      },
      {
        path: "/dashboard/productos/save/:id",
        name: "ProductUpdate",
        component: () => import("../components/Products/Save.vue"),
      },
    ],

  },
  {
    path: '/information',
    name: 'Information',
    component: Information,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios,
    meta: { requiresAuth: true }
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos,
    meta: { requiresAuth: true },
  },

  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: Error,
    meta: { requiresAuth: false }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router