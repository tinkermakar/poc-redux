import React from 'react';
import { useSelector } from 'react-redux';
import Reuseable from '../Reuseable/Reuseable';
import store from '../../redux/store';
import { SET_THRESHOLD } from '../../redux/types';

const Container = () => {
  const threshold = useSelector(state => state.threshold);

  return (
    <Reuseable name="Container">
      <input type="number" value={threshold} onChange={event => store.dispatch({ type: SET_THRESHOLD, payload: event.target.value })} />
    </Reuseable>
  );
};

export default Container;
