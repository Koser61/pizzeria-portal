import React from 'react';
import PropTypes from 'prop-types';

import CartProductParamLabel from '../CartProductParamLabel/CartProductParamLabel';
import CartProductParamOptions from '../CartProductParamOptions/CartProductParamOptions';

const CartProductParams = ({ params }) => {
  return (
    <React.Fragment>
      {Object.values(params).map((param, i) => {
        return (
          <div key={i}>
            <CartProductParamLabel label={param.label} />
            <CartProductParamOptions options={param.options} />
          </div>
        );
      })}
    </React.Fragment>
  );
};

CartProductParams.propTypes = {
  params: PropTypes.object,
};

export default CartProductParams;