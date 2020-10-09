import React from 'react';
import { useSelector } from 'react-redux';
import Reuseable from '../Reuseable/Reuseable';

const Sidebar = () => {
  const threshold = useSelector(state => state.threshold);

  return (
    <Reuseable name="Sidebar">
      <span>{threshold}</span>
    </Reuseable>
  );
};

export default Sidebar;
