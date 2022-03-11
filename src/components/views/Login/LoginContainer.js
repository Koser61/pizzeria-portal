import { connect } from 'react-redux'
import Login from './Login';
import { changeView } from '../../../redux/navRedux';

const mapDispatchToProps = (dispatch) => ({
  changeView: (viewTitle) => dispatch(changeView(viewTitle)),
});

export default connect(null, mapDispatchToProps)(Login);