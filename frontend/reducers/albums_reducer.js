import merge from 'lodash/merge';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from '../actions/artist_actions';

const albumReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      return merge({}, state, {[action.album.id]: action.album});
    case REMOVE_ALBUM:
      let newState = merge({}, state);
      delete newState[action.albumId];
      return newState;
    default:
      return state;
  }
};

export default albumReducer;
