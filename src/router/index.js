import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/page/Home/Home.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
