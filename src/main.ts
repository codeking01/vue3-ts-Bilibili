import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// 导入样式依赖
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
// 引入vant组件
import {Tab, Tabs, Swipe, SwipeItem} from 'vant';
//引入mock
import '@/mock/index'


const app = createApp(App)
app.use(router)
app.use(Tab);
app.use(Tabs);
app.use(Swipe);
app.use(SwipeItem);

app.mount('#app')
// createApp(App).use(router).mount('#app')
