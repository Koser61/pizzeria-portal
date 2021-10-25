import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
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
    amount: PropTypes.number,
    price: PropTypes.number,
    changePrice: PropTypes.func,
    params: PropTypes.object,
    addCartProduct: PropTypes.func,
  };

  componentDidUpdate() {
    const { hasParams } = this.props;

    if(hasParams) {
      this.calculateBasePrice();
      this.calculatePriceSingle();
    }

    this.calculatePrice();
  }

  handleAddToCart() {
    const { addCartProduct } = this.props;
    const cartProduct = this.prepareCartProduct();

    addCartProduct(cartProduct);

    // reset ProductParams to defaults ?
  }

  prepareCartProduct() {
    const { hasParams, productId, amount, price, priceSingle, name, params } = this.props;

    let cartProduct = {
      id: productId,
      amount: amount,
      price: price,
      priceSingle: priceSingle,
      name: name,
      params: {},
    };

    if(hasParams) {
      Object.values(params).forEach((param) => {
        const paramKey = this.getKeyByValue(params, param);

        cartProduct.params[paramKey] = {};
        cartProduct.params[paramKey].label = param.paramLabel;
        cartProduct.params[paramKey].options = {};

        if(!param.options) {
          cartProduct.params[paramKey].options[param.value] = param.optionLabel;
        } else {
          Object.values(param.options).forEach((paramOption) => {
            const paramOptionKey = this.getKeyByValue(param.options, paramOption);

            if(paramOption.checked) {
              cartProduct.params[paramKey].options[paramOptionKey] = paramOption.label;
            };
          });
        };
      });
    };

    return cartProduct;
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

  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  render() {
    const { productId, name, price } = this.props;

    return (
      <Grid container p='0.5rem' justifyContent='space-around'>
        <Grid item container xs={8} lg={9}>
          <AmountWidget productId={productId} />
          <Grid item xs={9} alignSelf='center'>
            <Typography variant='h6' marginLeft='1rem' textAlign='center'>
              {name}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={4} lg={3} alignItems='center'>
          <Box component={Grid} item sm={6} display={{xs: 'none', sm: 'grid'}}>
            <Box display='flex' justifyContent='flex-end'>
              <Chip
                sx={{ fontSize: '1.25rem'}}
                variant='outlined'
                icon={<AttachMoneyIcon />}
                label={price}
              />
            </Box>
          </Box>
          <Grid item xs={12} sm={6}>
            <Box display='flex' justifyContent='flex-end'>
              <Button
                sx={{ borderRadius: 2 }}
                variant='contained'
                onClick={() => this.handleAddToCart()}
              >
                <AddShoppingCartIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ProductBase;
