import Axios from 'axios';
import Faker from 'faker';


// console.log('master model');

const baseURI = process.env.VUE_APP_API_URL;

export default {
  faker: Faker,
  axios: Axios,
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
  get(params) {
    let _this = this;
    return Axios.post(baseURI+"/api/"+params.model)
  },
  post(params) {
    let _this = this;
    return Axios.post(baseURI+"/api/"+params.model, params.data)
  },
  delete(params) {
    return Axios.delete(baseURI+"/api/"+params.model)
  },
};
