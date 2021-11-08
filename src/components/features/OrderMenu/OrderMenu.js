import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';

import MenuProduct from '../../features/MenuProduct/MenuProductContainer';
import OrderNotes from '../../common/OrderNotes/OrderNotesContainer';

const OrderMenu = ({ readOnly, id, products }) => {
  if(!readOnly) {
    return (
      <Card
        elevation={6}
        sx={{paddingBottom: '0.5rem', paddingInline: '0.5rem'}}
      >
        {products.map((product) => {
          return (
            <MenuProduct
              key={product.id}
              productId={product.id}
              name={product.name}
              defaultPrice={product.price}
              params={product.params}
            />
          )
        })}
        <OrderNotes />
      </Card>
    );
  } else {
    return (
      <Card
        elevation={6}
        sx={{paddingBottom: '0.5rem', paddingInline: '0.5rem'}}
      >
        <OrderNotes readOnly id={id} />
      </Card>
    );
  }
};

OrderMenu.propTypes = {
  readOnly: PropTypes.bool,
  id: PropTypes.string,
  products: PropTypes.array,
};

export default OrderMenu;
