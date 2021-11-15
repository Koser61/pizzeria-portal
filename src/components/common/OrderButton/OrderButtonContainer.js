import { connect } from 'react-redux'
import OrderButton from './OrderButton';
import {
  getTable,
  getOrderTime,
  getOrderNotes,
  getCartTotalPrice,
  getCartProducts,
} from '../../../redux/orderingRedux';
import {
  getSendOrderLoadingState,
  sendOrderToAPI,
} from '../../../redux/ordersRedux';

const mapStateToProps = (state) => ({
  loading: getSendOrderLoadingState(state),
  orderTable: getTable(state),
  orderTime: getOrderTime(state),
  orderNotes: getOrderNotes(state),
  cartTotalPrice: getCartTotalPrice(state),
  orderProducts: getCartProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendOrder: (payload) => dispatch(sendOrderToAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);