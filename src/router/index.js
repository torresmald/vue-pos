import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue';
import AdminLayout from '../views/admin/AdminLayout.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
      children: [
        {
          path: 'productos',
          name: 'productos',
          component: () => import('../views/admin/ProductsView.vue')
        },
        {
          path: 'agregar',
          name: 'agregar-producto',
          component: () => import('../views/admin/AgregarProductoView.vue')
        },
        {
          path: 'ventas',
          name: 'ventas',
          component: () => import('../views/admin/VentasView.vue')
        },
      ]
    }
  ]
})

export default router
