import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//begin testing
import * as SessionApiUtil from './util/session_api_util';
// window.signup = SessionApiUtil.signup;
// window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;
import * as SessionActions from './actions/session_actions';
window.login = SessionActions.login;
//end testing

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentArtist) {
    const preloadedState = { session: { currentArtist: window.currentArtist } };
    store = configureStore(preloadedState);
    delete window.currentArtist;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  //begin testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //end testing
  ReactDOM.render(<Root store={ store }/>, root);
});
