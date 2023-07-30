import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css';
import router from './routes'


createApp(App)
.use(AOS.init())
.use(router)
.mount('#app')
