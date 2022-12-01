import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from "./routers/index";
import App from '@/App.vue'
// import 'element-plus/dist/index.css'
import './style/variable.scss'
import './index.scss'

createApp(App).use(router).use(ElementPlus).mount('#app')