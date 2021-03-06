import { createApp } from 'vue'
import router from "./routers/index";
import App from '@/App.vue'
import './style/main.scss'

createApp(App).use(router).mount('#app')