//import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import ListServicePlugin from './models';

Vue.use(VueRouter);
//Vue.use(ListServicePlugin);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') },
    { path: '/newTerms', component: require('./components/newterms/newterms.vue.html') },
    { path: '/newList', component: require('./components/newlist/newlist.vue.html')}
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
