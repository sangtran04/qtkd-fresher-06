//B1: Cài đặt vue router
//B2: import router 
import { createRouter, createWebHashHistory } from 'vue-router'
import NewPotential from "../components/pages/NewPotential.vue";



const routes = [
    { path: "/add", component: NewPotential },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router