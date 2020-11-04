import Vue from 'vue';
import Axios from 'axios';
import Faker from 'faker';

import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


const APP_DEV = process.env.VUE_APP_DEV == 'true';

Vue.use(Vuelidate);


Vue.prototype.$http = Axios;
Vue.prototype.$faker = Faker;
Vue.prototype.APP_DEV = APP_DEV;

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


