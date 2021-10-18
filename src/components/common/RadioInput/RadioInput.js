import React from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

class RadioInput extends React.Component {
  static propTypes = {
    optionId: PropTypes.string,
    isDefault: PropTypes.bool,
    label: PropTypes.string,
    price: PropTypes.number,
    changeSelected: PropTypes.func,
    changeParamPrice: PropTypes.func,
    defaultOptionsPrice: PropTypes.number,
    changeDefaultOptionsPrice: PropTypes.func,
  };

  componentDidMount() {
    const { isDefault, optionId, changeSelected, price, changeParamPrice, defaultOptionsPrice, changeDefaultOptionsPrice } = this.props;

    if(isDefault) {
      changeDefaultOptionsPrice(defaultOptionsPrice + price);
      changeSelected(optionId);
      changeParamPrice(price);
    }
  }

  handleChange(checked) {
    const { price, changeParamPrice } = this.props;

    if(checked) {
      changeParamPrice(price);
    }
  }

  render() {
    const { optionId, label } = this.props;

    return (
      <div>
        <FormControlLabel
          value={optionId}
          label={label}
          control={<Radio />}
          onChange={(event) => this.handleChange(event.target.checked)}
        />
      </div>
    );
  }
}

export default RadioInput;