import './assets/base.css'
import { createApp } from 'vue'

import VueMeta from 'vue-meta'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// import { motion } from 'framer-motion'

// Setup
library.add(fas)

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
