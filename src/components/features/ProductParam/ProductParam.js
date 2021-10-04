import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import RadioInput from '../../common/RadioInput/RadioInput';
import CheckboxInput from '../../common/CheckboxInput/CheckboxInput';
import SelectInput from '../../common/SelectInput/SelectInput';

const ProductParam = ({ id, label, type, options }) => {
  switch (type) {
    case 'radios':
      return (
        <Box margin='1rem'>
          <RadioInput id={id} label={label} options={options} />
        </Box>
      );
    case 'checkboxes':
      return (
        <Box margin='1rem'>
          <CheckboxInput id={id} label={label} options={options} />
        </Box>
      );
    case 'select':
      return (
        <Box margin='1rem'>
          <SelectInput id={id} label={label} options={options} />
        </Box>
      );
    default:
      break;
  }
};

ProductParam.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.object,
};

export default ProductParam;