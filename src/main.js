import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import './style.css'
import router from './router' // Импортируем наш роутер

const app = createApp(App)

app.use(router) // Подключаем роутер к приложению
app.use(createHead()) // Управление <title>/meta для каждой страницы (нужно для prerender и SEO)
app.mount('#app')
