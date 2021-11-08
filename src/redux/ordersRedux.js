import Axios from 'axios';
//import update from 'immutability-helper';
import { api } from '../settings';

/* selectors */
export const getAllOrders = ({orders}) => orders.data;
export const getOrdersLoadingState = ({orders}) => orders.loading;

export const getOrdersByTable = ({orders}, value) => orders.data.filter(order => order.table === value);

export const getOrderStatusById = ({orders}, id) => orders.data.find(order => order.id === id).status;
export const getOrderTableById = ({orders}, id) => orders.data.find(order => order.id === id).table;
export const getOrderTotalPriceById = ({orders}, id) => orders.data.find(order => order.id === id).totalPrice;
export const getOrderOrderTimeById = ({orders}, id) => orders.data.find(order => order.id === id).orderTime;
export const getOrderDataById = ({orders}, id) => orders.data.find(order => order.id === id);

/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');

const CHANGE_ORDER_STATUS_START = createActionName('CHANGE_ORDER_STATUS_START');
const CHANGE_ORDER_STATUS_SUCCESS = createActionName('CHANGE_ORDER_STATUS_SUCCESS');
const CHANGE_ORDER_STATUS_ERROR = createActionName('CHANGE_ORDER_STATUS_ERROR');

const CHANGE_ORDER_STATUS = createActionName('CHANGE_ORDER_STATUS');

/* action creators */
export const fetchOrdersStarted = payload => ({ payload, type: FETCH_ALL_START });
export const fetchOrdersSuccess = payload => ({ payload, type: FETCH_ALL_SUCCESS });
export const fetchOrdersError = payload => ({ payload, type: FETCH_ALL_ERROR });

export const changeOrderStatusStarted = payload => ({ payload, type: CHANGE_ORDER_STATUS_START });
export const changeOrderStatusSuccess = payload => ({ payload, type: CHANGE_ORDER_STATUS_SUCCESS });
export const changeOrderStatusError = payload => ({ payload, type: CHANGE_ORDER_STATUS_ERROR });

export const changeOrderStatus = (payload, index) => ({ payload, index, type: CHANGE_ORDER_STATUS });

/* thunk creators */
export const fetchOrdersFromAPI = () => {
  return (dispatch, getState) => {
    const ordersNotLoaded = getState().orders.data.length === 0;
    const orderWasSent = getState().ordering.orderWasSent === true;

    if(ordersNotLoaded || orderWasSent) {
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

export const changeOrderStatusInAPI = (payload, id, orderData, index) => {
  const orderDataChanged = { ...orderData, status: payload };
  
  return (dispatch) => {
    dispatch(changeOrderStatusStarted());

    Axios
      .put(`${api.url}/api/${api.orders}/${id}`, orderDataChanged)
      .then((res) => {
        dispatch(changeOrderStatus(res.data, index))
      })
      .then(() => {
        dispatch(changeOrderStatusSuccess())
      }).catch((err) => {
        dispatch(changeOrderStatusError(err.message || true))
      });
  }
}

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
    case CHANGE_ORDER_STATUS: {
      return {
        ...statePart,
        data: [
          ...statePart.data.slice(0, action.index),
          action.payload,
          ...statePart.data.slice(action.index + 1),
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
    default:
      return statePart;
  }
}