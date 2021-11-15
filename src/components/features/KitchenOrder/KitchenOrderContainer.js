import { connect } from 'react-redux'
import KitchenOrder from './KitchenOrder';
import {
  getOrderTimeById,
  getOrderProductsById,
  getOrderTableById,
  getOrderAddressById,
  getOrderPhoneById,
  getOrderDataById,
  changeOrderStatusInAPI,
} from '../../../redux/ordersRedux';

const mapStateToProps = (state, {delivery, id}) => {
  if(delivery) {
    return {
      address: getOrderAddressById(state, id),
      phone: getOrderPhoneById(state, id),
      orderTime: getOrderTimeById(state, id),
      products: getOrderProductsById(state, id),
      orderData: getOrderDataById(state, id),
    }
  } else {
    return {
      table: getOrderTableById(state, id),
      orderTime: getOrderTimeById(state, id),
      products: getOrderProductsById(state, id),
      orderData: getOrderDataById(state, id),
    }
  }
};

const mapDispatchToProps = (dispatch, {id, index}) => ({
  changeOrderStatusInAPI: (status, orderData) => dispatch(changeOrderStatusInAPI(status, id, orderData, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KitchenOrder);