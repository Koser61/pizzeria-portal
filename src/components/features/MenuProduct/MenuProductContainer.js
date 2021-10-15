import { connect } from 'react-redux'
import MenuProduct from './MenuProduct';
import { changeProductAmount, changePriceSingle } from '../../../redux/orderingRedux';

const mapStateToProps = () => ({
  
});

const mapDispatchToProps = (dispatch, {productId}) => ({
  changeProductAmount: (amount) => dispatch(changeProductAmount(amount, productId)),
  changePriceSingle: (price) => dispatch(changePriceSingle(price, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuProduct);