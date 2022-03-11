import { connect } from 'react-redux'
import Order from './Order';
import { getAllProducts, fetchProductsFromAPI, getProductsLoadingState } from '../../../redux/productsRedux';
import { changeView } from '../../../redux/navRedux';

const mapStateToProps = (state) => ({
  products: getAllProducts(state),
  loading: getProductsLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),
  changeView: (viewTitle) => dispatch(changeView(viewTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);