import { connect } from 'react-redux'
import RadioInputGroup from './RadioInputGroup';
import { getSelectedValueByIds, changeSelectedValue, setParamLabel } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId, paramId}) => ({
  selected: getSelectedValueByIds(state, productId, paramId),
});

const mapDispatchToProps = (dispatch, {productId, paramId}) => ({
  changeSelected: (value) => dispatch(changeSelectedValue(value, productId, paramId)),
  setParamLabel: (label) => dispatch(setParamLabel(label, productId, paramId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RadioInputGroup);