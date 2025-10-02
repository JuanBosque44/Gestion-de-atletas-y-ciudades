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
    {
      path: '/ciudad/form',
      name: 'ciudad-form',
      component: () => import('../views/CiudadForm.vue'),
    },
    {
      path: '/atleta/form',
      name: 'atleta-form',
      component: () => import('../views/AtletaForm.vue'),
    }
  ],
})

export default router
