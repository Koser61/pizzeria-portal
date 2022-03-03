import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const ReservationAlerts = ({
  alertSuccess,
  setAlertSuccess,
  showPeriods, 
  setShowPeriods,
  availablePeriods,
}) => {
  return (
    <>
      <Snackbar
        open={alertSuccess}
        onClose={() => setAlertSuccess(false)}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity='success' sx={{ width: '100%' }}>
          Reservation data has changed successfully
        </Alert>
      </Snackbar>
      <Snackbar
        open={showPeriods}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert
          severity='warning'
          sx={{ width: '100%' }}
          onClose={() => setShowPeriods(false)}
        >
          <AlertTitle>This table isn't available at selected time !</AlertTitle>
          You can book this table in following time periods:<br />
          {availablePeriods.map((period, i) => {
            return (
              <React.Fragment key={i}>
                &bull; &nbsp; {period}<br />
              </React.Fragment>
            );
          })}
        </Alert>
      </Snackbar>
    </>
  );
};

ReservationAlerts.propTypes = {
  alertSuccess: PropTypes.bool.isRequired,
  setAlertSuccess: PropTypes.func.isRequired,
  showPeriods: PropTypes.bool.isRequired,
  setShowPeriods: PropTypes.func.isRequired,
  availablePeriods: PropTypes.array.isRequired,
};

export default ReservationAlerts;