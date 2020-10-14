import Axios from 'axios'
import Faker from 'faker'
import router from '@/router'

const printURI = process.env.VUE_APP_PRINTER_URL;

function formatUrl(model){
    var resUrl = ''
    if (typeof model == "string")
        resUrl = `${printURI}/${model}`;
    // else if( typeof model == "object" )
    //     resUrl = `${baseURI}/api/`+model.join("/");

    return resUrl;
}

function catchError(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      if (error.response.status == 401) router.push('/login');
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
      get(model,params,callback) {
        const _this = this;
        const getUrl = formatUrl(model);
        return Axios.get(getUrl, {params})
        .then(callback)
        .catch(catchError)
      },
      post(model,data,callback){
          const _this = this;
          const postUrl = formatUrl(model);
          return Axios.post(postUrl,data)
          .then(callback)
          .catch(catchError);
      }

  }