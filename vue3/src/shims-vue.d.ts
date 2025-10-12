declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 为 JavaScript router 模块添加类型声明
declare module '@/router' {
  import type { Router } from 'vue-router'
  const router: Router
  export default router
}

declare module './router' {
  import type { Router } from 'vue-router'
  const router: Router
  export default router
}