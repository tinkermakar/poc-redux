import { SET_THRESHOLD } from '../types';

const thresholdReducer = (state = 0, action = {}) => {
  if (action.type === SET_THRESHOLD) {
    return parseInt(action.payload, 10);
  }
  else return state;
};

export default thresholdReducer;
