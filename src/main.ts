import Vue, { createApp }from 'vue'
import App from './App.vue'

const arr = 'typescript232'

console.log(arr,' webpack 打包出来的文件 hello tst111s' + `${new Date}`)

// new Vue({
//     // router,
//     // store,
//     render: (h) => h(App)
//   }).$mount('#app')


const app = createApp(App)
// app.use(router)
app.mount("#app");
