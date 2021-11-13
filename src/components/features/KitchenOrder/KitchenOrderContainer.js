import { connect } from 'react-redux'
import KitchenOrder from './KitchenOrder';
import {
  getOrderTime,
  getOrderProducts,
  getOrderTable,
  getOrderAddress,
  getOrderPhone,
  getStatusHasChanged,
  changeOrderStatusInAPI,
} from '../../../redux/kitchenRedux';
import { getOrderDataById, fetchOrdersFromAPI } from '../../../redux/ordersRedux';

const mapStateToProps = (state, {delivery, id}) => {
  if(delivery) {
    return {
      address: getOrderAddress(state, id),
      phone: getOrderPhone(state, id),
      orderTime: getOrderTime(state, id),
      products: getOrderProducts(state, id),
      orderData: getOrderDataById(state, id),
      statusHasChanged: getStatusHasChanged(state),
    }
  } else {
    return {
      table: getOrderTable(state, id),
      orderTime: getOrderTime(state, id),
      products: getOrderProducts(state, id),
      orderData: getOrderDataById(state, id),
    }
  }
};

const mapDispatchToProps = (dispatch, {id, index}) => ({
  changeOrderStatusInAPI: (status, orderData) => dispatch(changeOrderStatusInAPI(status, id, orderData, index)),
  fetchOrdersFromAPI: () => dispatch(fetchOrdersFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(KitchenOrder);