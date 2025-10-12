

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { vue2CompatMixin } from './mixins/vue2-compat'
const app = createApp(App)
app.use(router) 
app.use(createPinia())
// 注册全局混入（提供 Vue 2 兼容性）
app.mixin(vue2CompatMixin)
// 为了兼容 Vue 2 语法，可以添加全局属性
app.config.globalProperties.$router = router
app.mount('#app')
