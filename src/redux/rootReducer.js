import { combineReducers } from 'redux';

import thresholdReducer from './reducers/thresholdReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  threshold: thresholdReducer,
  user: userReducer,
});

export default rootReducer;
