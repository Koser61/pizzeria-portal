import React from 'react';

import styles from './Booking.scss';

const Booking = (props) => (
  <div className={styles.component}>
      <h2>{props.match.params.id}</h2>
  </div>
);

export default Booking;