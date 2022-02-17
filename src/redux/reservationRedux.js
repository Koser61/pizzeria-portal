import Axios from 'axios';
import { api } from '../settings';
import { DateTime } from 'luxon';

/* selectors */
export const getDate = ({reservation}) => reservation.date;
export const getHour = ({reservation}) => reservation.hour;
export const getTable = ({reservation}) => reservation.table;
export const getRepeat = ({reservation}) => reservation.repeat;
export const getDuration = ({reservation}) => reservation.duration;
export const getPeople = ({reservation}) => reservation.ppl;
export const getBreadStarter = ({reservation}) => reservation.starters.bread;
export const getLemonWaterStarter = ({reservation}) => reservation.starters.lemonWater;

/* action name creator */
const reducerName = 'reservation';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_DATE = createActionName('CHANGE_DATE');
const CHANGE_HOUR = createActionName('CHANGE_HOUR');
const CHANGE_TABLE = createActionName('CHANGE_TABLE');
const CHANGE_REPEAT = createActionName('CHANGE_REPEAT');
const CHANGE_DURATION = createActionName('CHANGE_DURATION');
const CHANGE_PEOPLE = createActionName('CHANGE_PEOPLE');
const CHANGE_BREAD_STARTER = createActionName('CHANGE_BREAD_STARTER');
const CHANGE_LEMON_WATER_STARTER = createActionName('CHANGE_LEMON_WATER_STARTER');

const FETCH_TABLE_RESERVATIONS_START = createActionName('FETCH_TABLE_RESERVATIONS_START');
const FETCH_TABLE_RESERVATIONS_SUCCESS = createActionName('FETCH_TABLE_RESERVATIONS_SUCCESS');
const FETCH_TABLE_RESERVATIONS_ERROR = createActionName('FETCH_TABLE_RESERVATIONS_ERROR');

const SAVE_DATA_CHANGES_START = createActionName('SAVE_DATA_CHANGES_START');
const SAVE_DATA_CHANGES_SUCCESS = createActionName('SAVE_DATA_CHANGES_SUCCESS');
const SAVE_DATA_CHANGES_ERROR = createActionName('SAVE_DATA_CHANGES_ERROR');

/* action creators */
export const changeDate = payload => ({ payload, type: CHANGE_DATE });
export const changeHour = payload => ({ payload, type: CHANGE_HOUR });
export const changeTable = payload => ({ payload, type: CHANGE_TABLE });
export const changeRepeat = payload => ({ payload, type: CHANGE_REPEAT });
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
export const changePeople = payload => ({ payload, type: CHANGE_PEOPLE });
export const changeBreadStarter = payload => ({ payload, type: CHANGE_BREAD_STARTER });
export const changeLemonWaterStarter = payload => ({ payload, type: CHANGE_LEMON_WATER_STARTER });

export const fetchTableReservationsStarted = payload => ({ payload, type: FETCH_TABLE_RESERVATIONS_START });
export const fetchTableReservationsSuccess = payload => ({ payload, type: FETCH_TABLE_RESERVATIONS_SUCCESS });
export const fetchTableReservationsError = payload => ({ payload, type: FETCH_TABLE_RESERVATIONS_ERROR });

export const saveDataChangesStarted = payload => ({ payload, type: SAVE_DATA_CHANGES_START });
export const saveDataChangesSuccess = payload => ({ payload, type: SAVE_DATA_CHANGES_SUCCESS });
export const saveDataChangesError = payload => ({ payload, type: SAVE_DATA_CHANGES_ERROR });

