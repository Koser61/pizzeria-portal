import { connect } from 'react-redux'
import CheckboxInput from './CheckboxInput';
import {
  setOptionLabel,
  getCheckedStateByIds,
  changeCheckedState,
  changeOptionPrice,
  getDefaultOptionsPriceById,
  changeDefaultOptionsPrice,
  setUpdatedState
} from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId, paramId, optionId}) => ({
  checked: getCheckedStateByIds(state, productId, paramId, optionId),
  defaultOptionsPrice: getDefaultOptionsPriceById(state, productId),
});

const mapDispatchToProps = (dispatch, {productId, paramId, optionId}) => ({
  setOptionLabel: (label) => dispatch(setOptionLabel(label, productId, paramId, optionId)),
  changeChecked: (bool) => dispatch(changeCheckedState(bool, productId, paramId, optionId)),
  changeOptionPrice: (price) => dispatch(changeOptionPrice(price, productId, paramId, optionId)),
  changeDefaultOptionsPrice: (price) => dispatch(changeDefaultOptionsPrice(price, productId)),
  setUpdatedState: (bool) => dispatch(setUpdatedState(bool, productId, paramId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxInput);