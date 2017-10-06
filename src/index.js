  import React from 'react';
  import {render} from 'react-dom';
  import './styles/desktop.scss';
  import './styles/mobile.scss';
  import './styles/skeleton.scss';
  import 'babel-polyfill';

  import { Router , browserHistory} from "react-router";
  import routes from './routes/route';
  import {Provider} from 'react-redux';
  import configureStore from './store/configureStore';




if(typeof window !== 'undefined') {

  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;

  let viewport = window.matchMedia("screen and (max-width: 768px)");

  var stateWithViewPort = Object.assign({}, preloadedState , {
        ViewPort : viewport.matches
     });


  const store = configureStore(stateWithViewPort);


  render(
      <Provider store={store}>
       <Router
        history={browserHistory}
        routes={routes}
      />
     </Provider>, document.getElementById('app')
  );
}
