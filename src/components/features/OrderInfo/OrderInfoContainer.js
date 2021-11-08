import { connect } from 'react-redux'
import OrderInfo from './OrderInfo';
import { getOrderStatusById, getOrderTableById } from '../../../redux/ordersRedux';

const mapStateToProps = (state, {id}) => ({
  status: getOrderStatusById(state, id),
  table: getOrderTableById(state, id),
});

const mapDispatchToProps = (dispatch, {id}) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo);