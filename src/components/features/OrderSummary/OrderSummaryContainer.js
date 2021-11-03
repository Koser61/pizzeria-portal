import { connect } from 'react-redux'
import OrderSummary from './OrderSummary';
import {
  getOrderStatusById,
  getOrderTotalPriceById,
  getOrderOrderTimeById,
  getOrderDataById,
  changeOrderStatusInAPI
} from '../../../redux/ordersRedux';

const mapStateToProps = (state, {id}) => ({
  status: getOrderStatusById(state, id),
  totalPrice: getOrderTotalPriceById(state, id),
  orderTime: getOrderOrderTimeById(state, id),
  orderData: getOrderDataById(state, id),
});

const mapDispatchToProps = (dispatch, {index}) => ({
  changeOrderStatus: (orderData, status) => dispatch(changeOrderStatusInAPI(orderData, status, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);