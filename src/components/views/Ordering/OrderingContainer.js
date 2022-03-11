import { connect } from 'react-redux';
import Ordering from './Ordering';
import { getAllOrders, getOrdersLoadingState, fetchOrdersFromAPI } from '../../../redux/ordersRedux';
import { changeView } from '../../../redux/navRedux';

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
  loading: getOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
  changeView: (viewTitle) => dispatch(changeView(viewTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);