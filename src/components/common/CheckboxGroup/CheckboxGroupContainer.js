import { connect } from 'react-redux'
import CheckboxGroup from './CheckboxGroup';
import {
  getParamOptionsByIds,
  changeParamPrice,
  getUpdatedStateBool,
  changeDefaultOptionsPrice
} from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId, paramId}) => ({
  paramOptions: getParamOptionsByIds(state, productId, paramId),
  wasUpdated: getUpdatedStateBool(state, productId, paramId),
});

const mapDispatchToProps = (dispatch, {productId, paramId}) => ({
  changeParamPrice: (price) => dispatch(changeParamPrice(price, productId, paramId)),
  changeDefaultOptionsPrice: (price) => dispatch(changeDefaultOptionsPrice(price, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxGroup);