import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import artistErrorsReducer from './artist_errors_reducer';
import albumErrorsReducer from './album_errors_reducer';
import songErrorsReducer from './song_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  artist: artistErrorsReducer,
  album: albumErrorsReducer,
  song: songErrorsReducer
});

export default errorsReducer;
