import { connect } from 'react-redux'
import OrderNotes from './OrderNotes';
import { getOrderNotes, changeOrderNotes } from '../../../redux/orderingRedux';

const mapStateToProps = (state) => ({
  notes: getOrderNotes(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderNotes: (string) => dispatch(changeOrderNotes(string)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderNotes);