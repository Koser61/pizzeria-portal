import React from 'react';
import PropTypes from 'prop-types';

const KitchenOrder = ({ delivery, id, orderTime, products, address, phone, table }) => {
  return (
    <React.Fragment>
        
    </React.Fragment>
  );
};

KitchenOrder.propTypes = {
  delivery: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  orderTime: PropTypes.string,
  products: PropTypes.array,
  address: PropTypes.string,
  phone: PropTypes.string,
  table: PropTypes.string,
};

export default KitchenOrder;