import React from 'react';
import ReactDomServer from 'react-dom/server';
import {Provider} from 'react-redux';
import {match, RouterContext} from 'react-router';

import Helmet from 'react-helmet';

import { compact } from 'lodash/array';

import webpackAsset from './webpackAsset';

import createStore from 'store';
import routes from 'routes';

import prepareData from 'helpers/prepareData';


export default (req, res) => {

  const store = createStore();

  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    Promise.all(compact(prepareData(store, renderProps))).then(() => {

      const initialState = JSON.stringify(store.getState());

      const content = ReactDomServer.renderToString(
        React.createElement(
          Provider,
          {store},
          React.createElement(RouterContext, renderProps)
        )
      );

      const head = Helmet.rewind();


      res.status(200);
      res.render('index', {
        initialState,
        content,
        head,
        webpackAsset
      });
    });
  });

}