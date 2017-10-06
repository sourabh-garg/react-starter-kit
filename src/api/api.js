import request from 'superagent';


const baseUrl = "https://www.wooplr.com/rest";


class api{


  static fetchFeeds() {
    return new Promise((resolve, reject) => {
      request.
      get( 'https://www.wooplr.com/api/v1/feeds').
      set('Accept', 'application/json').
      end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }


  static checkUserLogin() {
    return new Promise((resolve, reject) => {
      request.
      get( baseUrl+ '/v2/me').
      set('Accept', 'application/json').
      end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }



  static addToCollection(data) {
    return new Promise((resolve, reject) => {
      request.
      post( baseUrl+ '/v2/reseller/collection/clone').
      send(data).
      set('Accept', 'application/json').
      end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }

  static addProductToCollection(data) {
    return new Promise((resolve, reject) => {
      request.
      post( baseUrl+ '/v2/reseller/collection/add/product?fromStore=false').
      send(data).
      set('Accept', 'application/x-www-form-urlencoded').
      end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }


}

export default api;
