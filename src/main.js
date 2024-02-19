import { createApp } from 'vue'
import App from './App.vue'
import elementIcon from './plugins/icons'
import vuex from './store'

createApp(App).use(elementIcon).use(vuex).mount('#app')
