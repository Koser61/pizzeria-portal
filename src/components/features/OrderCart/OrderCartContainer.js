import { connect } from 'react-redux'
import OrderCart from './OrderCart';
import { getCartProducts, getCartTotalPrice, changeCartTotalPrice, clearCartProducts } from '../../../redux/orderingRedux';

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  totalPrice: getCartTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeTotalPrice: (price) => dispatch(changeCartTotalPrice(price)),
  clearCartProducts: () => dispatch(clearCartProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderCart);