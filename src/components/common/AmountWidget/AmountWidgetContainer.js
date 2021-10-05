import { connect } from 'react-redux'
import AmountWidget from './AmountWidget';
import { getProductAmountById, changeProductAmount } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {id}) => ({
  amount: getProductAmountById(state, id),
});

const mapDispatchToProps = (dispatch, {id}) => ({
  changeAmount: (newAmount) => dispatch(changeProductAmount(newAmount, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AmountWidget);