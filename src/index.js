import Vue from 'vue/dist/vue.min.js';
// import Vue from 'vue';
import App from './app.vue';
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
    // render: h => h(App)
});