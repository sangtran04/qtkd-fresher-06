//B1: Cài đặt vue router
//B2: import router 
import { createRouter, createWebHistory } from 'vue-router'
import NewPotential from "../components/pages/NewPotential.vue";
import MainPage from "../components/pages/MainPage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/home", component: MainPage },
        { path: "/add", component: NewPotential }
    ],
})

export default router