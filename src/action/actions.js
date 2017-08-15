
import {getQueryStringValue, getCookie } from './cookies';
import * as Type from './actionConstants';
// import * as helper from '../helperFunction/helper';
import {setLocaleStorage} from '../helperFunction/localStorage';
    import {browserHistory} from 'react-router';
import {getSportsName} from '../helperFunction/helper';
// import configureStore from '../store/configureStore';




export function dispatchAction(type, payload){
  return function(dispatch){
    dispatch({ type: type , payload: payload});
  };
}





