import { combineReducers } from 'redux';

import thresholdReducer from './reducers/thresholdReducer';
import usersReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  threshold: thresholdReducer,
  users: usersReducer,
});

export default rootReducer;
