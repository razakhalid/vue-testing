import { createApp } from 'vue'
import store  from '@/store'

// import App from '../tests/unit/App'
import App from '../src/App'

const app = createApp(App, {
    store
})

app.use(store)

app.mount('#app')