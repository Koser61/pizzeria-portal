import { connect } from 'react-redux'
import TableOrders from './TableOrders';
import { getOrdersByTable } from '../../../redux/ordersRedux';

const mapStateToProps = (state, {value}) => ({
  orders: getOrdersByTable(state, value),
});

export default connect(mapStateToProps)(TableOrders);