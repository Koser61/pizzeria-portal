import { connect } from 'react-redux'
import MenuProduct from './MenuProduct';
import { changeProductAmount, changePriceSingle, setDefaultPrice } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId}) => ({

});

const mapDispatchToProps = (dispatch, {productId}) => ({
  changeProductAmount: (amount) => dispatch(changeProductAmount(amount, productId)),
  changePriceSingle: (price) => dispatch(changePriceSingle(price, productId)),
  setDefaultPrice: (price) => dispatch(setDefaultPrice(price, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuProduct);