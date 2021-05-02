import { createApp } from 'vue'
import App from './app/app.vue'
import router from './app/router/index.js'
import store from './app/store/index.js'
import './style.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')