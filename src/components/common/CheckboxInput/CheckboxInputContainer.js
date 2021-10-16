import { connect } from 'react-redux'
import CheckboxInput from './CheckboxInput';
import { getCheckedStateByIds, changeCheckedState, addDefaultParamPrice, changeOptionPrice } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId, paramId, optionId}) => ({
  checked: getCheckedStateByIds(state, productId, paramId, optionId),
});

const mapDispatchToProps = (dispatch, {productId, paramId, optionId}) => ({
  changeChecked: (bool) => dispatch(changeCheckedState(bool, productId, paramId, optionId)),
  addDefaultParamPrice: (price) => dispatch(addDefaultParamPrice(price, productId)),
  changeOptionPrice: (price) => dispatch(changeOptionPrice(price, productId, paramId, optionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxInput);