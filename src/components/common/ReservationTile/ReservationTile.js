import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import { reservationTileStyle } from '../../../settings';

const ReservationTile = ({ cellHeight, timeInterval, id, duration, variant, repeat }) => {
  const reservationTileHeight = cellHeight * (duration / timeInterval);

  const getBgColor = () => {
    if (variant === 'booking') {
      const bgColor = reservationTileStyle.booking.bgColor;
      return bgColor;
    } else if (variant === 'event') {
      if (!repeat) {
        const bgColor = reservationTileStyle.noRepeatEvent.bgColor;
        return bgColor;
      } else {
        const bgColor = reservationTileStyle.repeatEvent.bgColor;
        return bgColor;
      }
    }
  };

  const getIcon = () => {
    if (variant === 'booking') {
      const icon = reservationTileStyle.booking.icon;
      return icon;
    } else if (variant === 'event') {
      if (!repeat) {
        const icon = reservationTileStyle.noRepeatEvent.icon;
        return icon;
      } else {
        const icon = reservationTileStyle.repeatEvent.icon;
        return icon;
      }
    }
  };

  return (
    <Link to={`${process.env.PUBLIC_URL}/tables/${variant}/${id}`}>
      <Card
        sx={{
          position: 'absolute',
          top: 0,
          left: '1px',
          bgcolor: getBgColor(),
          height: reservationTileHeight - 8,
          width: { xs: '90%', sm: '94%' },
          color: 'white',
          borderRadius: 2,
          zIndex: 2,
        }}
      >
        <Box
          height={cellHeight}
          display='inline-flex'
          alignItems='center'
          pl='12px'
        >
          {getIcon()}
        </Box>
      </Card>
    </Link>
  );
};

ReservationTile.propTypes = {
  cellHeight: PropTypes.number.isRequired,
  timeInterval: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(['booking', 'event']).isRequired,
  repeat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
};

export default ReservationTile;