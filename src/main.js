import { createApp } from 'vue'
import pinia from '@/stores/index'
import '@/assets/main.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
