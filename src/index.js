  import React from 'react';
  import {render} from 'react-dom';
  import './styles/desktop.scss';
  import './styles/mobile.scss';
  import 'babel-polyfill';

  import { Router , browserHistory} from "react-router";
  import serverRoutes from './Routes/serverRoutes';
  import {Provider} from 'react-redux';
  import configureStore from './store/configureStore';




if(typeof window !== 'undefined') {

  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;

  let viewport = window.matchMedia("screen and (max-width: 768px)");

  let stateWithViewPort = Object.assign({}, preloadedState , {
        ViewPort : viewport.matches ?  true : false
     });


  const store = configureStore(stateWithViewPort);


  render(
      <Provider store={store}>
       <Router
        history={browserHistory}
        routes={serverRoutes}
      />
     </Provider>, document.getElementById('app')
  );
}
