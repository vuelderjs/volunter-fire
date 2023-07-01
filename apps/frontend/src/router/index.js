// Composables
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/Default.vue'

import { AuthorizationPage } from '@/modules/authorization'
import { HomePage } from '@/modules/home'


const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: AuthorizationPage,
      },
      {
        path: '/home',
        name: 'home',
        component: HomePage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
