import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import CheckboxInput from '../CheckboxInput/CheckboxInputContainer';

const CheckboxGroup = ({ productId, paramId, label, options, paramOptions, changeParamPrice }) => {
  useEffect(() => {
    let optionPrices = [];

    Object.values(paramOptions).forEach((paramOption) => {
      optionPrices.push(paramOption.price);
    });

    const paramPrice = optionPrices.reduce((sum, nextPrice) => {return sum + nextPrice}, 0);
    changeParamPrice(paramPrice);
  });
  
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
            <FormControlLabel
              key={getKeyByValue(options, option)}
              label={option.label}
              value={getKeyByValue(options, option)}
              control={
                <CheckboxInput
                  productId={productId}
                  paramId={paramId}
                  optionId={getKeyByValue(options, option)}
                  price={option.price}
                  isDefault={option.default}
                />
              }
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

CheckboxGroup.propTypes = {
  productId: PropTypes.string,
  paramId: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.object,
  paramOptions: PropTypes.object,
  changeParamPrice: PropTypes.func,
};

export default CheckboxGroup;
