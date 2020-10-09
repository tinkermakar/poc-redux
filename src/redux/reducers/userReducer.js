/* eslint-disable no-fallthrough */
import { ADD_USER } from '../types';

const userReducer = (state = 0, action = {}) => {
  if (action.type === ADD_USER) {
    return action.payload;
  }
  else return state;
};

export default userReducer;
