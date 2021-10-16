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
    addDefaultParamPrice: PropTypes.func,
    changeParamPrice: PropTypes.func,
  };

  componentDidMount() {
    const { isDefault, optionId, changeSelected, addDefaultParamPrice, price, changeParamPrice } = this.props;

    if(isDefault) {
      changeSelected(optionId);
      addDefaultParamPrice(price);
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