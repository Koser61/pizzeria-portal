import { connect } from 'react-redux';
import Ordering from './Ordering';
import { getAllOrders, getOrdersLoadingState, fetchOrdersFromAPI } from '../../../redux/ordersRedux';
import { changeStatusHasChanged } from '../../../redux/kitchenRedux';

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
  loading: getOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
  changeStatusHasChanged: (bool) => dispatch(changeStatusHasChanged(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);