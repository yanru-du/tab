import { createRouter, createWebHistory } from 'vue-router'
import Home from "../view/tab/Home"
const routes = [
  {
    path:'',
    redirect:'/home'
  },{
    path:'/home',
    component:Home
  },{
    path:"/profile",
    component: () => import('../view/tab/Profile')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
