import { connect } from 'react-redux'
import OrderCart from './OrderCart';
import { getCartProducts, getCartTotalPrice, changeCartTotalPrice, clearCartProducts } from '../../../redux/orderingRedux';
import { getOrderTotalPriceById } from '../../../redux/ordersRedux';

const mapStateToProps = (state, {readOnly, id}) => {
  if(!readOnly) {
    return {
      products: getCartProducts(state),
      totalPrice: getCartTotalPrice(state),
    }
  } else {
    return {
      products: getCartProducts(state),
      totalPrice: getOrderTotalPriceById(state, id),
    }
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeTotalPrice: (price) => dispatch(changeCartTotalPrice(price)),
  clearCartProducts: () => dispatch(clearCartProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderCart);