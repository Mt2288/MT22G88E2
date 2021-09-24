import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap-vue/dist/bootstrap-vue.css";
import VueAxios from 'vue-axios'
import axios from 'axios'
import * as Vue from 'vue'



createApp(App).use(store).use(router).mount('#app')

const app = Vue.createApp(App)
app.use(VueAxios, axios)