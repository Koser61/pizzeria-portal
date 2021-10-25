import { connect } from 'react-redux'
import CartProductDetails from './CartProductDetails';
import { getCartProductParamsById } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId}) => ({
  params: getCartProductParamsById(state, productId),
});

export default connect(mapStateToProps)(CartProductDetails);