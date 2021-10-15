import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@mui/material/Checkbox';

class CheckboxInput extends React.Component {
  static propTypes = {
    productId: PropTypes.string,
    paramId: PropTypes.string,
    optionId: PropTypes.string,
    price: PropTypes.number,
    isDefault: PropTypes.bool,
    checked: PropTypes.bool,
    changeChecked: PropTypes.func,
  }

  componentDidMount() {
    const { isDefault, changeChecked } = this.props;

    if(isDefault) {
      changeChecked(true);
    } else {
      changeChecked(false);
    }
  }

  render() {
    const { optionId, checked, changeChecked } = this.props;

    return (
      <Checkbox
        name={optionId}
        value={optionId}
        checked={checked}
        onChange={() => changeChecked(!checked)}
      />
    );
  }
}

export default CheckboxInput;