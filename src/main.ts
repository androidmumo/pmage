import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pmage from './packages/pmage'
// import pmage from '../dist/pmage.js'

const app = createApp(App)
app.use(pmage);
app.mount('#app')
