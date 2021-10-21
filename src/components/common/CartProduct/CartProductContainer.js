import { connect } from 'react-redux'
import CartProduct from './CartProduct';
import { getCartTotalPrice, changeCartTotalPrice } from '../../../redux/orderingRedux';

const mapStateToProps = (state) => ({
  totalPrice: getCartTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeTotalPrice: (price) => dispatch(changeCartTotalPrice(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);