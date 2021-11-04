import { connect } from 'react-redux'
import TableOrders from './TableOrders';
import { getAllOrders, getOrdersByTable } from '../../../redux/ordersRedux';

const mapStateToProps = (state, {value}) => ({
  allOrders: getAllOrders(state),
  orders: getOrdersByTable(state, value),
});

export default connect(mapStateToProps)(TableOrders);