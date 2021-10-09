import { connect } from 'react-redux'
import MenuProduct from './MenuProduct';
import { setBasePrice } from '../../../redux/orderingRedux';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch, {id}) => ({
  setBasePrice: (price) => dispatch(setBasePrice(price, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuProduct);