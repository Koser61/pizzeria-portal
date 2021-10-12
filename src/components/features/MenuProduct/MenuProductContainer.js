import { connect } from 'react-redux'
import MenuProduct from './MenuProduct';
import { changePriceSingle } from '../../../redux/orderingRedux';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch, {id}) => ({
  changePriceSingle: (price) => dispatch(changePriceSingle(price, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuProduct);