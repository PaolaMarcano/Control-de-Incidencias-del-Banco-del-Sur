import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'form_users',
    component: () => import('../views/Form_Users.vue')
  },
  {
    path: '/form_dev',
    name: 'form_dev',
    component: () => import('../views/Form_Dev.vue')
  }, 
  {
    path: '/tickets_user',
    name: 'tickets_user',
    component: () => import('../views/Tickets_User.vue')
  },
  {
    path: '/tickets_dev',
    name: 'tickets_dev',
    component: () => import('../views/Tickets_Dev.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
