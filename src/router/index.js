import { createWebHistory, createRouter } from "vue-router"
import Home from '../components/HelloWorld.vue'
import Beli from '../views/Infomotor.vue';
import Beli2 from '../views/Kalkulasi.vue';

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/beli',
        name: 'beli',
        component: Beli,
        Beli2
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router