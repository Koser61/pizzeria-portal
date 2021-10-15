import { connect } from 'react-redux'
import ProductBase from './ProductBase';
import { getProductPriceById } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId}) => ({
  price: getProductPriceById(state, productId),
});

const mapDispatchToProps = (dispatch, {productId}) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBase);