import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 导入样式依赖
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'

createApp(App).use(router).mount('#app')
