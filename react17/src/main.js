import React from 'react'
import ReactDOM from 'react-dom'
import { setMain } from './utils/global'
import App from './App.jsx'

// 扩展 Window 接口
if (typeof window !== 'undefined') {
  window.react17 = window.react17 || {}
}

const render = (props = {}) => {
  const { container } = props
  const targetContainer = container 
    ? (typeof container === 'string' ? document.querySelector(container) : container)
    : document.getElementById('app-react')

  if (!targetContainer) {
    console.error('挂载容器未找到')
    return
  }

  // React 17 渲染
  ReactDOM.render(React.createElement(App), targetContainer)

  // 挂载到 window.react17
  window.react17 = {
    React,
    ReactDOM,
    App, // 组件类
    bootstrap,
    mount,
    unmount,
    version: React.version,
    // 添加渲染方法以便外部使用
    render: (component, target) => {
      return ReactDOM.render(component, target)
    }
  }

  console.log('React17 应用启动成功，版本:', React.version)
}

// 微前端生命周期
export async function bootstrap() {
  console.log('🚀 react17 bootstrap')
}

export async function mount(props) {
  console.log('📍 react17 mount', props)
  setMain(props)
  render(props)
}

export async function unmount(props) {
  console.log('🗑️ react17 unmount', props)
  const { container } = props
  
  let containerElement = container
    ? (typeof container === 'string' ? document.querySelector(container) : container)
    : document.getElementById('app-react')
  
  if (containerElement) {
    ReactDOM.unmountComponentAtNode(containerElement)
  }
  
  // 可选：清理全局变量
  // delete window.react17
}

// 独立运行
if (!window.__MICRO_WEB__ && !window.__POWERED_BY_QIANKUN__) {
  render()
}

export default App