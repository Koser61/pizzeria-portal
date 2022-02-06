//import Axios from 'axios';
//import { api } from '../settings';

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

/* action creators */
export const changeDate = payload => ({ payload, type: CHANGE_DATE });
export const changeHour = payload => ({ payload, type: CHANGE_HOUR });
export const changeTable = payload => ({ payload, type: CHANGE_TABLE });
export const changeRepeat = payload => ({ payload, type: CHANGE_REPEAT });
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
export const changePeople = payload => ({ payload, type: CHANGE_PEOPLE });
export const changeBreadStarter = payload => ({ payload, type: CHANGE_BREAD_STARTER });
export const changeLemonWaterStarter = payload => ({ payload, type: CHANGE_LEMON_WATER_STARTER });

/* thunk creators */

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
    default:
      return statePart;
  }
}