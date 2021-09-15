import {connect} from 'react-redux';
import NavDrawer from './NavDrawer';
import { toggleDrawer, getDrawerState } from '../../../redux/navRedux';

const mapStateToProps = (state) => ({
  drawerOpen: getDrawerState(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: value => dispatch(toggleDrawer(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer);