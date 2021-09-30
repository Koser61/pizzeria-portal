import React from 'react';

import styles from './Event.scss';

const Event = (props) => (
  <div className={styles.component}>
      <h2>{props.match.params.id}</h2>
  </div>
);

export default Event;