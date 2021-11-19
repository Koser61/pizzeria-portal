import { connect } from 'react-redux'
import Kitchen from './Kitchen';
import { getAllOrders, getOrdersLoadingState, fetchOrdersFromAPI } from '../../../redux/ordersRedux';

const mapStateToProps = (state) => ({
  allOrders: getAllOrders(state),
  loading: getOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);