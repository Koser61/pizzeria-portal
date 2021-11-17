import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Redirect } from 'react-router-dom';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ErrorIcon from '@mui/icons-material/Error';

class OrderButton extends React.Component {
  static propTypes = {
    sendOrder: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      orderWasSent: PropTypes.bool,
    }),
    orderTable: PropTypes.string,
    orderTime: PropTypes.any,
    orderNotes: PropTypes.string,
    cartTotalPrice: PropTypes.number,
    orderProducts: PropTypes.array,
  };

  sendOrder() {
    const { sendOrder, orderTable, orderTime, orderNotes, cartTotalPrice, orderProducts } = this.props;

    const newOrder = {
      status: 'ordered',
      table: orderTable,
      orderTime: orderTime,
      notes: orderNotes,
      totalPrice: cartTotalPrice,
      //totalNumber: 4,
      products: orderProducts,
      id: nanoid()
    };

    sendOrder(newOrder);
  }

  render() {
    const { loading: { active, error, orderWasSent } } = this.props;

    if(active) {
      return(
        <Button
          disabled
          variant='contained'
          endIcon={<CircularProgress size='1.5rem' sx={{color: 'white'}} />}
        >
          Order
        </Button>
      );
    } else if(error) {
      return(
        <Button
          variant='contained'
          color='error'
          endIcon={<ErrorIcon />}
          onClick={() => this.sendOrder()}
        >
          Order
          {orderWasSent ? <Redirect to={process.env.PUBLIC_URL + '/ordering'} /> : ''}
        </Button>
      );
    } else {
      return(
        <Button
          variant='contained'
          endIcon={<ShoppingCartIcon />}
          onClick={() => this.sendOrder()}
        >
          Order
          {orderWasSent ? <Redirect to={process.env.PUBLIC_URL + '/ordering'} /> : ''}
        </Button>
      );
    }
  }
}

export default OrderButton;