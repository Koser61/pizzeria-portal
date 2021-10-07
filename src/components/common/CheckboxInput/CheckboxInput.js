import React from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

class CheckboxInput extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    isDefault: PropTypes.bool,
    checked: PropTypes.bool,
    changeChecked: PropTypes.func,
  }

  componentDidMount() {
    const { isDefault, changeChecked } = this.props;

    isDefault ? changeChecked(true) : changeChecked(false);
  }

  render() {
    const { id, label, checked, changeChecked } = this.props;

    return (
      <div>
        <FormControlLabel
          value={id}
          control={<Checkbox name={id} />}
          label={label}
          checked={checked}
          onChange={() => changeChecked(!checked)}
        />
      </div>
    );
  }
}

export default CheckboxInput;