import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
// Import router
import router from "./router/index.js";
createApp(App)
    .use(router)
    .mount('#app')