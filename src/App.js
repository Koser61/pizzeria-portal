import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store.js';

import CssBaseline from '@mui/material/CssBaseline';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Ordering from './components/views/Ordering/OrderingContainer';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/KitchenContainer';

import NewOrder from './components/views/NewOrder/NewOrderContainer';
import Order from './components/views/Order/OrderContainer';
import Event from './components/views/Event/Event';
import Booking from './components/views/Booking/Booking';

import './styles/global.scss'

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Login} />

            <Route exact path={process.env.PUBLIC_URL + '/dashboard'} component={Dashboard} />

            <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
            <Route path={process.env.PUBLIC_URL + '/ordering/new/:table'} component={NewOrder} />
            <Route path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Order} />

            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
            <Route path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />

            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
