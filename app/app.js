import Vue from 'vue'
import ZipcodeSearch from './zipcode_search.vue'

document.addEventListener('DOMContentLoaded', () => {
    const App = new Vue({
        el: '#app',
        render: h => h(ZipcodeSearch)
    })
})
