import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';

import RadioInput from '../RadioInput/RadioInputContainer';

class RadioInputGroup extends React.Component {
  static propTypes = {
    productId: PropTypes.string,
    paramId: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.object,
    selected: PropTypes.string,
    changeSelected: PropTypes.func,
    setParamLabel: PropTypes.func,
  }

  componentDidMount() {
    const { label, setParamLabel } = this.props;

    setParamLabel(label);
  }

  render() {
    const { productId, paramId, label, options, selected, changeSelected } = this.props;

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
            const getKeyByValue = (object, value) => {
              return Object.keys(object).find(key => object[key] === value);
            };
  
            const optionKey = getKeyByValue(options, option);
  
            return (
              <RadioInput
                key={optionKey}
                productId={productId}
                paramId={paramId}
                optionId={optionKey}
                label={option.label}
                price={option.price}
                isDefault={option.default}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    );
  }
}

export default RadioInputGroup;
