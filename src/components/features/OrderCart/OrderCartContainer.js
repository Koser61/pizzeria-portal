import { connect } from 'react-redux'
import OrderCart from './OrderCart';
import { getCartProducts, getCartTotalPrice, changeCartTotalPrice } from '../../../redux/orderingRedux';

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  totalPrice: getCartTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeTotalPrice: (price) => dispatch(changeCartTotalPrice(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderCart);