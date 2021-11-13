import { connect } from 'react-redux'
import KitchenOrders from './KitchenOrders';
import { getDeliveryOrders, getLocalOrders, getOrderedOrders } from '../../../redux/kitchenRedux';

const mapStateToProps = (state, {delivery}) => {
  if(delivery) {
    return {
      orders: getDeliveryOrders(state),
      allOrders: getOrderedOrders(state),
    }
  } else {
    return {
      orders: getLocalOrders(state),
      allOrders: getOrderedOrders(state),
    }
  }
};

export default connect(mapStateToProps)(KitchenOrders);