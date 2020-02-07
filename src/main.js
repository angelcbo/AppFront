import Vue from 'vue';
import Axios from 'axios';
import Faker from 'faker';


import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


Vue.prototype.$http = Axios;
Vue.prototype.$faker = Faker;

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common.Authorization = token;
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