/* thunk creators */
export const fetchTableReservationsFromAPI = (type, id, table, date, initialRepeat) => {
  /* 
    NEED TO CHANGE FUNC: 
    TO LOAD ALL TABLES RESERVATIONS FROM SELECTED DATE 
    FOR LATER ALERT SHOWING USER WHICH TABLES ARE AVAILABLE AT WHICH TIME -
    - (IF SELECTED TABLE IS NOT AVAILABLE)
  */
  return (dispatch) => {
    dispatch(fetchTableReservationsStarted());
    
    const excludeIdParam = `&${api.idNotEqualParamKey}${id}`;
    const dateMatchParam = `${api.dateEqualParamKey}${date}`;
    const today = DateTime.now().toISODate();

    let eventsRepeatIdParam = '';
    let eventsCurrentIdParam = '';
    let bookingsIdParam = '';

    if(date === today) {
      if(type === 'event') {
        eventsRepeatIdParam = excludeIdParam;
        eventsCurrentIdParam = excludeIdParam;
      } else if(type === 'booking') {
        bookingsIdParam = excludeIdParam;
      }
    } else if(type === 'event' && initialRepeat === 'daily') {
      eventsRepeatIdParam = excludeIdParam;
    }

    const urls = [
      `${api.url}/api/${api.events}?${api.repeatParam}${eventsRepeatIdParam}`,
      `${api.url}/api/${api.events}?${api.notRepeatParam}&${dateMatchParam}${eventsCurrentIdParam}`,
      `${api.url}/api/${api.bookings}?${dateMatchParam}${bookingsIdParam}`
    ];

    Promise.all(urls.map((url) => Axios.get(url)))
      .then(([{data: eventsRepeat}, {data: eventsCurrent}, {data: bookings}]) => {
        const dataArray = [...eventsRepeat, ...eventsCurrent, ...bookings];

        dispatch(fetchTableReservationsSuccess(dataArray));
      }
      ).catch((err) => {
        dispatch(fetchTableReservationsError(err.message || true));
      });
  }
};

export const saveDataChangesInAPI = (type, id, changedData) => {
  return (dispatch) => {
    dispatch(saveDataChangesStarted());

    let reservationURL = '';

    if(type === 'booking') {
      reservationURL = api.bookings;
    } else if(type === 'event') {
      reservationURL = api.events;
    }
    
    Axios
      .put(`${api.url}/api/${reservationURL}/${id}`, changedData)
      .then(() => {
        dispatch(saveDataChangesSuccess());
      })
      .catch((err) => {
        dispatch(saveDataChangesError(err.message || true));
      });
  }
};

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case CHANGE_DATE: {
      return {
        ...statePart,
        date: action.payload,
      }
    }
    case CHANGE_HOUR: {
      return {
        ...statePart,
        hour: action.payload,
      }
    }
    case CHANGE_TABLE: {
      return {
        ...statePart,
        table: action.payload,
      }
    }
    case CHANGE_REPEAT: {
      return {
        ...statePart,
        repeat: action.payload,
      }
    }
    case CHANGE_DURATION: {
      return {
        ...statePart,
        duration: action.payload,
      }
    }
    case CHANGE_PEOPLE: {
      return {
        ...statePart,
        ppl: action.payload,
      }
    }
    case CHANGE_BREAD_STARTER: {
      return {
        ...statePart,
        starters: {
          ...statePart.starters,
          bread: action.payload,
        },
      }
    }
    case CHANGE_LEMON_WATER_STARTER: {
      return {
        ...statePart,
        starters: {
          ...statePart.starters,
          lemonWater: action.payload,
        },
      }
    }
    case FETCH_TABLE_RESERVATIONS_START: {
      return {
        ...statePart,
        tableReservations: {
          ...statePart.tableReservations,
          loading: {
            active: true,
            error: false,
          },
        },
      }
    }
    case FETCH_TABLE_RESERVATIONS_SUCCESS: {
      return {
        ...statePart,
        tableReservations: {
          loading: {
            active: false,
            error: false,
          },
          loaded: true,
          data: action.payload,
        },
      }
    }
    case FETCH_TABLE_RESERVATIONS_ERROR: {
      return {
        ...statePart,
        tableReservations: {
          ...statePart.tableReservations,
          loading: {
            active: true,
            error: action.payload,
          },
        },
      }
    }
    case SAVE_DATA_CHANGES_START: {
      return {
        ...statePart,
        saveDataChanges: {
          active: true,
          error: false,
        },
      }
    }
    case SAVE_DATA_CHANGES_SUCCESS: {
      return {
        ...statePart,
        saveDataChanges: {
          active: false,
          error: false,
        },
      }
    }
    case SAVE_DATA_CHANGES_ERROR: {
      return {
        ...statePart,
        saveDataChanges: {
          active: true,
          error: action.payload,
        },
      }
    }
    default:
      return statePart;
  }
}