import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import Event from '../../features/Event/Event';
import NewOrder from '../../features/NewOrder/NewOrder';

import styles from './Ordering.scss';

const Ordering = () => (
  <div className={styles.component}>
      <h2>Ordering view</h2>
      <Link to={process.env.PUBLIC_URL + '/ordering/new'} activeClassName='active'>New Order</Link>
      <Link to={process.env.PUBLIC_URL + '/ordering/order/123abc'} activeClassName='active'>Event</Link>
      <div>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrder} />
          <Route path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Event} />
        </Switch>
      </div>
  </div>
);

export default Ordering;