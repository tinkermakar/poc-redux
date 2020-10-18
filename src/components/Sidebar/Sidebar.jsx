/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addUser from '../../redux/actions/addUser';
import deleteUser from '../../redux/actions/deleteUser';
import Reuseable from '../Reuseable/Reuseable';

const Sidebar = () => {
  const threshold = useSelector(state => state.threshold);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      age: parseInt(event.target.age.value, 10),
    };
    dispatch(addUser(newUser));
  };

  return (
    <Reuseable name="Sidebar">
      <div><strong>Threshold:</strong> {threshold}</div>
      <div>
        <strong>Eligible Users</strong>
        {!!users && users.map((user, index) => user.age >= threshold && (
          <p key={index}>
            {user.name} ({user.age})
            <button
              type="button"
              onClick={() => dispatch(deleteUser(index))}
            >
              Remove
            </button>
          </p>
        ))}
        <strong>Add User</strong>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="number" name="age" placeholder="Age" />
          <input type="submit" value="Add" />
        </form>
      </div>
    </Reuseable>
  );
};

export default Sidebar;
