import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reuseable.module.scss';

const Reuseable = ({ name, children }) => (
  <div className={styles.capsule}>
    <h2>{name}</h2>
    {children}
  </div>
);

export default Reuseable;

Reuseable.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.any),
};

Reuseable.defaultProps = {
  children: null,
};
