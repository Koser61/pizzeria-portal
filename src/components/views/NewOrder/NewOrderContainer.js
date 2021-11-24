import { connect } from 'react-redux'
import NewOrder from './NewOrder';
import { getAllProducts, fetchProductsFromAPI, getProductsLoadingState } from '../../../redux/productsRedux';
import { changeOrderWasSent } from '../../../redux/ordersRedux';

const mapStateToProps = (state) => ({
  products: getAllProducts(state),
  loading: getProductsLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),
  changeOrderWasSent: (bool) => dispatch(changeOrderWasSent(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);