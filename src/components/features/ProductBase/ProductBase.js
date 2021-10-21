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

    /* prepare cartProduct */
    const cartProduct = this.prepareCartProduct();

    /* add cartProduct to cart state */
    addCartProduct(cartProduct);

    /* reset ProductParams to defaults ? */
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

  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
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
          <Button
            sx={{ height: 64, borderRadius: 2 }}
            variant='contained'
            onClick={() => this.handleAddToCart()}
          >
            <AddShoppingCartIcon />
          </Button>
        </Box>
      </Box>
    );
  }
}

export default ProductBase;
