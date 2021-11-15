import { connect } from 'react-redux'
import OrderTimePicker from './OrderTimePicker';
import { getOrderTime, changeOrderTime } from '../../../redux/orderingRedux';
import { getOrderTimeById } from '../../../redux/ordersRedux';

const mapStateToProps = (state, {readOnly, id}) => {
  if(readOnly) {
    return {
      orderTime: getOrderTime(state),
      loadedOrderTime: getOrderTimeById(state, id),
    }
  } else {
    return {
      orderTime: getOrderTime(state),
    }
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeOrderTime: (dateTime) => dispatch(changeOrderTime(dateTime)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderTimePicker);