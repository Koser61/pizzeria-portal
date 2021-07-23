export const api = {
    url: 'http://' + window.location.hostname + (window.location.hostname==='localhost' ? ':3131' : ''),
    product: 'products',
    order: 'orders',
    booking: 'bookings',
    event: 'events',
    dateStartParamKey: 'date_gte',
    dateEndParamKey: 'date_lte',
    notRepeatParam: 'repeat=false',
    repeatParam: 'repeat_ne=false',
  };