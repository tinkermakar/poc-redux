import { SET_THRESHOLD } from '../types';

const thresholdReducer = (state = 0, action = {}) => {
  if (action.type === SET_THRESHOLD) {
    return action.payload;
  }
  else return state;
};

export default thresholdReducer;
