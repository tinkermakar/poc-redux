import { ADD_USER } from '../types';

// Without Thunk
const addUser = payload => {
  if (payload.name && payload.age) {
    return {
      type: ADD_USER,
      payload,
    };
  }
};

export default addUser;
