import { connect } from 'react-redux'
import Kitchen from './Kitchen';
import { getAllOrders, getOrdersLoadingState, fetchOrdersFromAPI } from '../../../redux/ordersRedux';
import { changeStatusHasChanged } from '../../../redux/kitchenRedux';

const mapStateToProps = (state) => ({
  allOrders: getAllOrders(state),
  loading: getOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
  changeStatusHasChanged: (bool) => dispatch(changeStatusHasChanged(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);