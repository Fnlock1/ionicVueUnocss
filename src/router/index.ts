import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import index from  '../views/index.vue';
import Home from '../views/Home.vue';
import Card from '../views/card.vue';
import statistics from '../views/statistics.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: index,
    children:[
      {
        path: '/',
        component: Home,
      },
      {
        path:"/card",
        component:Card
      },
      {
        path:"/statistics",
        component:statistics
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
