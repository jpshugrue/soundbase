import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

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
