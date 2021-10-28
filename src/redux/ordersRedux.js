import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAllOrders = ({orders}) => orders.data;
export const getOrdersLoadingState = ({orders}) => orders.loading;

/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');

/* action creators */
export const fetchOrdersStarted = payload => ({ payload, type: FETCH_ALL_START });
export const fetchOrdersSuccess = payload => ({ payload, type: FETCH_ALL_SUCCESS });
export const fetchOrdersError = payload => ({ payload, type: FETCH_ALL_ERROR });

/* thunk creators */
export const fetchOrdersFromAPI = () => {
  return (dispatch, getState) => {
    if(getState().orders.data.length == 0){ //eslint-disable-line eqeqeq
      dispatch(fetchOrdersStarted());

      Axios
        .get(`${api.url}/${api.orders}`)
        .then(res => {
          dispatch(fetchOrdersSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchOrdersError(err.message || true));
        });
    }
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
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