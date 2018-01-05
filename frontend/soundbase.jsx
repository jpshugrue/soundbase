import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//begin testing
// import * as SessionApiUtil from './util/session_api_util';
// import * as ArtistActions from './actions/artist_actions';
// window.fetchArtists = ArtistActions.fetchArtists;
// window.fetchArtist = ArtistActions.fetchArtist;
// window.updateArtist = ArtistActions.updateArtist;
// window.signup = SessionApiUtil.signup;
// window.login = SessionApiUtil.login;
// window.logout = SessionApiUtil.logout;
// import * as SessionActions from './actions/session_actions';
// window.login = SessionActions.login;
import * as AlbumsApiUtil from './util/album_util';
window.fetchAlbums = AlbumsApiUtil.fetchAlbums;
window.fetchAlbum = AlbumsApiUtil.fetchAlbum;
window.createAlbum = AlbumsApiUtil.createAlbum;
window.updateAlbum = AlbumsApiUtil.updateAlbum;
window.deleteAlbum = AlbumsApiUtil.deleteAlbum;
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
