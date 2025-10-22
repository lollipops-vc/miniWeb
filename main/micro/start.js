import { getList, setList } from "./const/subApps";
import { currentApp } from './utils/index'
import { rewriteRouter } from "./router/rewriteRouter";

export const registerMicroApps = (appList) => {
    console.log('appList====', appList);
    setList(appList)
}
// 实现路由拦截
rewriteRouter()
//启动微前端框架
export const start = () => {
    // 首先验证当前子应用列表是否为空
    const apps = getList()
    console.log('apps', apps);

    if (!apps.length) {
        // 子应用列表为空
        throw Error('子应用列表为空， 请正确注册')
    }
    // 有子应用的内容，查找符合到当前路由的子应用
    const app = currentApp()
    console.log('app====', app);
    // 如果app不存在
    if (Object.keys(app).length) {
        const { pathname, hash } = window.location
        const url = pathname + hash
        window.history.pushState('', '', url)
        window.__CURRENT_SUB_APP__ = app.activeRule
    }
}

