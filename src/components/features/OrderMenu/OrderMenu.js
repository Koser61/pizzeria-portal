import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';

import MenuProduct from '../../features/MenuProduct/MenuProductContainer';
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
        return (
          <MenuProduct
            key={product.id}
            id={product.id}
            name={product.name}
            defaultPrice={product.price}
            params={product.params}
          />
        );
      })}
      <OrderNotes />
    </Card>
  );
};

OrderMenu.propTypes = {
  products: PropTypes.array,
};

export default OrderMenu;
