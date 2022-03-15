import { connect } from 'react-redux'
import Kitchen from './Kitchen';
import {
  getLocalOrdersLoadingState,
  getDeliveryOrdersLoadingState,
  fetchLocalOrdersFromAPI,
  fetchDeliveryOrdersFromAPI,
  changeStatusHasChanged,
} from '../../../redux/kitchenRedux';
import { changeView } from '../../../redux/navRedux';

const mapStateToProps = (state) => ({
  localOrdersLoading: getLocalOrdersLoadingState(state),
  deliveryOrdersLoading: getDeliveryOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchLocalOrders: () => dispatch(fetchLocalOrdersFromAPI()),
  fetchDeliveryOrders: () => dispatch(fetchDeliveryOrdersFromAPI()),
  changeStatusHasChanged: (bool) => dispatch(changeStatusHasChanged(bool)),
  changeView: (viewTitle) => dispatch(changeView(viewTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);