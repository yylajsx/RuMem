import {createApp} from 'vue'
import {createPinia} from 'pinia'
import 'normalize.css'
import '@/assets/styles/theme.css'
import '@/assets/styles/global.css'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
