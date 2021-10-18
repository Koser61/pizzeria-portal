import { connect } from 'react-redux'
import AmountWidget from './AmountWidget';
import { getProductAmountById, changeProductAmount } from '../../../redux/orderingRedux';

const mapStateToProps = (state, {productId}) => ({
  amount: getProductAmountById(state, productId),
});

const mapDispatchToProps = (dispatch, {productId}) => ({
  changeAmount: (amount) => dispatch(changeProductAmount(amount, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AmountWidget);