import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Booking from '../Booking/Booking';
import Event from '../Event/Event';

import styles from './Tables.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/123abc'}>Booking</Link>
    <Link to={process.env.PUBLIC_URL + '/tables/event/321abc'}>Event</Link>
    <div>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
        <Route path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
      </Switch>
    </div>
  </div>
);

export default Tables;