import Axios from 'axios';
import { api } from '../settings';
import { DateTime } from 'luxon';

/* selectors */
export const getOrderedOrders = ({kitchen}) => kitchen.orders;
export const getOrderedOrdersLoadingState = ({kitchen}) => kitchen.loading;

export const getLocalOrders = ({kitchen}) => kitchen.orders.filter(order => order.table);
export const getDeliveryOrders = ({kitchen}) => kitchen.orders.filter(order => order.address);

export const getOrderStatus = ({kitchen}, id) => kitchen.orders.find(order => order.id === id).status;
export const getOrderTime = ({kitchen}, id) => kitchen.orders.find(order => order.id === id).orderTime;
export const getOrderProducts = ({kitchen}, id) => kitchen.orders.find(order => order.id === id).products;

export const getOrderTable = ({kitchen}, id) => kitchen.orders.find(order => order.id === id).table;

export const getOrderAddress = ({kitchen}, id) => kitchen.orders.find(order => order.id === id).address;
export const getOrderPhone = ({kitchen}, id) => kitchen.orders.find(order => order.id === id).phone;

/* action name creator */
const reducerName = 'kitchen';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');

/* action creators */
export const fetchOrdersStarted = (payload) => ({ payload, type: FETCH_ALL_START });
export const fetchOrdersSuccess = (payload) => ({ payload, type: FETCH_ALL_SUCCESS });
export const fetchOrdersError = (payload) => ({ payload, type: FETCH_ALL_ERROR });

/* thunk creators */
export const fetchOrdersFromAPI = () => {
  return (dispatch, getState) => {
    if(getState().kitchen.orders.length === 0) {
      dispatch(fetchOrdersStarted());

      Axios.get(`${api.url}/${api.orders}?${api.statusOrderedParam}&${api.sortByOrderTimeParam}`)
        .then((res) => {
          const currentDate = DateTime.now().toISODate();

          let todayOrders = [];

          for(let responseOrder of res.data) {
            const orderDate = DateTime.fromISO(responseOrder.orderTime).toISODate();

            if(orderDate === currentDate) {
              todayOrders.push(responseOrder);
            }
          }

          dispatch(fetchOrdersSuccess(todayOrders));
        })
        .catch((err) => {
          dispatch(fetchOrdersError(err.message || true));
        });
    }
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
      };
    }
    case FETCH_ALL_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        orders: action.payload,
      };
    }
    case FETCH_ALL_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
