import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { globalRegister } from './gloable'
import 'element-plus/dist/index.css'
import './style/rest.css'

const app = createApp(App)
app.use(router)
app.use(globalRegister)
app.mount('#app')
