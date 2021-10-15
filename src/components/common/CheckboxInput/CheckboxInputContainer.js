import { connect } from 'react-redux'
import CheckboxInput from './CheckboxInput';
import { getCheckedStateByIds, changeCheckedState } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId, paramId, optionId}) => ({
  checked: getCheckedStateByIds(state, productId, paramId, optionId),
});

const mapDispatchToProps = (dispatch, {productId, paramId, optionId}) => ({
  changeChecked: (bool) => dispatch(changeCheckedState(bool, productId, paramId, optionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxInput);