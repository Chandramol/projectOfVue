import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2';

createApp(App).use(VueSweetalert2).use(router).mount('#app')
