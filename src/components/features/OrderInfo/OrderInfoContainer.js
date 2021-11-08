import { connect } from 'react-redux'
import OrderInfo from './OrderInfo';
import { getOrderStatusById, getOrderTableById, getOrderProductsById } from '../../../redux/ordersRedux';
import { addCartProduct } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {id}) => ({
  status: getOrderStatusById(state, id),
  table: getOrderTableById(state, id),
  products: getOrderProductsById(state, id),
});

const mapDispatchToProps = (dispatch, {status}) => {
  if(status !== 'new') {
    return {
      addCartProduct: (product) => dispatch(addCartProduct(product)),
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo);