import { getList } from "../const/subApps";
 
// 给当前的路由跳转打补丁
export const patchRouter = (globalEvent, eventName) => {
  return function () {
    const e = new Event(eventName)
    globalEvent.apply(this, arguments)
    window.dispatchEvent(e)
  }
}
export const currentApp = () => {
  const currentUrl = window.location.pathname 
  console.log('window.location',window.location);
  
  return filterApp('activeRule', currentUrl)
}

export const filterApp = (key, value) => {
  const list = getList()
  console.log('filterApp',list,key,value);
  
  const currentApp = list.filter(item => item[key] === value)
  console.log('currentApp',currentApp);

  return currentApp && currentApp.length ? currentApp[0] : {}
}

export const isTurnChild = () => {
  if(window.__CURRENT_SUB_APP__=== window.location.pathname){
    return false
  }
  return true
}
