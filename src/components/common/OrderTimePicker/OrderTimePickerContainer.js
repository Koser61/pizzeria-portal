import { connect } from 'react-redux'
import OrderTimePicker from './OrderTimePicker';
import { getOrderTime, changeOrderTime } from '../../../redux/orderingRedux';

const mapStateToProps = (state) => ({
  orderTime: getOrderTime(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderTime: (newOrderTime) => dispatch(changeOrderTime(newOrderTime)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderTimePicker);