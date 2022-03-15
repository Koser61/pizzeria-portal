import { connect } from 'react-redux'
import KitchenOrder from './KitchenOrder';
import {
  getLocalOrderDataById,
  getDeliveryOrderDataById,
  changeOrderStatusInAPI,
} from '../../../redux/kitchenRedux';

const mapStateToProps = (state, {delivery, id}) => {
  if(delivery) {
    return {
      orderData: getDeliveryOrderDataById(state, id),
    }
  } else {
    return {
      orderData: getLocalOrderDataById(state, id),
    }
  }
};

const mapDispatchToProps = (dispatch, { id, delivery }) => ({
  changeOrderStatusInAPI: (status, orderData, index) => dispatch(changeOrderStatusInAPI(status, id, orderData, delivery, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KitchenOrder);