import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import ProductParam from '../ProductParam/ProductParam';

const ProductParams = ({productId, params}) => {
  return (
    <Box
      paddingY='0.5rem'
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      flexWrap='wrap'
    >
      {Object.values(params).map((param) => {
        function getKeyByValue(object, value) {
          return Object.keys(object).find(key => object[key] === value);
        }

        return (
          <ProductParam
            key={getKeyByValue(params, param)}
            productId={productId}
            id={getKeyByValue(params, param)}
            label={param.label}
            type={param.type}
            options={param.options}
          />
        );
        })}
    </Box>
  );
};

ProductParams.propTypes = {
  productId: PropTypes.string,
  params: PropTypes.object,
};

export default ProductParams;