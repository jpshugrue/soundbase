import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorReducer from './errors_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorReducer
});

export default rootReducer;
