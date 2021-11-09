import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import CartProductDetails from '../CartProductDetails/CartProductDetailsContainer';

class CartProduct extends React.Component {
  static propTypes = {
    readOnly: PropTypes.bool,
    productId: PropTypes.number,
    amount: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    totalPrice: PropTypes.number,
    changeTotalPrice: PropTypes.func,
    newProductsArray: PropTypes.array,
    deleteCartProduct: PropTypes.func,
  };

  componentDidMount() {
    const { totalPrice, price, changeTotalPrice } = this.props;

    changeTotalPrice(totalPrice + price);
  }

  handleDelete() {
    const { totalPrice, price, changeTotalPrice, productId, deleteCartProduct } = this.props;

    deleteCartProduct(productId);
    changeTotalPrice(totalPrice - price);
  }

  render() {
    const { readOnly, amount, name, price, productId } = this.props;

    return(
      <Card elevation={3}>
        <Box
          width={1/1}
          display='inline-flex'
          justifyContent='space-between'
          alignItems='center'
          sx={{p: '0.5rem'}}
        >
          <Chip
            sx={{fontSize: '1rem', fontWeight: 'bold', ml: '0.5rem'}}
            variant='outlined'
            label={amount}
          />
          <Typography variant='h6' textAlign='center' fontSize='1rem' mx='1rem'>
            {name}
          </Typography>
          {!readOnly ? 
            <Box display='inline-flex' alignItems='center'>
              <Chip
                sx={{ fontSize: '1rem', fontWeight: 'bold'}}
                variant='outlined'
                label={'$ ' + price}
              />
              <IconButton
                size='large'
                sx={{color: 'primary.dark'}}
                onClick={() => this.handleDelete()}
              >
                <DeleteForeverIcon sx={{color: 'error.dark'}} />
              </IconButton>
            </Box>
            :
            <Box display='inline-flex' alignItems='flex-end'>
              <Chip
                sx={{ fontSize: '1rem', fontWeight: 'bold'}}
                variant='outlined'
                label={'$ ' + price}
              />
            </Box>}
          </Box>
        <CartProductDetails productId={productId} />
      </Card>
    );
  }
}

export default CartProduct;