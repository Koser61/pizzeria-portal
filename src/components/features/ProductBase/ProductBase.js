import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import AmountWidget from '../../common/AmountWidget/AmountWidgetContainer';

class ProductBase extends React.Component {
  static propTypes = {
    hasParams: PropTypes.bool,
    productId: PropTypes.string,
    name: PropTypes.string,
    defaultPrice: PropTypes.number,
    defaultOptionsPrice: PropTypes.number,
    basePrice: PropTypes.number,
    setBasePrice: PropTypes.func,
    priceSingle: PropTypes.number,
    changePriceSingle: PropTypes.func,
    price: PropTypes.number,
    changePrice: PropTypes.func,
    params: PropTypes.object,
  };

  componentDidUpdate() {
    const { hasParams } = this.props;

    if(hasParams) {
      this.calculateBasePrice();
      this.calculatePriceSingle();
    }

    this.calculatePrice();
  }

  calculateBasePrice() {
    const { defaultPrice, defaultOptionsPrice, setBasePrice } = this.props;

    setBasePrice(defaultPrice - defaultOptionsPrice);
  }

  calculatePriceSingle() {
    const { basePrice, params, changePriceSingle } = this.props;

    let paramsPrice = 0;

    Object.values(params).forEach((param) => {
      paramsPrice += param.price;
    });

    changePriceSingle(basePrice + paramsPrice);
  }

  calculatePrice() {
    const { priceSingle, amount, changePrice } = this.props;

    changePrice(priceSingle * amount);
  }

  render() {
    const { productId, name, price } = this.props;

    return (
      <Box
        width={1 / 1}
        display='inline-flex'
        justifyContent='space-between'
        alignItems='center'
        sx={{ padding: '0.5rem' }}
      >
        <Chip
          sx={{ marginLeft: '0.5rem', fontSize: '1.25rem'}}
          color='primary'
          icon={<AttachMoneyIcon />}
          label={price}
        />
        <Typography variant='h6' marginLeft='1rem'>
          {name}
        </Typography>
        <Box display='inline-flex' alignItems='center'>
          <AmountWidget productId={productId} />
          <Button variant='contained' sx={{ height: 64, borderRadius: 2 }}>
            <AddShoppingCartIcon />
          </Button>
        </Box>
      </Box>
    );
  }
}

export default ProductBase;
