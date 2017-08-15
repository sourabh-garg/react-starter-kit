import request from 'superagent';



// const baseUrl = "http://playo.info:8008/";
// const authKey = 'ymA+5Zi6uHvUOY7qkBj2cHqioKQ=';

const baseUrl = "https://playo.club/";
const authKey = "b4ee93df154de37b0e38aa6a5dfda071aa751bfa";


class bookApi{

  static getAllSports(venue) {
    return new Promise((resolve, reject) => {
      request.
      get( baseUrl+'book-api/v2/sports/' + venue + '/').
      set('Authorization', authKey).
      set('Accept', 'application/json').
      end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }


}

export default bookApi;
