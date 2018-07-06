import Vue from 'vue/dist/vue'
import ArticleList from './pages/ArticleList.vue'
import Category from './pages/Category.vue'
import axios from 'axios'

Vue.prototype.$http = axios

new Vue({
    el:"#app",
    components: {
        ArticleList
        Category
    }
})