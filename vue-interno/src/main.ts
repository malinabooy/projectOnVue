import './assets/style.scss'
import './assets/base.scss'
import './assets/fonts.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
