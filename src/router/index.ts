import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import QrPage from '../views/QrPage.vue'
import QrGeneratorPage from '../views/QrGeneratorPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/qr-page',
    name: 'QrPage',
    component: QrPage
  },
  {
    path: '/qr-generator-page',
    name: 'QrGeneratorPage',
    component: QrGeneratorPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
