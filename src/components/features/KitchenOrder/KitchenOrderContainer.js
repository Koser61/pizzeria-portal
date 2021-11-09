import { connect } from 'react-redux'
import KitchenOrder from './KitchenOrder';
import {
  getOrderTime,
  getOrderProducts,
  getOrderTable,
  getOrderAddress,
  getOrderPhone
} from '../../../redux/kitchenRedux';

const mapStateToProps = (state, {delivery, id}) => {
  if(delivery) {
    return {
      address: getOrderAddress(state, id),
      phone: getOrderPhone(state, id),
      orderTime: getOrderTime(state, id),
      products: getOrderProducts(state, id),
    }
  } else {
    return {
      table: getOrderTable(state, id),
      orderTime: getOrderTime(state, id),
      products: getOrderProducts(state, id),
    }
  }
};

export default connect(mapStateToProps)(KitchenOrder);