import React from 'react';
import PropTypes from 'prop-types';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

class ReservationStartersCheckboxes extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['event', 'booking']).isRequired,
    id: PropTypes.number.isRequired,
    initialData: PropTypes.array.isRequired,
    bread: PropTypes.bool,
    lemonWater: PropTypes.bool,
    changeBread: PropTypes.func,
    changeLemonWater: PropTypes.func,
  }

  componentDidMount() {
    const { initialData, changeBread, changeLemonWater } = this.props;

    if(initialData.includes('bread')) {
      changeBread(true);
    } else {
      changeBread(false);
    }
  
    if(initialData.includes('lemonWater')) {
      changeLemonWater(true);
    } else {
      changeLemonWater(false);
    }
  }

  render() {
    const { bread, lemonWater, changeBread, changeLemonWater } = this.props;

    return (
      <FormControl sx={{ m: 2 }} component='fieldset' variant='standard'>
        <FormLabel sx={{ ml: 1 }} component='legend'>
          Starters:
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={bread}
                onChange={(event) => changeBread(event.target.value)}
                name='bread'
              />
            }
            label='Bread'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={lemonWater}
                onChange={(event) => changeLemonWater(event.target.value)}
                name='lemonWater'
              />
            }
            label='Lemon water'
          />
        </FormGroup>
      </FormControl>
    );
  }
}

export default ReservationStartersCheckboxes;
