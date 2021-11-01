import { connect } from 'react-redux'
import Ordering from './Ordering';
import { getAllOrders, getOrdersLoadingState, fetchOrdersFromAPI } from '../../../redux/ordersRedux';
import { changeOrdersUpdated } from '../../../redux/orderingRedux';

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
  loading: getOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
  changeOrdersUpdated: () => dispatch(changeOrdersUpdated()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);