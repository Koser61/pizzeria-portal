import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/HomePage/HomePage';
import Login from './components/views/Login/Login';
import Ordering from './components/views/Ordering/Ordering';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';

import NewOrder from './components/features/NewOrder/NewOrder';
import Event from './components/features/Event/Event';
import Booking from './components/features/Booking/Booking';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />

          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />

          <Route path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
          <Route path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrder} />
          <Route path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Event} />

          <Route path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
          <Route path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />

          <Route path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
