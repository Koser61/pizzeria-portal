import { connect } from 'react-redux'
import KitchenOrder from './KitchenOrder';
import {
  getLocalOrderTimeById,
  getDeliveryOrderTimeById,
  getLocalOrderProductsById,
  getDeliveryOrderProductsById,
  getOrderTableById,
  getOrderNotesById,
  getOrderAddressById,
  getOrderPhoneById,
  changeOrderStatusInAPI,
  deleteDeliveryOrder,
  deleteLocalOrder,
} from '../../../redux/kitchenRedux';
import { getOrderDataById } from '../../../redux/ordersRedux';

const mapStateToProps = (state, {delivery, id}) => {
  if(delivery) {
    return {
      address: getOrderAddressById(state, id),
      phone: getOrderPhoneById(state, id),
      orderTime: getDeliveryOrderTimeById(state, id),
      products: getDeliveryOrderProductsById(state, id),
      orderData: getOrderDataById(state, id),
    }
  } else {
    return {
      table: getOrderTableById(state, id),
      orderTime: getLocalOrderTimeById(state, id),
      notes: getOrderNotesById(state, id),
      products: getLocalOrderProductsById(state, id),
      orderData: getOrderDataById(state, id),
    }
  }
};

const mapDispatchToProps = (dispatch, {delivery, id, index}) => {
  if(delivery) {
    return {
      changeOrderStatusInAPI: (status, orderData) => dispatch(changeOrderStatusInAPI(status, delivery, id, orderData, index)),
      deleteOrderFromState: (localIndex) => dispatch(deleteDeliveryOrder(localIndex)),
    }
  } else {
    return {
      changeOrderStatusInAPI: (status, orderData) => dispatch(changeOrderStatusInAPI(status, delivery, id, orderData, index)),
      deleteOrderFromState: (localIndex) => dispatch(deleteLocalOrder(localIndex)),
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(KitchenOrder);