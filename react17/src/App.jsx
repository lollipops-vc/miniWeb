import React from 'react';
import BasicMap from './router/index.jsx';  // 导入原有的路由组件
import "./App.scss"
import { setMain } from './utils/global'

class App extends React.Component {
  componentDidMount() {
    // 设置全局主应用
    if (typeof setMain === 'function') {
      setMain(this);
    }
  }

  render() {
    return (
      <div className="app-react">
        <BasicMap />
      </div>
    )
  }
}

export default App;