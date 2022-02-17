import Axios from 'axios';
import { api } from '../settings';
import { DateTime } from 'luxon';

/* selectors */
export const getAllEvents = ({events}) => events.data;
export const getEventsLoadingState = ({events}) => events.loading;

export const getMatchingEvent = ({events}, table, cellHour) => events.data.find(event => event.table === table.nr && event.hour === cellHour);

export const getEventDateById = ({events}, id) => events.data.find(event => event.id === id).date;
export const getEventHourById = ({events}, id) => events.data.find(event => event.id === id).hour;
export const getEventTableById = ({events}, id) => events.data.find(event => event.id === id).table;
export const getEventRepeatById = ({events}, id) => events.data.find(event => event.id === id).repeat;
export const getEventDurationById = ({events}, id) => events.data.find(event => event.id === id).duration;
export const getEventPplById = ({events}, id) => events.data.find(event => event.id === id).ppl;
export const getEventStartersById = ({events}, id) => events.data.find(event => event.id === id).starters;

export const getRepeatTableEvents = ({events}, table, id) => events.data.find(event => event.table === table && event.id === id);

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
        let todayEvents = [];

        for(let responseEvent of res.data) {
          if (responseEvent.repeat === false) {
            const orderDate = responseEvent.date;

            if(orderDate === currentDate) {
              todayEvents.push(responseEvent);
            }
          } else if (responseEvent.repeat === 'daily') {
            todayEvents.push(responseEvent);
          }
        }

        dispatch(fetchEventsSuccess(todayEvents));
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