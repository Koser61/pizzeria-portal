import React from 'react';
import PropTypes from 'prop-types';

const OrderProduct = ({amount, name, params}) => {
  return (
    <React.Fragment>

    </React.Fragment>
  );
};

OrderProduct.propTypes = {
  amount: PropTypes.number,
  name: PropTypes.string,
  params: PropTypes.object,
};

export default OrderProduct;