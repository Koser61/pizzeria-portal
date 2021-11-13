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

export const getStatusHasChanged = ({kitchen}) => kitchen.statusHasChanged;

/* action name creator */
const reducerName = 'kitchen';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');

const CHANGE_ORDER_STATUS_START = createActionName('CHANGE_ORDER_STATUS_START');
const CHANGE_ORDER_STATUS_SUCCESS = createActionName('CHANGE_ORDER_STATUS_SUCCESS');
const CHANGE_ORDER_STATUS_ERROR = createActionName('CHANGE_ORDER_STATUS_ERROR');

const DELETE_ORDER = createActionName('DELETE_ORDER');
const CHANGE_STATUS_CHANGED = createActionName('CHANGE_STATUS_CHANGED');

/* action creators */
export const fetchOrdersStarted = (payload) => ({ payload, type: FETCH_ALL_START });
export const fetchOrdersSuccess = (payload) => ({ payload, type: FETCH_ALL_SUCCESS });
export const fetchOrdersError = (payload) => ({ payload, type: FETCH_ALL_ERROR });

export const changeOrderStatusStarted = (payload) => ({ payload, type: CHANGE_ORDER_STATUS_START });
export const changeOrderStatusSuccess = (payload) => ({ payload, type: CHANGE_ORDER_STATUS_SUCCESS });
export const changeOrderStatusError = (payload) => ({ payload, type: CHANGE_ORDER_STATUS_ERROR });

export const deleteOrder = (payload) => ({ payload, type: DELETE_ORDER });
export const changeStatusChangedState = (payload) => ({ payload, type: CHANGE_STATUS_CHANGED });

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

export const changeOrderStatusInAPI = (payload, id, orderData, index) => {
  const orderDataChanged = { ...orderData, status: payload };
  
  return (dispatch) => {
    dispatch(changeOrderStatusStarted());

    Axios
      .put(`${api.url}/api/${api.orders}/${id}`, orderDataChanged)
      .then(() => {
        dispatch(deleteOrder(index))
      })
      .then(() => {
        dispatch(changeOrderStatusSuccess())
      }).catch((err) => {
        dispatch(changeOrderStatusError(err.message || true))
      });
  }
}

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
    case DELETE_ORDER: {
      return {
        ...statePart,
        orders: [
          ...statePart.orders.slice(0, action.payload),
          ...statePart.orders.slice(action.payload + 1),
        ],
      }
    }
    case CHANGE_ORDER_STATUS_START: {
      return {
        ...statePart,
        changeOrderStatus: {
          active: true,
          error: false,
        },
      }
    }
    case CHANGE_ORDER_STATUS_SUCCESS: {
      return {
        ...statePart,
        changeOrderStatus: {
          active: false,
          error: false,
        },
        statusHasChanged: true,
      }
    }
    case CHANGE_ORDER_STATUS_ERROR: {
      return {
        ...statePart,
        changeOrderStatus: {
          active: false,
          error: action.payload,
        },
      }
    }
    case CHANGE_STATUS_CHANGED: {
      return {
        ...statePart,
        statusHasChanged: false,
      }
    }
    default:
      return statePart;
  }
}
