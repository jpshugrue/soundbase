import merge from 'lodash/merge';
import { RECEIVE_ARTISTS, RECEIVE_ARTIST, RECEIVE_ARTIST_ERRORS } from '../actions/artist_actions';

const artistsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      return merge({}, state, {[action.artist.id]: action.artist});
    default:
      return state;
  }
};

export default artistsReducer;
