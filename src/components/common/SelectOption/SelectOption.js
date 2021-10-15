import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@mui/material/MenuItem';

class SelectOption extends React.Component {
  static propTypes = {
    isDefault: PropTypes.bool,
    price: PropTypes.number,
    optionId: PropTypes.string,
    label: PropTypes.string,
  };

  render() {
    const { optionId, label } = this.props;

    return (
      <MenuItem
        value={optionId}
      >
        {label}
      </MenuItem>
    );
  }
}

export default SelectOption;