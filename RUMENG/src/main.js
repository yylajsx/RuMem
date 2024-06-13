import {createApp} from 'vue'
import {createPinia} from 'pinia'
import 'normalize.css'
import '@/assets/styles/theme.css'
import '@/assets/styles/global.css'
import 'virtual:svg-icons-register'
import SvgIcon from "@/components/SvgIcon.vue";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')
