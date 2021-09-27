import { connect } from 'react-redux'
import OrderOptions from './OrderOptions';
import { getOrderTime, changeOrderTime, getTable, changeTable } from '../../../redux/orderingRedux';

const mapStateToProps = (state) => ({
  orderTime: getOrderTime(state),
  table: getTable(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderTime: (newOrderTime) => dispatch(changeOrderTime(newOrderTime)),
  changeTable: (newTable) => dispatch(changeTable(newTable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderOptions);