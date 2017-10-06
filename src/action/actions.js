
import {getQueryStringValue, getCookie } from './cookies';
import * as Type from './actionConstants';
import {setLocaleStorage} from '../helperFunction/localStorage';
import {browserHistory} from 'react-router';
import api from '../api/api';


export function dispatchAction(type, payload){
  return function(dispatch){
    dispatch({ type: type , payload: payload});
  };
}




export function fetchFeeds(){

  return function (dispatch) {

    return api.fetchFeeds().then(response =>{
      let parsedResult = JSON.parse(response.text);

    });
  };

}





export function checkLogin(){

  return function (dispatch) {

    return api.checkUserLogin().then(response =>{
      let parsedResult = JSON.parse(response.text);

    });


  };

}



export function addProductToCollection(){

  return function (dispatch) {

    return api.addProductToCollection().then(response =>{
      let parsedResult = JSON.parse(response.text);

    });


  };

}


export function addToCollection(){

  return function (dispatch) {

    return api.addToCollection().then(response =>{
      let parsedResult = JSON.parse(response.text);

    });


  };

}

