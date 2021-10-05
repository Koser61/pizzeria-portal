import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

import ProductBase from '../ProductBase/ProductBase';
import ProductParams from '../ProductParams/ProductParams';
import OrderNotes from '../../common/OrderNotes/OrderNotesContainer';

const OrderMenu = ({ products }) => {
  return (
    <Card
      elevation={6}
      sx={{
        marginTop: '0.5rem',
        paddingBottom: '0.5rem',
        paddingInline: '0.5rem',
      }}
    >
      {products.map((product) => {
        if (product.params) {
          return (
            <Card key={product.id} variant='outlined' sx={{marginTop: '0.5rem'}}>
              <ProductBase id={product.id} name={product.name} />
              <Divider />
              <ProductParams params={product.params} />
            </Card>
          );
        } else {
          return (
            <Card key={product.id} variant='outlined' sx={{marginTop: '0.5rem'}}>
              <ProductBase id={product.id} name={product.name} />
            </Card>
          );
        }
      })}
      <OrderNotes />
    </Card>
  );
};

OrderMenu.propTypes = {
  products: PropTypes.array,
};

export default OrderMenu;
