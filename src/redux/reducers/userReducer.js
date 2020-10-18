/* eslint-disable no-fallthrough */
import { ADD_USER, DELETE_USER } from '../types';

const userReducer = (state = 0, action = {}) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, { ...action.payload }];

    case DELETE_USER:
      return state.filter((element, index) => index !== action.payload);

    default:
      return state;
  }
};

export default userReducer;
