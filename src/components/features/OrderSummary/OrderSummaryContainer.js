import { connect } from 'react-redux'
import OrderSummary from './OrderSummary';
import { getOrderStatusById, getOrderTotalPriceById, getOrderOrderTimeById, changeOrderStatusInAPI } from '../../../redux/ordersRedux';

const mapStateToProps = (state, {id}) => ({
  status: getOrderStatusById(state, id),
  totalPrice: getOrderTotalPriceById(state, id),
  orderTime: getOrderOrderTimeById(state, id),
});

const mapDispatchToProps = (dispatch, {id}) => ({
  changeOrderStatus: (status) => dispatch(changeOrderStatusInAPI(status, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);