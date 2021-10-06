import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

class RadioInput extends React.Component {
  static propTypes = {
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
    return Object.keys(object).find(key => object[key] === value);
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
    const { label, options, selected, changeSelected } = this.props;

    return (
      <FormControl component='fieldset'>
        <FormLabel
          component='legend'
          sx={{marginLeft: '0.5rem'}}
        >
          {label}
        </FormLabel>
        <RadioGroup
          aria-label={label}
          name={label}
          value={selected}
          onChange={(event) => changeSelected(event.target.value)}
        >
          {Object.values(options).map((option) => {
            return (
              <FormControlLabel
                key={this.getKeyByValue(options, option)}
                value={this.getKeyByValue(options, option)}
                control={<Radio />}
                label={option.label}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    );
  }
}

export default RadioInput;
