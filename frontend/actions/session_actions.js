import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_ARTIST = "RECEIVE_CURRENT_ARTIST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentArtist = (artist) => {
  return {
    type: RECEIVE_CURRENT_ARTIST,
    artist
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = (artist) => (dispatch) => {
  return SessionApiUtil.login(artist).then((artist) =>
    dispatch(receiveCurrentArtist(artist)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout().then(() =>
    dispatch(receiveCurrentArtist(null)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const signup = (artist) => (dispatch) => {
  return SessionApiUtil.signup(artist).then((artist) =>
    dispatch(receiveCurrentArtist(artist)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};
