import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss'
import VueTypedJs from 'vue-typed-js'

createApp(App).use(store).use(router).use(VueTypedJs).mount('#app')
