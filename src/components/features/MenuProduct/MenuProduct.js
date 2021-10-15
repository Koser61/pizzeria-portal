import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

import ProductBase from '../ProductBase/ProductBaseContainer';
import ProductParams from '../ProductParams/ProductParams';

class MenuProduct extends React.Component {
  static propTypes = {
    productId: PropTypes.string,
    name: PropTypes.string,
    defaultPrice: PropTypes.number,
    params: PropTypes.object,
    changeProductAmount: PropTypes.func,
    changePriceSingle: PropTypes.func,
  };

  componentDidMount() {
    const { changeProductAmount, changePriceSingle, defaultPrice } = this.props;
    
    changeProductAmount(1);
    changePriceSingle(defaultPrice);
  }

  render() {
    const { productId, name, params } = this.props;

    if (params) {
      return (
        <Card key={productId} variant='outlined' sx={{ marginTop: '0.5rem' }}>
          <ProductBase productId={productId} name={name} />
          <Divider />
          <ProductParams productId={productId} params={params} />
        </Card>
      );
    } else {
      return (
        <Card key={productId} variant='outlined' sx={{ marginTop: '0.5rem' }}>
          <ProductBase productId={productId} name={name} />
        </Card>
      );
    }
  }
}

export default MenuProduct;
