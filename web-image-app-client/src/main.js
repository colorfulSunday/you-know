import { createApp } from 'vue'
import App from './App.vue'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 引入压缩插件
import compress from './JS/compress.js'
app.config.globalProperties.$compress = compress

app.use(ElementPlus)
app.mount('#app')
