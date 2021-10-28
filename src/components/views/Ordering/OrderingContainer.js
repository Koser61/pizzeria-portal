import { connect } from 'react-redux'
import Ordering from './Ordering';
import { getAllOrders, getOrdersLoadingState, fetchOrdersFromAPI } from '../../../redux/ordersRedux';

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
  loading: getOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);