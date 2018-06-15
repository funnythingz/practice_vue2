import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

import ZipcodeSearch from './components/zipcode-search.vue'

document.addEventListener('DOMContentLoaded', () => {
    const App = new Vue({
        el: '#app',
        render: h => h(ZipcodeSearch)
    })
})
