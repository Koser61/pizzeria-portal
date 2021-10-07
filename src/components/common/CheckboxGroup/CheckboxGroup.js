import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

import CheckboxInput from '../CheckboxInput/CheckboxInputContainer';

const CheckboxGroup = ({ productId, id, label, options }) => {
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend' sx={{ marginLeft: '0.5rem' }}>
        {label}
      </FormLabel>
      <FormGroup>
        {Object.values(options).map((option) => {
          const getKeyByValue = (object, value) => {
            return Object.keys(object).find((key) => object[key] === value);
          };

          return (
            <CheckboxInput 
              key={getKeyByValue(options, option)}
              productId={productId}
              paramId={id}
              id={getKeyByValue(options, option)}
              label={option.label}
              isDefault={option.default}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

CheckboxGroup.propTypes = {
  productId: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.object,
};

export default CheckboxGroup;
