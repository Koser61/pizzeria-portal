import { connect } from 'react-redux'
import Booking from './Booking';
import { changeView } from '../../../redux/navRedux';

const mapDispatchToProps = (dispatch) => ({
  changeView: (viewTitle) => dispatch(changeView(viewTitle)),
});

export default connect(null, mapDispatchToProps)(Booking);