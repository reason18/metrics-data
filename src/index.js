import React from 'react';
import ReactDOM from 'react-dom';
import './cover.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import MocodingDetails from './components/MocodingDetails';
import UsevmDetails from './components/UsevmDetails';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/mocoding-details" component={MocodingDetails} />
      <Route path="/usevm-details" component={UsevmDetails} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
