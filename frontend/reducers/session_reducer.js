import merge from 'lodash/merge';

import { RECEIVE_CURRENT_ARTIST } from '../actions/session_actions';

const sessionReducer = (state={currentArtist: null}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_ARTIST:
      const currentArtist = action.currentArtist;
      return merge({}, { currentArtist });
    default:
      return state;
  }
};

export default sessionReducer;
