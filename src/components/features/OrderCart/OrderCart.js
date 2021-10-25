import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CartProduct from '../../common/CartProduct/CartProductContainer';
import OrderButton from '../../common/OrderButton/OrderButtonContainer';

class OrderCart extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    totalPrice: PropTypes.number,
    changeTotalPrice: PropTypes.func,
    clearCartProducts: PropTypes.func,
  };

  componentDidMount() {
    const { changeTotalPrice, clearCartProducts } = this.props;

    changeTotalPrice(0);
    clearCartProducts();
  }

  render() {
    const { products, totalPrice } = this.props;

    return (
      <Card elevation={6}>
        <Stack m='0.5rem' spacing='0.5rem'>
          {products.map((product, i) => {
            return (
              <CartProduct
                key={i}
                productId={i}
                amount={product.amount}
                name={product.name}
                price={product.price}
                params={product.params}
              />
            );
          })}
        </Stack>
        <Divider />
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          padding='1rem'
        >
          <Typography variant='h6'>
            Total: ${totalPrice}
          </Typography>
          <OrderButton />
        </Box>
      </Card>
    );
  }
}

export default OrderCart;