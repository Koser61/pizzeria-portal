import { connect } from 'react-redux'
import ProductParams from './ProductParams';
import { getProductDefaultPriceById, getDefaultOptionPricesById, setBasePrice } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId}) => ({
  defaultPrice: getProductDefaultPriceById(state, productId),
  defaultOptionPrices: getDefaultOptionPricesById(state, productId),
});

const mapDispatchToProps = (dispatch, {productId}) => ({
  setBasePrice: (price) => dispatch(setBasePrice(price, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductParams);