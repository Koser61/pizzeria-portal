import Axios from 'axios';
import { api } from '../settings';
import { DateTime } from 'luxon';

/* selectors */
export const getAllEvents = ({events}) => events.data;
export const getEventsLoadingState = ({events}) => events.loading;

/* action name creator */
const reducerName = 'events';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');

/* action creators */
export const fetchEventsStarted = payload => ({ payload, type: FETCH_ALL_START });
export const fetchEventsSuccess = payload => ({ payload, type: FETCH_ALL_SUCCESS });
export const fetchEventsError = payload => ({ payload, type: FETCH_ALL_ERROR });

/* thunk creators */
export const fetchEventsFromAPI = () => {
  return (dispatch) => {
    dispatch(fetchEventsStarted());

    Axios
      .get(`${api.url}/api/${api.events}`)
      .then(res => {
        const currentDate = DateTime.now().toISODate();

        let todayRepeatEvents = [];

        for(let responseEvent of res.data) {
          const orderDate = responseEvent.date;

          if(orderDate === currentDate) {
            todayRepeatEvents.push(responseEvent);
          }
        }

        dispatch(fetchEventsSuccess(todayRepeatEvents));
      })
      .catch(err => {
        dispatch(fetchEventsError(err.message || true));
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
          active: true,
          error: false,
        },
        data: action.payload,
      }
    }
    case FETCH_ALL_ERROR: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: action.payload,
        },
      }
    }
    default:
      return statePart;
  }
}