import { DELETE_USER } from '../types';

const deleteUser = payload => dispatch => dispatch({
  type: DELETE_USER,
  payload,
});

export default deleteUser;
