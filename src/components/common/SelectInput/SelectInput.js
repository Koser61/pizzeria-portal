import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

class SelectInput extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.object,
    selected: PropTypes.string,
    changeSelected: PropTypes.func,
  }

  componentDidMount() {
    const { changeSelected, options } = this.props;
  
    changeSelected(this.findDefaultValue(options));
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  findDefaultValue(options) {
    let defaultValue = '';
    
    Object.values(options).forEach((option) => {

      if(option.default) {
        defaultValue = this.getKeyByValue(options, option);
      }
    });
    
    return defaultValue;
  }

  render() {
    const { id, label, options, selected, changeSelected } = this.props;

    return (
      <FormControl>
        <InputLabel id={id + '-label'}>{label}</InputLabel>
        <Select
          labelId={id + '-label'}
          id={id}
          name={id}
          value={selected}
          onChange={(event) => changeSelected(event.target.value)}
          label={label}
          sx={{minWidth: 180}}
        >
          {Object.values(options).map((option) => {
            return (
              <MenuItem
                key={this.getKeyByValue(options, option)}
                value={this.getKeyByValue(options, option)}
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
