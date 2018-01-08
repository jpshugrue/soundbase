import merge from 'lodash/merge';
import { RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG } from '../actions/song_actions';

const songReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      return merge({}, state, {[action.song.id]: action.song});
    case REMOVE_SONG:
      let newState = merge({}, state);
      delete newState[action.songId];
      return newState;
    default:
      return state;
  }
};

export default songReducer;
