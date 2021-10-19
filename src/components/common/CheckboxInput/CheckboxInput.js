import React from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

class CheckboxInput extends React.Component {
  static propTypes = {
    productId: PropTypes.string,
    paramId: PropTypes.string,
    optionId: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.number,
    isDefault: PropTypes.bool,

    checked: PropTypes.bool,
    changeChecked: PropTypes.func,
    changeOptionPrice: PropTypes.func,
    defaultOptionsPrice: PropTypes.number,
    changeDefaultOptionsPrice: PropTypes.func,
    setUpdatedState: PropTypes.func,
    setOptionLabel: PropTypes.func,
  }

  componentDidMount() {
    const { label, setOptionLabel, isDefault, changeChecked, changeOptionPrice, price, defaultOptionsPrice, changeDefaultOptionsPrice, setUpdatedState } = this.props;

    setOptionLabel(label);
    setUpdatedState(false);

    if(isDefault) {
      changeDefaultOptionsPrice(defaultOptionsPrice + price);
      changeChecked(true);
      changeOptionPrice(price);
    } else {
      changeChecked(false);
      changeOptionPrice(0);
    }
  }

  handleChange(eventTarget) {
    const { price, changeChecked, changeOptionPrice, setUpdatedState } = this.props;

    setUpdatedState(true);

    if(eventTarget.checked) {
      changeChecked(true);
      changeOptionPrice(price);
    } else {
      changeChecked(false);
      changeOptionPrice(0);
    }
  }

  render() {
    const { optionId, label, checked } = this.props;

    return (
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            name={optionId}
            value={optionId}
            checked={checked}
            onChange={(event) => this.handleChange(event.target)}
          />
        }
      />
    );
  }
}

export default CheckboxInput;