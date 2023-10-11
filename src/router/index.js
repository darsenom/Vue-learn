import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CardIdPage from '@/views/CardIdPage.vue'
import CardPage from '@/views/CardPage.vue'
import CarTablePage from '@/views/CarTablePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

    {
      path: '/cardpage/:id',
      name: 'cardId',
      component: CardIdPage
    },
    
    {
      path: '/cardpage',
      name: 'cardPage',
      component: CardPage
    },   

    {
      path: '/cardtable',
      name: 'CarTable',
      component: CarTablePage
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