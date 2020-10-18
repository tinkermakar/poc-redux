import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reuseable from '../Reuseable/Reuseable';
import setThreshold from '../../redux/actions/setThreshold';

const Container = () => {
  const threshold = useSelector(state => state.threshold);
  const dispatch = useDispatch();

  return (
    <Reuseable name="Container">
      <input type="number" value={threshold} onChange={event => dispatch(setThreshold(event.target.value))} />
    </Reuseable>
  );
};

export default Container;
