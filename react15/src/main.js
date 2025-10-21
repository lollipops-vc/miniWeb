import React from 'react'
import ReactDOM from 'react-dom'
import { setMain } from './utils/global'
import App from './App.jsx'

let appInstance = null
const render = (container) => {
  const targetContainer = container || document.getElementById('app-react')
  // React 15 的渲染方式
ReactDOM.render(
  React.createElement(App),
  targetContainer
)
// 挂载到 window.react15 供外部访问
  window.react15 = {
    React,
    ReactDOM,
    app: appInstance,
    bootstrap,
    mount,
    unmount
  }

  console.log('React15 应用已挂载到 window.react15:', window.react15)
}


// 微前端生命周期 - 启动
export async function bootstrap() {
  console.log('react15 bootstrap')
}

// 微前端生命周期 - 挂载
export async function mount(app) {
  console.log('react15 mount', app)
  setMain(app) // 记录主应用传过来的方法
  
  let container = null
  if (app && app.container) {
    container = typeof app.container === 'string' 
      ? document.querySelector(app.container) 
      : app.container
  }
  
  render(container)
}

// 微前端生命周期 - 卸载
export async function unmount(ctx) {
  console.log('react15 unmount', ctx)
  
  const { container } = ctx
  let containerElement = null
  
  if (container) {
    containerElement = typeof container === 'string' 
      ? document.querySelector(container) 
      : container
  }
  
  // 卸载 React 应用
  if (containerElement) {
    ReactDOM.unmountComponentAtNode(containerElement)
    containerElement.innerHTML = ''
  } else if (appInstance) {
    // 备用卸载方式
    const defaultContainer = document.getElementById('app-react')
    if (defaultContainer) {
      ReactDOM.unmountComponentAtNode(defaultContainer)
    }
  }
  
  appInstance = null
  // 清理全局变量
  delete window.react15
}
// 独立运行
if (!window.__MICRO_WEB__) {
  render()
}

export default appInstance