import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import OrderOptions from '../OrderOptions/OrderOptionsContainer';
import OrderMenu from '../OrderMenu/OrderMenu';
import OrderCart from '../OrderCart/OrderCartContainer';

class OrderInfo extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    status: PropTypes.string,
    table: PropTypes.string,
    products: PropTypes.array,
    addCartProduct: PropTypes.func,
  }

  componentDidMount() {
    const { status, products, addCartProduct } = this.props;

    if(status !== 'new') {
      products.forEach(product => {
        addCartProduct(product);
      });
    }
  }

  render() {
    const { id, status, table } = this.props;

    if(status === 'new') {
      return (
        <Redirect exact to={process.env.PUBLIC_URL + '/ordering/new/' + table} />
      );
    } else {
      return (
        <Container>
          <Grid container spacing={1} mb={2}>
            <Grid item xs={12} md={7}>
              <OrderOptions readOnly id={id} />
              <OrderMenu readOnly id={id} />
            </Grid>
            <Grid item container xs={12} md={5} spacing={2}>
              <Grid item width={1/1} marginLeft={{md: '0.5rem'}}>
                <OrderCart readOnly id={id} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      );
    }
  }
}

export default OrderInfo;