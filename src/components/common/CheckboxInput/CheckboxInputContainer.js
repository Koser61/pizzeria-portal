import { connect } from 'react-redux'
import CheckboxInput from './CheckboxInput';
import { getCheckedStateByIds, changeCheckedState } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId, paramId, id}) => ({
  checked: getCheckedStateByIds(state, productId, paramId, id),
});

const mapDispatchToProps = (dispatch, {productId, paramId, id}) => ({
  changeChecked: (bool) => dispatch(changeCheckedState(bool, productId, paramId, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxInput);