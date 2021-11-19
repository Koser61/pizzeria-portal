import { connect } from 'react-redux'
import KitchenOrders from './KitchenOrders';
import {
  getLocalOrders,
  getLocalOrdersLoadingState,
  getDeliveryOrders,
  getDeliveryOrdersLoadingState,
  fetchLocalOrdersFromAPI,
  fetchDeliveryOrdersFromAPI,
} from '../../../redux/kitchenRedux';

const mapStateToProps = (state, {delivery}) => {
  if(delivery) {
    return {
      loading: getDeliveryOrdersLoadingState(state),
      orders: getDeliveryOrders(state),
    }
  } else {
    return {
      loading: getLocalOrdersLoadingState(state),
      orders: getLocalOrders(state),
    }
  }
};

const mapDispatchToProps = (dispatch, {delivery}) => {
  if(delivery) {
    return {
      fetchOrders: () => dispatch(fetchDeliveryOrdersFromAPI()),
    }
  } else {
    return {
      fetchOrders: () => dispatch(fetchLocalOrdersFromAPI()),
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(KitchenOrders);