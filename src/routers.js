import SignUp from './pages/SignUp/SignUp.vue'
import OtpPage from './pages/SignUp/OtpPage.vue'
import Recoverpage from './pages/Recoverpage/RecoverPage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [

    {
        name: "SignUp",
        component: SignUp,
        path: "/"

    },
    {
        name: "OtpPage",
        component: OtpPage,
        path: "/OtpPage"

    },
    {
        name: "Recoverpage",
        component: Recoverpage,
        path: "/Recoverpage"

    }


]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router