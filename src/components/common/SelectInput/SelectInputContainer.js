import { connect } from 'react-redux'
import SelectInput from './SelectInput';
import {
  getSelectedValueByIds,
  changeSelectedValue,
  changeParamPrice,
  getProductDefaultPriceById,
  changeDefaultOptionsPrice
} from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId, paramId}) => ({
  selected: getSelectedValueByIds(state, productId, paramId),
  defaultOptionsPrice: getProductDefaultPriceById(state, productId),
});

const mapDispatchToProps = (dispatch, {productId, paramId}) => ({
  changeSelected: (value) => dispatch(changeSelectedValue(value, productId, paramId)),
  changeParamPrice: (price) => dispatch(changeParamPrice(price, productId, paramId)),
  changeDefaultOptionsPrice: (price) => dispatch(changeDefaultOptionsPrice(price, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectInput);