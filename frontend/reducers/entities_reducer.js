import { combineReducers } from 'redux';

import artistReducer from './artists_reducer';
import albumReducer from './albums_reducer';
import songReducer from './songs_reducer';

const entitiesReducer = combineReducers({
  artists: artistReducer,
  albums: albumReducer,
  songs: songReducer
});

export default entitiesReducer;
