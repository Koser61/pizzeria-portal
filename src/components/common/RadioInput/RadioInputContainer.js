import { connect } from 'react-redux'
import RadioInput from './RadioInput';
import { changeSelectedValue } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId, paramId, optionId}) => ({

});

const mapDispatchToProps = (dispatch, {productId, paramId, optionId}) => ({
  changeSelected: (value) => dispatch(changeSelectedValue(value, productId, paramId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RadioInput);