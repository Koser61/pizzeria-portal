import { connect } from 'react-redux'
import KitchenOrders from './KitchenOrders';
import {
  getDeliveryOrdersWithOrderedStatus,
  getLocalOrdersWithOrderedStatus,
} from '../../../redux/kitchenRedux';

const mapStateToProps = (state, { delivery }) => {
  if(delivery) {
    return {
      orders: getDeliveryOrdersWithOrderedStatus(state),
    }
  } else {
    return {
      orders: getLocalOrdersWithOrderedStatus(state),
    }
  }
};

export default connect(mapStateToProps)(KitchenOrders);