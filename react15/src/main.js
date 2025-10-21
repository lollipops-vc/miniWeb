import React from 'react'
import ReactDOM from 'react-dom'
import { setMain } from './utils/global'
import App from './App.jsx'

// 安全初始化全局变量
if (typeof window !== 'undefined') {
  window.react15 = window.react15 || {}
}

const render = (props = {}) => {
  const { container } = props
  const targetContainer = container 
    ? (typeof container === 'string' ? document.querySelector(container) : container)
    : document.getElementById('app-react')

  // 添加错误处理
  if (!targetContainer) {
    console.error('❌ React15: 挂载容器未找到')
    return
  }

  // React 15 渲染
  ReactDOM.render(React.createElement(App), targetContainer)

  // 正确的全局挂载
  window.react15 = {
    React,
    ReactDOM,
    App, // 使用组件类
    bootstrap,
    mount,
    unmount,
    version: React.version,
    createElement: React.createElement,
    // 添加有用的工具方法
    render: (component, target) => {
      return ReactDOM.render(component, target)
    }
  }

  console.log('✅ React15 应用启动成功，版本:', React.version)
}

// 微前端生命周期 - 启动
export async function bootstrap() {
  console.log('🚀 react15 bootstrap')
}

// 微前端生命周期 - 挂载
export async function mount(props) {
  console.log('📍 react15 mount', props)
  setMain(props)
  render(props)
}

// 微前端生命周期 - 卸载
export async function unmount(props) {
  console.log('🗑️ react15 unmount', props)
  const { container } = props
  
  let containerElement = container
    ? (typeof container === 'string' ? document.querySelector(container) : container)
    : document.getElementById('app-react')
  
  // 简化清理逻辑
  if (containerElement) {
    ReactDOM.unmountComponentAtNode(containerElement)
    // 移除多余的 innerHTML 清理
  }
  
  // 可选：清理全局变量
  // delete window.react15
}

// 独立运行 - 添加多重环境检测
if (!window.__MICRO_WEB__ && !window.__POWERED_BY_QIANKUN__) {
  render()
}

export default App