import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pmage from './packages/pmage'
// import pmage from '../dist/pmage.js'

const app = createApp(App)

app.use(pmage, {
	blur: 10,
	scale: 1.2,
	time: 0.5
});

app.mount('#app')
