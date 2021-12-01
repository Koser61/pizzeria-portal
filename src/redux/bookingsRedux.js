import Axios from 'axios';
import { api } from '../settings';
import { DateTime } from 'luxon';

/* selectors */
export const getAllBookings = ({bookings}) => bookings.data;
export const getBookingsLoadingState = ({bookings}) => bookings.loading;

/* action name creator */
const reducerName = 'bookings';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');

/* action creators */
export const fetchBookingsStarted = payload => ({ payload, type: FETCH_ALL_START });
export const fetchBookingsSuccess = payload => ({ payload, type: FETCH_ALL_SUCCESS });
export const fetchBookingsError = payload => ({ payload, type: FETCH_ALL_ERROR });

/* thunk creators */
export const fetchBookingsFromAPI = () => {
  return (dispatch) => {
    dispatch(fetchBookingsStarted());

    Axios
      .get(`${api.url}/api/${api.bookings}?${api.notRepeatParam}`)
      .then(res => {
        const currentDate = DateTime.now().toISODate();

        let todayBookings = [];

        for(let responseBooking of res.data) {
          const orderDate = responseBooking.date

          if(orderDate === currentDate) {
            todayBookings.push(responseBooking);
          }
        }
        dispatch(fetchBookingsSuccess(todayBookings));
      })
      .catch(err => {
        dispatch(fetchBookingsError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case FETCH_ALL_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      }
    }
    case FETCH_ALL_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      }
    }
    case FETCH_ALL_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      }
    }
    default:
      return statePart;
  }
}