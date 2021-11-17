import { connect } from 'react-redux'
import Ordering from './Ordering';
import { getAllOrders, getOrdersLoadingState, changeOrderWasSent, fetchOrdersFromAPI } from '../../../redux/ordersRedux';

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
  loading: getOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
  changeOrderWasSent: (bool) => dispatch(changeOrderWasSent(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);