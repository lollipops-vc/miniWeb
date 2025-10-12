// 兼容 Vue 2 和 Vue 3 的路由工具函数

/**
 * Vue 2 风格的路由跳转
 */
export const navigateTo = (path, routerInstance) => {
  if (routerInstance) {
    routerInstance.push(path)
  } else if (window.__VUE_APP__?.$router) {
    // 从全局 Vue 实例获取 router
    window.__VUE_APP__.$router.push(path)
  }
}

/**
 * 获取当前路由信息（兼容两种语法）
 */
export const getCurrentRoute = (vm) => {
  if (vm && vm.$route) {
    // Vue 2 语法
    return vm.$route
  } else if (window.__VUE_APP__?.$route) {
    // 从全局获取
    return window.__VUE_APP__.$route
  }
  return null
}

/**
 * 路由参数处理
 */
export const parseRouteParams = (route) => {
  const routeInstance = route || getCurrentRoute()
  return routeInstance ? routeInstance.params : {}
}