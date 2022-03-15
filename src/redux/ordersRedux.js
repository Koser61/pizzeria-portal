import Axios from 'axios';
import { api } from '../settings';
import { DateTime } from 'luxon';

/* selectors */
export const getAllOrders = ({orders}) => orders.data;
export const getOrdersLoadingState = ({orders}) => orders.loading;

export const getSendOrderLoadingState = ({orders}) => orders.sendOrder;
export const getOrderWasSentState = ({orders}) => orders.sendOrder.orderWasSent;
export const getChangeOrderStatusState = ({orders}) => orders.changeOrderStatus;

export const getOrdersByTable = ({orders}, value) => orders.data.filter(order => order.table && order.table === value);
export const getLocalOrders = ({orders}) => orders.data.filter(order => order.table);
export const getDeliveryOrders = ({orders}) => orders.data.filter(order => order.address && order.phone);
export const getOrderDataById = ({orders}, id) => orders.data.find(order => order.id === id);

export const getOrderTableById = ({orders}, id) => orders.data.find(order => order.id === id).table;
export const getOrderAddressById = ({orders}, id) => orders.data.find(order => order.id === id).address;
export const getOrderPhoneById = ({orders}, id) => orders.data.find(order => order.id === id).phone;

export const getOrderStatusById = ({orders}, id) => orders.data.find(order => order.id === id).status;
export const getOrderTimeById = ({orders}, id) => orders.data.find(order => order.id === id).orderTime;
export const getOrderNotesById = ({orders}, id) => orders.data.find(order => order.id === id).notes;
export const getOrderTotalPriceById = ({orders}, id) => orders.data.find(order => order.id === id).totalPrice;
export const getOrderProductsById = ({orders}, id) => orders.data.find(order => order.id === id).products;

/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');

const SEND_ORDER_START = createActionName('SEND_ORDER_START');
const SEND_ORDER_SUCCESS = createActionName('SEND_ORDER_SUCCESS');
const SEND_ORDER_ERROR = createActionName('SEND_ORDER_ERROR');

const ADD_ORDER = createActionName('ADD_ORDER');
const CHANGE_ORDER_WAS_SENT = createActionName('CHANGE_ORDER_WAS_SENT');

const CHANGE_ORDER_STATUS_START = createActionName('CHANGE_ORDER_STATUS_START');
const CHANGE_ORDER_STATUS_SUCCESS = createActionName('CHANGE_ORDER_STATUS_SUCCESS');
const CHANGE_ORDER_STATUS_ERROR = createActionName('CHANGE_ORDER_STATUS_ERROR');

const CHANGE_ORDER_STATUS = createActionName('CHANGE_ORDER_STATUS');

/* action creators */
export const fetchOrdersStarted = payload => ({ payload, type: FETCH_ALL_START });
export const fetchOrdersSuccess = payload => ({ payload, type: FETCH_ALL_SUCCESS });
export const fetchOrdersError = payload => ({ payload, type: FETCH_ALL_ERROR });

export const changeOrderWasSent = payload => ({ payload, type: CHANGE_ORDER_WAS_SENT });

export const sendOrderStarted = payload => ({ payload, type: SEND_ORDER_START });
export const sendOrderSuccess = payload => ({ payload, type: SEND_ORDER_SUCCESS });
export const sendOrderError = payload => ({ payload, type: SEND_ORDER_ERROR });

export const addOrder = payload => ({ payload, type: ADD_ORDER });

export const changeOrderStatusStarted = payload => ({ payload, type: CHANGE_ORDER_STATUS_START });
export const changeOrderStatusSuccess = payload => ({ payload, type: CHANGE_ORDER_STATUS_SUCCESS });
export const changeOrderStatusError = payload => ({ payload, type: CHANGE_ORDER_STATUS_ERROR });

export const changeOrderStatus = (payload, index) => ({ payload, index, type: CHANGE_ORDER_STATUS });

/* thunk creators */
export const fetchOrdersFromAPI = () => {
  return (dispatch, getState) => {
    const ordersEmpty = getState().orders.data.length === 0;
    const statusWasChangedByKitchen = getState().kitchen.changeOrderStatus.statusHasChanged;

    if(ordersEmpty || statusWasChangedByKitchen) {
      dispatch(fetchOrdersStarted());

      const currentDate = DateTime.now();
      const minDate = currentDate.toISODate();
      const maxDate = currentDate.plus({ days: 14 }).toISODate();

      const minOrderTimeParam = `${api.orderTimeStartParamKey}${minDate}`;
      const maxOrderTimeParam = `${api.orderTimeEndParamKey}${maxDate}`;
      const dateBetweenParams = `${minOrderTimeParam}&${maxOrderTimeParam}`;

      const notDoneOrCancelledParams = `${api.notDoneParam},${api.notCancelledParam}`;

      Axios
        .get(`${api.url}/api/${api.orders}?${dateBetweenParams}&${notDoneOrCancelledParams}&${api.sortByOrderTimeParam}`)
        .then(res => {
          dispatch(fetchOrdersSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchOrdersError(err.message || true));
        });
    }
  };
};

export const sendOrderToAPI = (payload) => {
  return (dispatch) => {
    dispatch(sendOrderStarted());

    Axios
      .post(`${api.url}/api/${api.orders}`, payload)
      .then((res) => {
        dispatch(addOrder(res.data));
      })
      .then(() => {
        dispatch(sendOrderSuccess());
      })
      .then(() => {
        dispatch(changeOrderWasSent(true));
      })
      .catch(err => {
        dispatch(sendOrderError(err.message || true));
      });
  };
};

export const changeOrderStatusInAPI = (payload, id, orderData, index) => {
  const orderDataChanged = { ...orderData, status: payload };
  
  return (dispatch) => {
    dispatch(changeOrderStatusStarted());

    Axios
      .put(`${api.url}/api/${api.orders}/${id}`, orderDataChanged)
      .then((res) => {
        dispatch(changeOrderStatus(res.data, index));
      })
      .then(() => {
        dispatch(changeOrderStatusSuccess());
      })
      .catch((err) => {
        dispatch(changeOrderStatusError(err.message || true));
      });
  }
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
    case SEND_ORDER_START:
      return {
        ...statePart,
        sendOrder: {
          active: true,
          error: false,
        },
      }
    case SEND_ORDER_SUCCESS:
      return {
        ...statePart,
        sendOrder: {
          active: false,
          error: false,
        },
      }
    case SEND_ORDER_ERROR:
      return {
        ...statePart,
        sendOrder: {
          active: false,
          error: action.payload,
        },
      }
    case ADD_ORDER: {
      return {
        ...statePart,
        data: [ ...statePart.data, action.payload ],
      }
    }
    case CHANGE_ORDER_WAS_SENT: {
      return {
        ...statePart,
        sendOrder: {
          ...statePart.sendOrder,
          orderWasSent: action.payload,
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