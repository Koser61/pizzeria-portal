import { connect } from 'react-redux'
import OrderOptions from './OrderOptions';
import { getOrderTableById } from '../../../redux/ordersRedux';

const mapStateToProps = (state, {id}) => ({
  orderTable: getOrderTableById(state, id),
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderOptions);