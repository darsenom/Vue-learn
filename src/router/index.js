import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CardIdPage from '@/views/CardIdPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

    {
      path: '/car/:id',
      name: 'cardId',
      component: CardIdPage
    },
  ]
})

export default router;

// const routes =[
//   {
//     path: '/home',
//     component: HomeView
//   }
// ]

// const router = createRouter({
//   routes,
//   history: createWebHistory(import.meta.env.BASE_URL),
// })

// export default router;