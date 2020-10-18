import { SET_THRESHOLD } from '../types';

// Without thunk
/* const setThreshold = payload => ({
  type: SET_THRESHOLD,
  payload,
}); */

// With Thunk
const setThreshold = payload => dispatch => dispatch({
  type: SET_THRESHOLD,
  payload,
});

export default setThreshold;
