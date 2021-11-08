import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import OrderOptions from '../OrderOptions/OrderOptionsContainer';
import OrderMenu from '../OrderMenu/OrderMenu';
//import OrderCart from '../OrderCart/OrderCartContainer';

const OrderInfo = ({ id, status, table }) => {
  if(status === 'new') {
    return (
      <Redirect exact to={process.env.PUBLIC_URL + '/ordering/new/' + table} />
    );
  } else {
    return (
      <Container>
        <Grid container spacing='0.5rem' mt='0.5rem'>
          <Grid item container xs={12} md={7} spacing='0.5rem'>
            <Grid item width={1/1}>
              <OrderOptions readOnly id={id} />
            </Grid>
            <Grid item width={1/1}>
              <OrderMenu readOnly id={id} />
            </Grid>
          </Grid>
          <Grid item container xs={12} md={5} spacing='1rem'>
            <Grid item width={1/1} marginLeft={{md: '0.5rem'}}>
              {/*<OrderCart readOnly id={id} />*/}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
};

OrderInfo.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
  table: PropTypes.string,
};

export default OrderInfo;