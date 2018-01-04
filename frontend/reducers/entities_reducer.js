import { combineReducers } from 'redux';

import artistReducer from './artists_reducer';

const entitiesReducer = combineReducers({
  artists: artistReducer
});

export default entitiesReducer;
