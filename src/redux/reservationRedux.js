//import Axios from 'axios';
//import { api } from '../settings';

/* selectors */


/* action name creator */
const reducerName = 'reservation';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');
*/

/* action creators
export const fetchBookingsStarted = payload => ({ payload, type: FETCH_ALL_START });
export const fetchBookingsSuccess = payload => ({ payload, type: FETCH_ALL_SUCCESS });
export const fetchBookingsError = payload => ({ payload, type: FETCH_ALL_ERROR });
*/

/* thunk creators */


/* reducer
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
*/