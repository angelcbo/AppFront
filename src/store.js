import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const API_URL = process.env.VUE_APP_API_URL;
const API_AUTH_ROUTE = API_URL+'/api/authenticate';

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, user) {
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  }, // end mutations
  actions: {

    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: API_AUTH_ROUTE, data: user, method: 'POST' })
          .then((resp) => {
            // console.log('resp', resp);
            const { token } = resp.data;
            let bToken = "Bearer "+token;
            localStorage.setItem('token', bToken);
            axios.defaults.headers.common.Authorization = bToken;
            commit('auth_success', bToken, user);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },

    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: 'http://localhost:3000/register', data: user, method: 'POST' })
          .then((resp) => {
            const { token } = resp.data;
            const { user } = resp.data;
            localStorage.setItem('token', token);
            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error', err);
            localStorage.removeItem('token');
            reject(err);
          });
      });
    }, // end register

    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common.Authorization;
        resolve();
      });
    }, // end logout
  }, // end actions
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
});
