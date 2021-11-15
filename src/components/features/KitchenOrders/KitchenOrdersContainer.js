import { connect } from 'react-redux'
import KitchenOrders from './KitchenOrders';
import { getDeliveryOrders, getLocalOrders, getAllOrders } from '../../../redux/ordersRedux';

const mapStateToProps = (state, {delivery}) => {
  if(delivery) {
    return {
      orders: getDeliveryOrders(state),
      allOrders: getAllOrders(state),
    }
  } else {
    return {
      orders: getLocalOrders(state),
      allOrders: getAllOrders(state),
    }
  }
};

export default connect(mapStateToProps)(KitchenOrders);