import { createRouter, createWebHistory } from 'vue-router'

import FormAdd from '../components/pages/FormAdd.vue'
import MainPage from '../components/pages/MainPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/formAdd', component: FormAdd },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
