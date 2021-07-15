import React from 'react';

import styles from './NewOrder.scss';

const NewOrder = (props) => (
  <div className={styles.component}>
      <h2>{props.match.params.id}</h2>
  </div>
);

export default NewOrder;