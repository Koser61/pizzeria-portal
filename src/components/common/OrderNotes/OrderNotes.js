import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

class OrderNotes extends React.Component {
  static propTypes = {
    readOnly: PropTypes.bool,
    id: PropTypes.string,
    notes: PropTypes.string,
    changeOrderNotes: PropTypes.func,
  };

  componentDidMount() {
    const { readOnly, orderNotes, changeOrderNotes } = this.props;

    if(readOnly) { changeOrderNotes(orderNotes); }
  }

  render() {
    const { readOnly, notes, changeOrderNotes } = this.props;
    
    if(!readOnly) {
      return (
        <React.Fragment>
          <TextField
            id='orderNotes'
            label='Notes'
            multiline
            value={notes}
            onChange={(event) => changeOrderNotes(event.target.value)}
            sx={{ marginTop: '1rem', width: 1 / 1 }}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <TextField
            id='orderNotes'
            label='Notes'
            multiline
            value={notes}
            inputProps={{readOnly}}
            sx={{ marginTop: '1rem', width: 1 / 1 }}
          />
        </React.Fragment>
      );
    }
  }
}

export default OrderNotes;
