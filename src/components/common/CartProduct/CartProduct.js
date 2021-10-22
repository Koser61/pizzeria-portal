import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import CartProductDetails from '../CartProductDetails/CartProductDetails';

class CartProduct extends React.Component {
  static propTypes = {
    productId: PropTypes.number,
    amount: PropTypes.number,
    name: PropTypes.string,
    params: PropTypes.object,
    price: PropTypes.number,
    totalPrice: PropTypes.number,
    changeTotalPrice: PropTypes.func,
    deleteCartProduct: PropTypes.func,
  };

  componentDidMount() {
    const { totalPrice, price, changeTotalPrice } = this.props;

    changeTotalPrice(totalPrice + price);
  }

  render() {
    const { productId, amount, name, price, params, deleteCartProduct } = this.props;

    return(
      <Card variant='outlined' sx={{p: '0.5rem'}}>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box mx='1rem'>
            <Typography variant='button' fontSize='1rem' noWrap>
              {amount} x
            </Typography>
          </Box>
          <CartProductDetails name={name} params={params} />
          <Box mx='1rem'>
            <Typography variant='button' fontSize='1rem' noWrap>
              ${price}
            </Typography>
          </Box>
          <IconButton
            size='large'
            sx={{mx: '0.5rem', color: 'primary.dark'}}
            onClick={() => deleteCartProduct(productId)}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Card>
    );
  }
}

export default CartProduct;