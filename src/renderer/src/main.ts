import { createApp } from 'vue'
import App from './App.vue'
import 'mdui/mdui.css'
import './main.css'
import { setColorScheme, setTheme } from 'mdui'

import { createPinia } from 'pinia'
import router from './router'

setColorScheme('#4a92cb')
setTheme('auto')
createApp(App).use(createPinia()).use(router).mount('#app')
