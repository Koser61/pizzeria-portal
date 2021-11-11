import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoneIcon from '@mui/icons-material/Done';

import { red, orange, yellow, green, lightGreen } from '@mui/material/colors';

export const api = {
  url: 'http://' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131' : ''),
  products: 'products',
  orders: 'orders',
  bookings: 'bookings',
  events: 'events',
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
  notDoneParam: 'status_ne=done',
  notCancelledParam: 'status_ne=cancelled',
  statusOrderedParam: 'status=ordered',
  sortByOrderTimeParam: '_sort=orderTime',
};

export const tables = [
  { value: 'table1', label: 'Table 1' },
  { value: 'table2', label: 'Table 2' },
  { value: 'table3', label: 'Table 3' },
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