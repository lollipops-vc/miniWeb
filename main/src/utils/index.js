import { registerMicroApps, start } from '../../micro/start'
export const registerApp = (list)=>{
  // 注册到微前端框架里
  registerMicroApps(list)
  // 开启微前端框架
  start()
}
