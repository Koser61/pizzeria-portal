import { connect } from 'react-redux'
import NewOrder from './NewOrder';
import { getAllProducts, fetchProductsFromAPI, getProductsLoadingState } from '../../../redux/productsRedux';
import { changeOrderWasSent } from '../../../redux/ordersRedux';
import { changeView } from '../../../redux/navRedux';

const mapStateToProps = (state) => ({
  products: getAllProducts(state),
  loading: getProductsLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),
  changeOrderWasSent: (bool) => dispatch(changeOrderWasSent(bool)),
  changeView: (viewTitle) => dispatch(changeView(viewTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);