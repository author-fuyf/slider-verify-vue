import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import pkgs from './packages/install'

createApp(App).use(pkgs).mount('#app')
