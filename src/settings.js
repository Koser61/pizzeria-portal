export const api = {
  url: 'http://' + window.location.hostname + (window.location.hostname==='localhost' ? ':3131' : ''),
  products: 'products',
  orders: 'orders',
  bookings: 'bookings',
  events: 'events',
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
};

export const tables = [
  { value: 'table1', label: 'Table 1' },
  { value: 'table2', label: 'Table 2' },
  { value: 'table3', label: 'Table 3' },
];