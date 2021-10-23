import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { withRouter } from "react-router";

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ErrorIcon from '@mui/icons-material/Error';

class OrderButton extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    sendOrder: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    orderTable: PropTypes.string,
    orderTime: PropTypes.any,
    orderNotes: PropTypes.string,
    cartTotalPrice: PropTypes.number,
    orderProducts: PropTypes.array,
  };

  sendOrder() {
    const { history, sendOrder, orderTable, orderTime, orderNotes, cartTotalPrice, orderProducts } = this.props;

    const newOrder = {
      table: orderTable,
      orderTime: orderTime,
      notes: orderNotes,
      totalPrice: cartTotalPrice,
      //totalNumber: 4,
      products: orderProducts,
      buildId: 'panel',
      id: nanoid()
    };

    sendOrder(newOrder);
    history.push(process.env.PUBLIC_URL + '/ordering');
  }

  render() {
    const { loading: { active, error } } = this.props;

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
        </Button>
      );
    }
  }
}

export default withRouter(OrderButton);