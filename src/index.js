import Vue from 'vue/dist/vue'
import App from './pages/App.vue'
import AddPage from './pages/AddPage.vue'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.components
new Vue({
    el:"#app",
    components: {
        App,
        'addpage': AddPage
    }
})