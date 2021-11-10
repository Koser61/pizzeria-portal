import React from 'react';
import PropTypes from 'prop-types';

const OrderProductParamOptions = ({ options }) => {
  const optionsCount = Object.keys(options).length - 1;
  
  return (
    <>
      {Object.values(options).map((option, i) => {
        if(i !== optionsCount) {
          return (
            <span key={i}>
              {option + ', '}
            </span>
          );
        } else {
          return (
            <span key={i}>
              {option}
            </span>
          );
        }
      })}
    </>
  );
};

OrderProductParamOptions.propTypes = {
  options: PropTypes.object,
};

export default OrderProductParamOptions;
