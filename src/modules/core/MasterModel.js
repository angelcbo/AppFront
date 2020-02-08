import Axios from 'axios';
import Faker from 'faker';


// console.log('master model');

const baseURI = process.env.VUE_APP_API_URL;
const APP_DEV = process.env.VUE_APP_DEV == "true" ? true: false;

console.log('APP_DEV', APP_DEV);

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
  privatePing(){
    return Axios.get(baseURI+"/ping/private")
  },
  get(params) {
    let _this = this;
    return Axios.get(baseURI+"/api/"+params.model)
  },
  post(params) {
    let _this = this;
    return Axios.post(baseURI+"/api/"+params.model, params.data)
  },
  delete(params) {
    return Axios.delete(baseURI+"/api/"+params.model)
  },
};
