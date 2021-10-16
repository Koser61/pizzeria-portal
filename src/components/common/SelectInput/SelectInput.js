import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

class SelectInput extends React.Component {
  static propTypes = {
    productId: PropTypes.string,
    paramId: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.object,
    selected: PropTypes.string,
    changeSelected: PropTypes.func,
    addDefaultParamPrice: PropTypes.func,
    changeParamPrice: PropTypes.func,
  }

  componentDidMount() {
    const { options, changeSelected, addDefaultParamPrice, changeParamPrice } = this.props;
    const defaultOption = this.getDefaultValue(options);
    const defaultParamPrice = this.getOptionPrice(options, defaultOption);

    addDefaultParamPrice(defaultParamPrice);
    changeSelected(defaultOption);
    changeParamPrice(defaultParamPrice);
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  getDefaultValue(options) {
    let defaultValue = '';
    
    Object.values(options).forEach((option) => {
      if(option.default) {
        defaultValue = this.getKeyByValue(options, option);
      }
    });
    
    return defaultValue;
  }

  getOptionPrice(options, id) {
    let optionPrice = 0;

    Object.values(options).forEach((option) => {
      if(this.getKeyByValue(options, option) === id) {
        optionPrice = option.price;
      }
    });

    return optionPrice;
  }

  handleChange(eventTarget) {
    const { options, changeSelected, changeParamPrice } = this.props;
    const targetId = eventTarget.value;
    const targetPrice = this.getOptionPrice(options, targetId);

    changeSelected(targetId);
    changeParamPrice(targetPrice);
  }

  render() {
    const { paramId, label, options, selected } = this.props;

    return (
      <FormControl>
        <InputLabel id={paramId + '-label'}>{label}</InputLabel>
        <Select
          sx={{minWidth: 180}}
          labelId={paramId + '-label'}
          id={paramId}
          value={selected}
          label={label}
          onChange={(event) => this.handleChange(event.target)}
        >
          {Object.values(options).map((option) => {
            const optionKey = this.getKeyByValue(options, option);

            return (
              <MenuItem
                key={optionKey}
                value={optionKey}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  }
}

export default SelectInput;
