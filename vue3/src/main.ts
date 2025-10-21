import { createApp, App as AppType } from 'vue'
import { createPinia, Pinia } from 'pinia'
import { Router } from 'vue-router'
import App from './App.vue'
import router from './router'
import { vue2CompatMixin } from './mixins/vue2-compat'
import { setMain } from './utils/global'

// 扩展 Window 接口 - 将 vue3 改为可选属性
declare global {
  interface Window {
    vue3?: Vue3AppInstance; // 添加 ? 使其成为可选属性
    __MICRO_WEB__?: boolean;
    __POWERED_BY_QIANKUN__?: boolean;
  }
}

// 定义应用实例接口
interface Vue3AppInstance {
  app: AppType;
  router: Router;
  pinia: Pinia;
  config: any;
  version: string;
  $router: Router;
  // 添加生命周期函数
  bootstrap: () => Promise<void>;
  mount: (props: any) => Promise<any>;
  unmount: (ctx: any) => Promise<void>;
}

// 微前端容器上下文接口
interface MicroAppContext {
  container?: HTMLElement | string;
  [key: string]: any;
}

let app: AppType | null = null

// 渲染函数
function render(props?: MicroAppContext) {
  app = createApp(App)
  
  // 使用路由和状态管理
  app.use(router) 
  const pinia = createPinia()
  app.use(pinia)

  // 注册全局混入（提供 Vue 2 兼容性）
  app.mixin(vue2CompatMixin)

  // 为了兼容 Vue 2 语法，可以添加全局属性
  app.config.globalProperties.$router = router

  // 确定挂载容器
  let container: string | Element = '#app'
  if (props?.container) {
    if (typeof props.container === 'string') {
      container = props.container
    } else {
      container = props.container.querySelector('#app') as Element || '#app'
    }
  }

  // 挂载到 DOM
  app.mount(container)

  // 挂载到 window.vue3 供外部访问，包含生命周期函数
  const vue3Instance: Vue3AppInstance = {
    app,
    router,
    pinia,
    config: app.config,
    version: app.version,
    $router: router,
    // 添加生命周期函数引用
    bootstrap,
    mount,
    unmount
  }

  window.vue3 = vue3Instance

  // 开发环境下输出日志
  console.log('Vue3 应用已挂载到 window.vue3:', window.vue3)

  return app
}

// 微前端生命周期 - 启动
export async function bootstrap() {
  console.log('vue3.0 app bootstrap')
}

// 微前端生命周期 - 挂载
export async function mount(props: MicroAppContext) {
  console.log('vue3.0 app mount', props)
  setMain(props.app || props)
  return render(props)
}

// 微前端生命周期 - 卸载
export async function unmount(ctx: MicroAppContext) {
  console.log('vue3.0 app unmount', ctx)
  
  if (app) {
    app.unmount()
    app = null
  }
  
  const { container } = ctx
  if (container) {
    const containerElement = typeof container === 'string' 
      ? document.querySelector(container) 
      : container
    if (containerElement) {
      containerElement.innerHTML = ''
    }
  }
  
  // 清理全局变量 - 现在可以安全删除了
  delete window.vue3
}

// 独立运行
if (!window.__MICRO_WEB__ && !window.__POWERED_BY_QIANKUN__) {
  render()
}

export default app