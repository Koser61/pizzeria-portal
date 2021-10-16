import { connect } from 'react-redux'
import CheckboxGroup from './CheckboxGroup';
import { getParamOptionsByIds, changeParamPrice } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId, paramId}) => ({
  paramOptions: getParamOptionsByIds(state, productId, paramId),
});

const mapDispatchToProps = (dispatch, {productId, paramId}) => ({
  changeParamPrice: (price) => dispatch(changeParamPrice(price, productId, paramId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxGroup);