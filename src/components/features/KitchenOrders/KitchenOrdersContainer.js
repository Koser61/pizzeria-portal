import { connect } from 'react-redux'
import KitchenOrders from './KitchenOrders';
import { getDeliveryOrders, getLocalOrders } from '../../../redux/kitchenRedux';

const mapStateToProps = (state, {delivery}) => {
  if(delivery) {
    return {
      orders: getDeliveryOrders(state),
    }
  } else {
    return {
      orders: getLocalOrders(state),
    }
  }
};

export default connect(mapStateToProps)(KitchenOrders);