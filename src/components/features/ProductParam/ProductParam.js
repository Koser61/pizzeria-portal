import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import RadioInputGroup from '../../common/RadioInputGroup/RadioInputGroupContainer';
import CheckboxGroup from '../../common/CheckboxGroup/CheckboxGroupContainer';
import SelectInput from '../../common/SelectInput/SelectInputContainer';

const ProductParam = ({ productId, paramId, label, type, options }) => {
  switch (type) {
    case 'radios':
      return (
        <Box margin='1rem'>
          <RadioInputGroup
            productId={productId}
            paramId={paramId}
            label={label}
            options={options}
          />
        </Box>
      );
    case 'checkboxes':
      return (
        <Box margin='1rem'>
          <CheckboxGroup
            productId={productId}
            paramId={paramId}
            label={label}
            options={options}
          />
        </Box>
      );
    case 'select':
      return (
        <Box margin='1rem'>
          <SelectInput
            productId={productId}
            paramId={paramId}
            label={label}
            options={options}
          />
        </Box>
      );
    default:
      break;
  }
};

ProductParam.propTypes = {
  productId: PropTypes.string,
  paramId: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.object,
};

export default ProductParam;