import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ciudad',
      name: 'ciudad',
      component: () => import('../views/CiudadView.vue'),
    },
    {
      path: '/atleta',
      name: 'atleta',
      component: () => import('../views/AtletaView.vue'),
    },
  ],
})

export default router
