import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize/index.js';

injectTapEventPlugin();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
