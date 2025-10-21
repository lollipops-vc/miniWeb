import React, {useEffect} from 'react';
import globalConfig from "../../config/globalConfig.js";
import LoginPanel from "./components/LoginPanel.jsx";
import { main } from '../../utils/global.js'
import axios from 'axios'
import "./index.scss"

const Login = () => {

  useEffect(() => {
    axios.post("http://localhost:3000/react17/login",{a:1,b:2}).then(res => {
      console.log('dengluchengg ');
      
    })
    // 登录页面隐藏头部底部
    // main.appInfo.footerState.changeFooter(false)

    // main.appInfo.headerState.changeHeader(false)
    // main.appInfo.crumbsState.setCrumbs([])
  }, [])

  return (
    <div className="login">
      <img className="loginBackground" src={`${globalConfig.baseUrl}/login-background.png`}/>
      <LoginPanel/>
    </div>
  )
}

export default Login
