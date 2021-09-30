import React from 'react';

import styles from './Order.scss';

const Order = (props) => (
  <div className={styles.component}>
      <h2>{props.match.params.id}</h2>
  </div>
);

export default Order;