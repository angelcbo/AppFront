import Vue from 'vue';
import Axios from 'axios';
import Faker from 'faker';

import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueHtmlToPaper from 'vue-html-to-paper';

const APP_DEV = process.env.VUE_APP_DEV == 'true';

Vue.use(Vuelidate);

let basePath= 'http://localhost:8080/css';
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css",
    `${basePath}/boostrap.min.css`,
    `${basePath}/style.css`,
    `${basePath}/my_style.css`
  //   "./boostrap.min.css",
  //    "./style.css",
  //    "./my_style.css",
  ]
}

Vue.use(VueHtmlToPaper);

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


