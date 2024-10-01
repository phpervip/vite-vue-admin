import { createApp } from 'vue'
import pinia from './pinia' // 状态管理器
import router from './router' // 路由管理器
import plugins from './plugins' // 插件管理器
import './style.css'
import '@/style/index.scss' // 全局样式入口

import App from './App.vue'

createApp(App)
  .use(pinia)
  .use(router)
  .use(plugins)
  .mount('#app')
