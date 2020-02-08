import Axios from 'axios';
import Faker from 'faker';
import router from '@/router';


// console.log('master model');

const baseURI = process.env.VUE_APP_API_URL;
const APP_DEV = process.env.VUE_APP_DEV == "true" ? true: false;

console.log('APP_DEV', APP_DEV);

function catchError(error){
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    if(error.response.status == 401)
        router.push('/login');
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    // console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  // console.log(error.config);
}

export default {
  faker: Faker,
  axios: Axios,
  isDev: APP_DEV,
  getAuthToken(){
    return "";// localStorage.token;
  }, // end getAuthToken
  test(item) {

    console.log('item', item);
    Axios.get(`${baseURI}/ping`)
      .then((result) => {
        console.log('test req', result);
      });
  },
  ping(){
    return Axios.get(baseURI+"/ping")
  },
  privatePing(callback){
    return Axios.get(baseURI+"/ping/private")
    // .then(function(response){})
    .then(callback)
    .catch(catchError);
  },
  get(params, callback) {
    let _this = this;
    return Axios.get(baseURI+"/api/"+params.model)
    .then(callback)
    .catch(catchError);
  },
  post(params, callback) {
    let _this = this;
    return Axios.post(baseURI+"/api/"+params.model, params.data)
    .then(callback)
    .catch(catchError);
  },
  delete(params, callback) {
    return Axios.delete(baseURI+"/api/"+params.model)
    .then(callback)
    .catch(catchError);
  },
};
