import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Booking from '../../features/Booking/Booking';
import Event from '../../features/Event/Event';

import styles from './Tables.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/123abc'} activeClassName='active'>Booking</Link>
    <Link to={process.env.PUBLIC_URL + '/tables/event/321abc'} activeClassName='active'>Event</Link>
    <div>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
        <Route path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
      </Switch>
    </div>
  </div>
);

export default Tables;