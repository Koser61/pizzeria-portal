import { connect } from 'react-redux'
import MenuProduct from './MenuProduct';
import { changeProductAmount, setDefaultPrice } from '../../../redux/orderingRedux';

const mapStateToProps = () => ({
  
});

const mapDispatchToProps = (dispatch, {productId}) => ({
  changeProductAmount: (amount) => dispatch(changeProductAmount(amount, productId)),
  setDefaultPrice: (price) => dispatch(setDefaultPrice(price, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuProduct);