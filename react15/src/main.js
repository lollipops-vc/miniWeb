import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'

// React 15 的渲染方式
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app-react')
)