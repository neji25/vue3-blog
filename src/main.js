import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'

const app = createApp(App)

components.forEach(component => {
    app.component(component.selector, component)
})

app.mount('#app')
