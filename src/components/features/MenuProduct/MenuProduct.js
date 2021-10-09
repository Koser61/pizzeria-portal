import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

import ProductBase from '../ProductBase/ProductBase';
import ProductParams from '../ProductParams/ProductParams';

class MenuProduct extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    params: PropTypes.object,
    setBasePrice: PropTypes.func,
  };

  componentDidMount() {
    const { setBasePrice, price } = this.props;

    setBasePrice(price);
  }

  render() {
    const { id, name, params } = this.props;

    if (params) {
      return (
        <Card key={id} variant='outlined' sx={{ marginTop: '0.5rem' }}>
          <ProductBase id={id} name={name} />
          <Divider />
          <ProductParams productId={id} params={params} />
        </Card>
      );
    } else {
      return (
        <Card key={id} variant='outlined' sx={{ marginTop: '0.5rem' }}>
          <ProductBase id={id} name={name} />
        </Card>
      );
    }
  }
}

export default MenuProduct;
