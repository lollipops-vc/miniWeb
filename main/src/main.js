// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { subNavList } from './store/sub'
import { registerApp } from './utils'
const app = createApp(App)
registerApp(subNavList)
app.use(createPinia())
app.use(router())

app.mount('#micro_web_main_app')
