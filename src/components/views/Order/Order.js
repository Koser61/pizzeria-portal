import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import OrderInfo from '../../features/OrderInfo/OrderInfoContainer';

const Order = ({ match: { params: { id } }, changeView }) => {
  useEffect(() => changeView('Order'), [changeView])
  
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
  changeView: PropTypes.func,
};

export default Order;