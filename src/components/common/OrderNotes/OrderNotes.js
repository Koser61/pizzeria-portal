import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

const OrderNotes = ({ notes, changeOrderNotes }) => {
  return (
    <div>
      <TextField
        id='orderNotes'
        label='Notes'
        multiline
        value={notes}
        onChange={(event) => changeOrderNotes(event.target.value)}
        sx={{ marginTop: '1rem', width: 1 / 1 }}
      />
    </div>
  );
};

OrderNotes.propTypes = {
  notes: PropTypes.string,
  changeOrderNotes: PropTypes.func,
};

export default OrderNotes;
