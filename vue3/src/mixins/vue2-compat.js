// 为 Vue 3 提供 Vue 2 风格的全局混入
export const vue2CompatMixin = {
  beforeCreate() {
    // 确保在组件中可以使用 this.$router 和 this.$route
    if (this.$options.router) {
      this._routerRoot = this
      this._router = this.$options.router
      this._router.init(this)
    } else {
      this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
    }
  },
  
  computed: {
    $router() {
      return this._routerRoot._router
    },
    $route() {
      return this._routerRoot._route
    }
  }
}