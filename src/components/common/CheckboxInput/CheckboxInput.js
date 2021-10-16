import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@mui/material/Checkbox';

class CheckboxInput extends React.Component {
  static propTypes = {
    productId: PropTypes.string,
    paramId: PropTypes.string,
    optionId: PropTypes.string,
    price: PropTypes.number,
    isDefault: PropTypes.bool,
    checked: PropTypes.bool,
    changeChecked: PropTypes.func,
    addDefaultParamPrice: PropTypes.func,
    changeOptionPrice: PropTypes.func,
  }

  componentDidMount() {
    const { isDefault, changeChecked, addDefaultParamPrice, changeOptionPrice, price } = this.props;

    if(isDefault) {
      changeChecked(true);
      changeOptionPrice(price);
      addDefaultParamPrice(price);
    } else {
      changeChecked(false);
      changeOptionPrice(0);
    }
  }

  handleChange(eventTarget) {
    const { price, changeChecked, changeOptionPrice } = this.props;

    if(eventTarget.checked) {
      changeChecked(true);
      changeOptionPrice(price);
    } else {
      changeChecked(false);
      changeOptionPrice(0);
    }
  }

  render() {
    const { optionId, checked } = this.props;

    return (
      <Checkbox
        name={optionId}
        value={optionId}
        checked={checked}
        onChange={(event) => this.handleChange(event.target)}
      />
    );
  }
}

export default CheckboxInput;