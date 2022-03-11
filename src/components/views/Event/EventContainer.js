import { connect } from 'react-redux'
import Event from './Event';
import { changeView } from '../../../redux/navRedux';

const mapDispatchToProps = (dispatch) => ({
  changeView: (viewTitle) => dispatch(changeView(viewTitle)),
});

export default connect(null, mapDispatchToProps)(Event);