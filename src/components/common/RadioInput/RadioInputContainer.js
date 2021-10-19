import { connect } from 'react-redux'
import RadioInput from './RadioInput';
import {
  changeSelectedValue,
  getDefaultOptionsPriceById,
  changeDefaultOptionsPrice,
  changeParamPrice,
  changeParamOptionLabel
} from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId, paramId, optionId}) => ({
  defaultOptionsPrice: getDefaultOptionsPriceById(state, productId),
});

const mapDispatchToProps = (dispatch, {productId, paramId, optionId}) => ({
  changeSelected: (value) => dispatch(changeSelectedValue(value, productId, paramId)),
  changeDefaultOptionsPrice: (price) => dispatch(changeDefaultOptionsPrice(price, productId)),
  changeParamPrice: (price) => dispatch(changeParamPrice(price, productId, paramId)),
  changeParamOptionLabel: (label) => dispatch(changeParamOptionLabel(label, productId, paramId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RadioInput);