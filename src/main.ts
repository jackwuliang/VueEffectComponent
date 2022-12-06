import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from "./routers/index";
// pinia store
import pinia from "@/stores/index";
import App from '@/App.vue'
// import 'element-plus/dist/index.css'
import './style/variable.scss'
import './index.scss'

createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app')