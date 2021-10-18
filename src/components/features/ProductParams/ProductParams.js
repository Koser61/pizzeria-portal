import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import ProductParam from '../ProductParam/ProductParam';

class ProductParams extends React.Component {
  static propTypes = {
    productId: PropTypes.string,
    params: PropTypes.object,
  };

  render() {
    const { productId, params } = this.props;

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

          const paramName = getKeyByValue(params, param);
  
          return (
            <ProductParam
              key={paramName}
              productId={productId}
              paramId={paramName}
              label={param.label}
              type={param.type}
              options={param.options}
            />
          );
          })}
      </Box>
    );
  }
}

export default ProductParams;