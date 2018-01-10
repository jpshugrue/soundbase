import * as SessionApiUtil from '../util/session_api_util';
import * as ArtistApiUtil from '../util/artist_util';

export const RECEIVE_CURRENT_ARTIST = "RECEIVE_CURRENT_ARTIST";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentArtist = (artist) => {
  return {
    type: RECEIVE_CURRENT_ARTIST,
    currentArtist: artist
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => (dispatch) => {
  return dispatch(receiveErrors([]));
};

export const login = (artist) => (dispatch) => {
  return SessionApiUtil.login(artist).then((artist) =>
    dispatch(receiveCurrentArtist(artist)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout().then(() =>
    dispatch(receiveCurrentArtist(null)));
};

export const signup = (artist) => (dispatch) => {
  return SessionApiUtil.signup(artist).then((artist) =>
    dispatch(receiveCurrentArtist(artist)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const refresh = (id) => (dispatch) => {
  return ArtistApiUtil.fetchArtist(id).then((artist) =>
    dispatch(receiveCurrentArtist(artist)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};
