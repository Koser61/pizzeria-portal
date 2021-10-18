import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

import CheckboxInput from '../CheckboxInput/CheckboxInputContainer';

class CheckboxGroup extends React.Component {
  static propTypes = {
    productId: PropTypes.string,
    paramId: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.object,
    paramOptions: PropTypes.object,
    changeParamPrice: PropTypes.func,
    wasUpdated: PropTypes.bool,
    changeDefaultOptionsPrice: PropTypes.func,
  };

  componentDidUpdate() {
    const { paramOptions, changeParamPrice, wasUpdated, changeDefaultOptionsPrice } = this.props;
    
    let optionPrices = [];

    Object.values(paramOptions).forEach((paramOption) => {
      optionPrices.push(paramOption.price);
    });

    const paramPrice = optionPrices.reduce((sum, nextPrice) => {return sum + nextPrice}, 0);
    changeParamPrice(paramPrice);

    if(!wasUpdated) {
      changeDefaultOptionsPrice(paramPrice);
    }
  }

  render() {
    const { productId, paramId, label, options } = this.props;

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
              paramId={paramId}
              optionId={getKeyByValue(options, option)}
              label={option.label}
              price={option.price}
              isDefault={option.default}
            />
          );
        })}
      </FormGroup>
    </FormControl>
    );
  }
}
/*
const CheckboxGroup = ({ productId, paramId, label, options, paramOptions, changeParamPrice }) => {
  useEffect(() => {
    let optionPrices = [];

    Object.values(paramOptions).forEach((paramOption) => {
      optionPrices.push(paramOption.price);
    });

    const paramPrice = optionPrices.reduce((sum, nextPrice) => {return sum + nextPrice}, 0);
    changeParamPrice(paramPrice);
  });
};
*/
export default CheckboxGroup;
