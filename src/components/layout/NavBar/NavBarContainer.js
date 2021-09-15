import {connect} from 'react-redux';
import NavBar from './NavBar';
import { getCurrentView, getDrawerState, toggleDrawer } from '../../../redux/navRedux';

const mapStateToProps = (state) => ({
  currentView: getCurrentView(state),
  drawerOpen: getDrawerState(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: (value) => dispatch(toggleDrawer(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);