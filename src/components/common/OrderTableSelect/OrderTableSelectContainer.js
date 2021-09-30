import { connect } from 'react-redux'
import OrderTableSelect from './OrderTableSelect';
import { getTable, changeTable } from '../../../redux/orderingRedux';

const mapStateToProps = (state) => ({
  table: getTable(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeTable: (newTable) => dispatch(changeTable(newTable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderTableSelect);