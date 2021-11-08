import { connect } from 'react-redux'
import OrderNotes from './OrderNotes';
import { getOrderNotes, changeOrderNotes } from '../../../redux/orderingRedux';
import { getOrderNotesById } from '../../../redux/ordersRedux';

const mapStateToProps = (state, {readOnly, id}) => {
  if(!readOnly) {
    return {
      notes: getOrderNotes(state),
    }
  } else {
    return {
      notes: getOrderNotes(state),
      orderNotes: getOrderNotesById(state, id),
    }
  }
  
};

const mapDispatchToProps = (dispatch) => ({
  changeOrderNotes: (string) => dispatch(changeOrderNotes(string)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderNotes);