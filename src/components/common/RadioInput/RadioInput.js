import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const RadioInput = ({ id, label, options }) => {
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        name={label}
      >
        {Object.values(options).map((option) => { // value NOT PROPER
          function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
          }

          return (
            <FormControlLabel
              defaultChecked={option.default}
              value={getKeyByValue(options, option)}
              control={<Radio />}
              label={option.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

RadioInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.object,
};

export default RadioInput;
