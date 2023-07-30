import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/Main.vue'
import Obrigado from '../views/Obrigado.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/obrigado', component: Obrigado },


  { path: "/:pathMatch(.*)*", component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;