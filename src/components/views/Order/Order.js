import React from 'react';
import PropTypes from 'prop-types';

import OrderInfo from '../../features/OrderInfo/OrderInfoContainer';

const Order = ({ match: { params: { id } } }) => {
  return (
    <React.Fragment>
      <OrderInfo id={id} />
    </React.Fragment>
  );
};

Order.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Order;