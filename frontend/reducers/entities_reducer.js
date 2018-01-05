import { combineReducers } from 'redux';

import artistReducer from './artists_reducer';
import albumReducer from './albums_reducer';

const entitiesReducer = combineReducers({
  artists: artistReducer,
  albums: albumReducer
});

export default entitiesReducer;
