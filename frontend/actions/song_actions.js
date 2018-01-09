import * as SongApiUtil from '../util/song_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";

export const fetchSongs = () => (dispatch) => {
  return SongApiUtil.fetchSongs().then((songs) =>
    dispatch(receiveSongs(songs)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const fetchSong = (id) => (dispatch) => {
  return SongApiUtil.fetchSong(id).then((song) =>
    dispatch(receiveSong(song)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const fetchSongsByAlbum = (albumId) => (dispatch) => {
  return SongApiUtil.fetchSongsByAlbum(albumId).then((songs) =>
    dispatch(receiveSongs(songs)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const createSong = (song) => (dispatch) => {
  return SongApiUtil.createSong(song).then((song) =>
    dispatch(receiveSong(song)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const updateSong = (song) => (dispatch) => {
  return SongApiUtil.updateSong(song).then((song) =>
    dispatch(receiveSong(song)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const deleteSong = (id) => (dispatch) => {
  return SongApiUtil.deleteSong(id).then(() =>
    dispatch(removeSong(id)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

const removeSong = (songId) => {
  return {
    type: REMOVE_SONG,
    songId
  };
};


const receiveSongs = (songs) => {
  return {
      type: RECEIVE_SONGS,
      songs
  };
};

const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SONG_ERRORS,
    errors
  };
};
