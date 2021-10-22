import { connect } from 'react-redux'
import CartProduct from './CartProduct';
import { getCartTotalPrice, changeCartTotalPrice, deleteCartProduct } from '../../../redux/orderingRedux';

const mapStateToProps = (state) => ({
  totalPrice: getCartTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeTotalPrice: (price) => dispatch(changeCartTotalPrice(price)),
  deleteCartProduct: (index) => dispatch(deleteCartProduct(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);