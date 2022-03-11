import { connect } from 'react-redux'
import Kitchen from './Kitchen';
import { getAllOrders, getOrdersLoadingState, fetchOrdersFromAPI } from '../../../redux/ordersRedux';
import { changeStatusHasChanged } from '../../../redux/kitchenRedux';
import { changeView } from '../../../redux/navRedux';

const mapStateToProps = (state) => ({
  allOrders: getAllOrders(state),
  loading: getOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
  changeStatusHasChanged: (bool) => dispatch(changeStatusHasChanged(bool)),
  changeView: (viewTitle) => dispatch(changeView(viewTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);