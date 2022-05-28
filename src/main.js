import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseButton from './components/UI/BaseButton.vue'
import BaseBadge from './components/UI/BaseBadge.vue'
import BaseStatus from './components/UI/BaseStatus.vue'

import 'bootstrap/dist/js/bootstrap.bundle.js'
import './styles/app.scss'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-status', BaseStatus)

app.use(router)
app.use(store)
app.mount('#app')
