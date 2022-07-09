import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import router from './router'
import { createPinia } from 'pinia' // 引入 pinia 管理工具


const app = createApp(App);

app.use(router);
app.use(createPinia())

app.mount('#app');
