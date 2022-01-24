import React from "react";
import PropTypes from "prop-types";
//import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import EventIcon from '@mui/icons-material/Event'; // single event
//import EventRepeatIcon from '@mui/icons-material/EventRepeat'; // repeating event
//import EventNoteIcon from '@mui/icons-material/EventNote'; // booking

const ReservationTile = ({ cellHeight }) => {
  const reservationTileHeight = cellHeight * 6;

  return (
    <Card
      sx={{
        position: "absolute",
        top: 0,
        left: "1px",
        bgcolor: "black",
        height: reservationTileHeight * 0.97,
        width: { xs: "90%", sm: "94%" },
        color: "white",
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
        <EventIcon />
      </Box>
    </Card>
  );

  // <Link to={process.env.PUBLIC_URL + '/tables/booking/123abc'}>Booking</Link>
  // <Link to={process.env.PUBLIC_URL + '/tables/event/321abc'}>Event</Link>
};

ReservationTile.propTypes = {
  cellHeight: PropTypes.number.isRequired,
};

export default ReservationTile;