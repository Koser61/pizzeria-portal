import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import RadioInput from '../../common/RadioInput/RadioInputContainer';
import CheckboxInput from '../../common/CheckboxInput/CheckboxInput';
import SelectInput from '../../common/SelectInput/SelectInput';

const ProductParam = ({ productId, id, label, type, options }) => {
  switch (type) {
    case 'radios':
      return (
        <Box margin='1rem'>
          <RadioInput productId={productId} id={id} label={label} options={options} />
        </Box>
      );
    case 'checkboxes':
      return (
        <Box margin='1rem'>
          <CheckboxInput productId={productId} id={id} label={label} options={options} />
        </Box>
      );
    case 'select':
      return (
        <Box margin='1rem'>
          <SelectInput productId={productId} id={id} label={label} options={options} />
        </Box>
      );
    default:
      break;
  }
};

ProductParam.propTypes = {
  productId: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.object,
};

export default ProductParam;