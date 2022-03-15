import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoneIcon from '@mui/icons-material/Done';

import EventIcon from '@mui/icons-material/Event';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import EventNoteIcon from '@mui/icons-material/EventNote';

import { red, orange, yellow, green, lightGreen, deepOrange, blue } from '@mui/material/colors';

export const api = {
  url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131' : ''),
  products: 'products',
  orders: 'orders',
  bookings: 'bookings',
  events: 'events',
  idNotEqualParamKey: 'id_ne=',
  dateEqualParamKey: 'date=',
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  orderTimeMatchParamKey: 'orderTime_like=',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
  notDoneParam: 'status_ne=done',
  notCancelledParam: 'status_ne=cancelled',
  statusOrderedParam: 'status=ordered',
  tableEqualParamKey: 'table=',
  sortByOrderTimeParam: '_sort=orderTime',
  hasTableParam: 'table_like=table',
};

export const tables = [
  { nr: 1, value: 'table1', label: 'Table 1' },
  { nr: 2, value: 'table2', label: 'Table 2' },
  { nr: 3, value: 'table3', label: 'Table 3' },
];

export const statusStyle = {
  new: {
    color: red[900],
    icon: <NewReleasesIcon sx={{fill: 'white'}} />,
    label: 'New',
  },
  ordered: {
    color: orange[900],
    icon: <ReceiptIcon sx={{fill: 'white'}} />,
    label: 'Ordered',
  },
  ready: {
    bgcolor: orange[100],
    color: yellow[900],
    icon: <FastfoodIcon sx={{fill: 'white'}} />,
    label: 'Ready',
  },
  inDelivery: {
    color: lightGreen[800],
    icon: <LocalShippingIcon sx={{fill: 'white'}} />,
    label: 'In Delivery',
  },
  delivered: {
    color: green[800],
    icon: <DoneIcon sx={{fill: 'white'}} />,
    label: 'Delivered',
  },
};

export const reservationTileStyle = {
  noRepeatEvent: {
    bgColor: orange[800],
    icon: <EventIcon />,
  },
  repeatEvent: {
    bgColor: deepOrange[900],
    icon: <EventRepeatIcon />,
  },
  booking: {
    bgColor: blue[800],
    icon: <EventNoteIcon />,
  },
};