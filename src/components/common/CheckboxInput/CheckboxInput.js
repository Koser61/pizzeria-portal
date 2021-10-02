import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxInput = ({ id, label, options }) => {
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{label}</FormLabel>
      <FormGroup>
        {Object.values(options).map((option) => {
          function getKeyByValue(object, value) {
            return Object.keys(object).find((key) => object[key] === value);
          }

          return (
            <FormControlLabel
              value={getKeyByValue(options, option)}
              control={
                <Checkbox defaultChecked={option.default} name='gilad' />
              }
              label={option.label}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

CheckboxInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.object,
};

export default CheckboxInput;
