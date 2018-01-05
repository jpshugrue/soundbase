import * as ArtistApiUtil from '../util/artist_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTIST_ERRORS = "RECEIVE_ARTIST_ERRORS";

export const fetchArtists = () => (dispatch) => {
  return ArtistApiUtil.fetchArtists().then((artists) =>
    dispatch(receiveArtists(artists)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const fetchArtist = (id) => (dispatch) => {
  return ArtistApiUtil.fetchArtist(id).then((artist) =>
    dispatch(receiveArtist(artist)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

export const updateArtist = (artist) => (dispatch) => {
  return ArtistApiUtil.updateArtist(artist).then((artist) =>
    dispatch(receiveArtist(artist)), (error) =>
    dispatch(receiveErrors(error.responseJSON)));
};

const receiveArtists = (artists) => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

const receiveArtist = (artist) => {
  return {
    type: RECEIVE_ARTIST,
    artist
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ARTIST_ERRORS,
    errors
  };
};
