import { RECEIVE_SONG_ERRORS } from '../actions/song_actions';

const songErrorsReducer = (state=[], action) => {
  switch (action.type) {
    // case RECEIVE_CURRENT_ARTIST:
    //   return [];
    case RECEIVE_SONG_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default songErrorsReducer;
