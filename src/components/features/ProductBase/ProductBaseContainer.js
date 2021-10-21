import { connect } from 'react-redux'
import ProductBase from './ProductBase';
import {
  getProductDefaultPriceById,
  getDefaultOptionsPriceById,
  getProductBasePriceById,
  setBasePrice,
  getProductParams,
  getProductPriceSingleById,
  changePriceSingle,
  getProductAmountById,
  getProductPriceById,
  changePrice,
  addCartProduct,
} from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId}) => ({
  defaultPrice: getProductDefaultPriceById(state, productId),
  defaultOptionsPrice: getDefaultOptionsPriceById(state, productId),
  basePrice: getProductBasePriceById(state, productId),
  priceSingle: getProductPriceSingleById(state, productId),
  amount: getProductAmountById(state, productId),
  price: getProductPriceById(state, productId),
  params: getProductParams(state, productId),
});

const mapDispatchToProps = (dispatch, {productId}) => ({
  setBasePrice: (price) => dispatch(setBasePrice(price, productId)),
  changePriceSingle: (price) => dispatch(changePriceSingle(price, productId)),
  changePrice: (price) => dispatch(changePrice(price, productId)),
  addCartProduct: (cartProduct) => dispatch(addCartProduct(cartProduct, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBase);