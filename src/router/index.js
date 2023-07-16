import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const DefaultLayout = defineAsyncComponent(() =>
  import('@/layouts/DefaultLayout.vue')
)
const AdminLayout = defineAsyncComponent(() =>
  import('@/layouts/AdminLayout.vue')
)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: { layout: DefaultLayout },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/pages/Admin.vue'),
    meta: { layout: AdminLayout },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
