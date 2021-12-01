import Axios from 'axios';
import { api } from '../settings';
import { DateTime } from 'luxon';

/* selectors */
export const getRepeatEvents = ({events}) => events.repeat.data;
export const getRepeatEventsLoadingState = ({events}) => events.repeat.loading;

export const getNoRepeatEvents = ({events}) => events.noRepeat.data;
export const getNoRepeatEventsLoadingState = ({events}) => events.noRepeat.loading;

/* action name creator */
const reducerName = 'events';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_REPEAT_EVENTS_START = createActionName('FETCH_REPEAT_EVENTS_START');
const FETCH_REPEAT_EVENTS_SUCCESS = createActionName('FETCH_REPEAT_EVENTS_SUCCESS');
const FETCH_REPEAT_EVENTS_ERROR = createActionName('FETCH_REPEAT_EVENTS_ERROR');

const FETCH_NO_REPEAT_EVENTS_START = createActionName('FETCH_NO_REPEAT_EVENTS_START');
const FETCH_NO_REPEAT_EVENTS_SUCCESS = createActionName('FETCH_NO_REPEAT_EVENTS_SUCCESS');
const FETCH_NO_REPEAT_EVENTS_ERROR = createActionName('FETCH_NO_REPEAT_EVENTS_ERROR');

/* action creators */
export const fetchRepeatEventsStarted = payload => ({ payload, type: FETCH_REPEAT_EVENTS_START });
export const fetchRepeatEventsSuccess = payload => ({ payload, type: FETCH_REPEAT_EVENTS_SUCCESS });
export const fetchRepeatEventsError = payload => ({ payload, type: FETCH_REPEAT_EVENTS_ERROR });

export const fetchNoRepeatEventsStarted = payload => ({ payload, type: FETCH_NO_REPEAT_EVENTS_START });
export const fetchNoRepeatEventsSuccess = payload => ({ payload, type: FETCH_NO_REPEAT_EVENTS_SUCCESS });
export const fetchNoRepeatEventsError = payload => ({ payload, type: FETCH_NO_REPEAT_EVENTS_ERROR });

/* thunk creators */
export const fetchRepeatEventsFromAPI = () => {
  return (dispatch) => {
    dispatch(fetchRepeatEventsStarted());
    Axios
      .get(`${api.url}/api/${api.events}?${api.repeatParam}`)
      .then(res => {
        const currentDate = DateTime.now().toISODate();

        let todayRepeatEvents = [];

        for(let responseEvent of res.data) {
          const orderDate = responseEvent.date;
          if(orderDate === currentDate) {
            todayRepeatEvents.push(responseEvent);
          }
        }

        dispatch(fetchRepeatEventsSuccess(todayRepeatEvents));
      })
      .catch(err => {
        dispatch(fetchRepeatEventsError(err.message || true));
      });
  };
};

export const fetchNoRepeatEventsFromAPI = () => {
  return (dispatch) => {
    dispatch(fetchNoRepeatEventsStarted());
    Axios
      .get(`${api.url}/api/${api.events}?${api.notRepeatParam}`)
      .then(res => {
        const currentDate = DateTime.now().toISODate();

        let todayNoRepeatEvents = [];

        for(let responseEvent of res.data) {
          const orderDate = responseEvent.date;
          if(orderDate === currentDate) {
            todayNoRepeatEvents.push(responseEvent);
          }
        }

        dispatch(fetchNoRepeatEventsSuccess(todayNoRepeatEvents));
      })
      .catch(err => {
        dispatch(fetchNoRepeatEventsError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case FETCH_REPEAT_EVENTS_START: {
      return {
        ...statePart,
        repeat: {
          loading: {
            active: true,
            error: false,
          },
        },
      }
    }
    case FETCH_REPEAT_EVENTS_SUCCESS: {
      return {
        ...statePart,
        repeat: {
          loading: {
            active: true,
            error: false,
          },
          data: action.payload,
        },
      }
    }
    case FETCH_REPEAT_EVENTS_ERROR: {
      return {
        ...statePart,
        repeat: {
          loading: {
            active: true,
            error: action.payload,
          },
        },
      }
    }
    case FETCH_NO_REPEAT_EVENTS_START: {
      return {
        ...statePart,
        noRepeat: {
          loading: {
            active: true,
            error: false,
          },
        },
      }
    }
    case FETCH_NO_REPEAT_EVENTS_SUCCESS: {
      return {
        ...statePart,
        noRepeat: {
          loading: {
            active: true,
            error: false,
          },
          data: action.payload,
        },
      }
    }
    case FETCH_NO_REPEAT_EVENTS_ERROR: {
      return {
        ...statePart,
        noRepeat: {
          loading: {
            active: true,
            error: action.payload,
          },
        },
      }
    }
    default:
      return statePart;
  }
}