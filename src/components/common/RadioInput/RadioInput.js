import React from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

class RadioInput extends React.Component {
  static propTypes = {
    optionId: PropTypes.string,
    isDefault: PropTypes.bool,
    label: PropTypes.string,
    price: PropTypes.number,
    changeSelected: PropTypes.func,
  };

  componentDidMount() {
    const { isDefault, optionId, changeSelected } = this.props;

    if(isDefault) {
      changeSelected(optionId);
    }
  }

  render() {
    const { optionId, label } = this.props;

    return (
      <div>
        <FormControlLabel
          value={optionId}
          label={label}
          control={<Radio />}
        />
      </div>
    );
  }
}

export default RadioInput;