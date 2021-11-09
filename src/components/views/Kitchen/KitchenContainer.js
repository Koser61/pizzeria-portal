import { connect } from 'react-redux'
import Kitchen from './Kitchen';
import { getOrderedOrders, getOrderedOrdersLoadingState, fetchOrdersFromAPI } from '../../../redux/kitchenRedux';

const mapStateToProps = (state) => ({
  orders: getOrderedOrders(state),
  loading: getOrderedOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);