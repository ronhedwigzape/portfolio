import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/skills',
      component: () => import('../views/Skills.vue')
    }
  ]
})

export default router
