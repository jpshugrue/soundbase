import * as AlbumApiUtil from '../util/album_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";

export const fetchAlbums = () => (dispatch) => {
  return AlbumApiUtil.fetchAlbums().then((albums) =>
    dispatch(receiveAlbums(albums)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const fetchAlbum = (id) => (dispatch) => {
  return AlbumApiUtil.fetchAlbum(id).then((album) =>
    dispatch(receiveAlbum(album)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const createAlbum = (album) => (dispatch) => {
  return AlbumApiUtil.createAlbum(album).then((album) =>
    dispatch(receiveAlbum(album)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const updateAlbum = (album) => (dispatch) => {
  return AlbumApiUtil.updateAlbum(album).then((album) =>
    dispatch(receiveAlbum(album)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const deleteAlbum = (id) => (dispatch) => {
  return AlbumApiUtil.deleteAlbum(id).then(() =>
    dispatch(removeAlbum(id)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const clearAlbumErrors = () => (dispatch) => {
  return dispatch(receiveErrors([]));
};

const removeAlbum = (albumId) => {
  return {
    type: REMOVE_ALBUM,
    albumId
  };
};


const receiveAlbums = (albums) => {
  return {
      type: RECEIVE_ALBUMS,
      albums
  };
};

const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors
  };
};
