require('ignore-styles');



var Express  = require('express');
var React = require ('react');
import {createStore , combineReducers} from 'redux';
const renderToString = require('react-dom/server').renderToString;
const match = require('react-router').match;
const Provider = require('react-redux').Provider;
const routes = require('../Routes/serverRoutes');

import {renderFullPage} from './index';
import Helmet from 'react-helmet';
var device = require('express-device');
var redis = require('redis');
import { ReduxAsyncConnect, loadOnServer, reducer as reduxAsyncConnect } from 'redux-async-connect'






var router = Express.Router();
router.use(device.capture());





router.get('*', (req, res) => {

  const store = createStore(combineReducers({reduxAsyncConnect}));

  match({ routes, location: req.url }, (err, redirect, renderProps) => {

    if (err) {
      return res.status(500).send(err.message);
    }

    if (redirect) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }


    // 1. load data
    loadOnServer(renderProps, store).then(() => {

      // 2. use `ReduxAsyncConnect` instead of `RoutingContext` and pass it `renderProps`

      const appHTML = renderToString(
        <Provider store={store} key="provider">
          <ReduxAsyncConnect {...renderProps} />
        </Provider>
      );


      let head = Helmet.rewind();
      const preloadedState = store.getState();

      res.send(renderFullPage(appHTML, preloadedState, head));

    })

  })

});





module.exports = router;



