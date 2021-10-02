import React from 'react';
import PropTypes from 'prop-types';

import RadioInput from '../../common/RadioInput/RadioInput';
import CheckboxInput from '../../common/CheckboxInput/CheckboxInput';
import SelectInput from '../../common/SelectInput/SelectInput';

const ProductParam = ({ id, label, type, options }) => {
  switch (type) {
    case 'radios':
      return (
        <div>
          <RadioInput id={id} label={label} options={options} />
        </div>
      );
    case 'checkboxes':
      return (
        <div>
          <CheckboxInput id={id} label={label} options={options} />
        </div>
      );
    case 'select':
      return (
        <div>
          <SelectInput id={id} label={label} options={options} />
        </div>
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