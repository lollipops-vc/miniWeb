import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false
let instance = null
console.log(instance);
const render = () => {
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
}
if (!window.__MICRO_WEB__) {
  render()
}
export const bootstrap = () => {
  console.log('开始加载');

}
export const mount = () => {
  render()
  console.log('渲染成功');
}
export const unmount = () => {
  console.log('卸载', instance);
}