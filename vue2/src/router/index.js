import Vue from 'vue'
import VueRouter from 'vue-router'
import Energy from "../views/energy/index.vue"
Vue.use(VueRouter)

// const baseUrl = '/vue2'

const routes = [
  {
    // 根路径重定向到 energy
    path: '/',
    redirect: '/energy'
  },
  {
    // 新能源
    path: '/energy',
    name: 'Energy',
    component: Energy
  },
]

const router = new VueRouter({
  mode: 'hash',
  // base: baseUrl,
  routes
})

export default router
