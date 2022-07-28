
import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import PotentialPage from "./components/pages/PotentialPage.vue";
import AddPage from "./components/pages/AddPage.vue";

const routers = [
    { path: "/", component: PotentialPage},
    { path: "/AddPage", component: AddPage},
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: routers, // short for `routes: routes`
})

createApp(App).use(router).mount('#app')