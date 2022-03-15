import Axios from 'axios';
import { api } from '../settings';
import { DateTime } from 'luxon';

/* selectors */
export const getLocalOrders = ({kitchen}) => kitchen.localOrders.data;
export const getDeliveryOrders = ({kitchen}) => kitchen.deliveryOrders.data;

// add selectors for orders with status ordered (instead of deleting from state)

export const getLocalOrdersLoadingState = ({kitchen}) => kitchen.localOrders.loading;
export const getDeliveryOrdersLoadingState = ({kitchen}) => kitchen.deliveryOrders.loading;

export const getChangingOrderStatus = ({kitchen}) => kitchen.changeOrderStatus;

export const getLocalOrderTimeById = ({kitchen}, id) => kitchen.localOrders.data.find(order => order.id === id).orderTime;
export const getDeliveryOrderTimeById = ({kitchen}, id) => kitchen.deliveryOrders.data.find(order => order.id === id).orderTime;

export const getLocalOrderProductsById = ({kitchen}, id) => kitchen.localOrders.data.find(order => order.id === id).products;
export const getDeliveryOrderProductsById = ({kitchen}, id) => kitchen.deliveryOrders.data.find(order => order.id === id).products;

export const getOrderTableById = ({kitchen}, id) => kitchen.localOrders.data.find(order => order.id === id).table;
export const getOrderNotesById = ({kitchen}, id) => kitchen.localOrders.data.find(order => order.id === id).notes;

export const getOrderAddressById = ({kitchen}, id) => kitchen.deliveryOrders.data.find(order => order.id === id).address;
export const getOrderPhoneById = ({kitchen}, id) => kitchen.deliveryOrders.data.find(order => order.id === id).phone;

export const getDoneDeliveryOrdersAmount = ({kitchen}) => kitchen.deliveryOrders.data.filter(order => order.status === 'done').length;
export const getTotalDeliveryOrdersAmount = ({kitchen}) => kitchen.deliveryOrders.data.length;

export const getDoneLocalOrdersAmount = ({kitchen}) => kitchen.localOrders.data.filter(order => order.status === 'done').length;
export const getTotalLocalOrdersAmount = ({kitchen}) => kitchen.localOrders.data.length;

/* action name creator */
const reducerName = 'kitchen';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_LOCAL_ORDERS_START = createActionName('FETCH_LOCAL_ORDERS_START');
const FETCH_LOCAL_ORDERS_SUCCESS = createActionName('FETCH_LOCAL_ORDERS_SUCCESS');
const FETCH_LOCAL_ORDERS_ERROR = createActionName('FETCH_LOCAL_ORDERS_ERROR');

const FETCH_DELIVERY_ORDERS_START = createActionName('FETCH_DELIVERY_ORDERS_START');
const FETCH_DELIVERY_ORDERS_SUCCESS = createActionName('FETCH_DELIVERY_ORDERS_SUCCESS');
const FETCH_DELIVERY_ORDERS_ERROR = createActionName('FETCH_DELIVERY_ORDERS_ERROR');

const CHANGE_ORDER_STATUS_START = createActionName('CHANGE_ORDER_STATUS_START');
const CHANGE_ORDER_STATUS_SUCCESS = createActionName('CHANGE_ORDER_STATUS_SUCCESS');
const CHANGE_ORDER_STATUS_ERROR = createActionName('CHANGE_ORDER_STATUS_ERROR');

const CHANGE_STATUS_HAS_CHANGED = createActionName('CHANGE_STATUS_HAS_CHANGED');

const DELETE_LOCAL_ORDER_FROM_STATE = createActionName('DELETE_LOCAL_ORDER_FROM_STATE');
const DELETE_DELIVERY_ORDER_FROM_STATE = createActionName('DELETE_DELIVERY_ORDER_FROM_STATE');

/* action creators */
export const fetchLocalOrdersStarted = payload => ({ payload, type: FETCH_LOCAL_ORDERS_START });
export const fetchLocalOrdersSuccess = payload => ({ payload, type: FETCH_LOCAL_ORDERS_SUCCESS });
export const fetchLocalOrdersError = payload => ({ payload, type: FETCH_LOCAL_ORDERS_ERROR });

export const fetchDeliveryOrdersStarted = payload => ({ payload, type: FETCH_DELIVERY_ORDERS_START });
export const fetchDeliveryOrdersSuccess = payload => ({ payload, type: FETCH_DELIVERY_ORDERS_SUCCESS });
export const fetchDeliveryOrdersError = payload => ({ payload, type: FETCH_DELIVERY_ORDERS_ERROR });

export const changeOrderStatusStarted = payload => ({ payload, type: CHANGE_ORDER_STATUS_START });
export const changeOrderStatusSuccess = payload => ({ payload, type: CHANGE_ORDER_STATUS_SUCCESS });
export const changeOrderStatusError = payload => ({ payload, type: CHANGE_ORDER_STATUS_ERROR });

export const changeStatusHasChanged = payload => ({ payload, type: CHANGE_STATUS_HAS_CHANGED });

export const deleteLocalOrderFromState = payload => ({ payload, type: DELETE_LOCAL_ORDER_FROM_STATE });
export const deleteDeliveryOrderFromState = payload => ({ payload, type: DELETE_DELIVERY_ORDER_FROM_STATE });

/* thunk creators */
export const fetchLocalOrdersFromAPI = () => {
  return (dispatch, getState) => {
    const localOrdersEmpty = getState().kitchen.localOrders.data.length === 0;
    const orderWasSent = getState().orders.sendOrder.orderWasSent;
    
    if(localOrdersEmpty || orderWasSent) {
      dispatch(fetchLocalOrdersStarted());

      const currentDate = DateTime.now().toISODate();
      const currentDateParam = `${api.orderTimeMatchParamKey}${currentDate}`;

      Axios
        .get(`${api.url}/api/${api.orders}?${currentDateParam}&${api.hasTableParam}&${api.sortByOrderTimeParam}`)
        .then((res) => {
          dispatch(fetchLocalOrdersSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchLocalOrdersError(err.message || true));
        });
    }
  };
};

export const fetchDeliveryOrdersFromAPI = () => {
  return (dispatch, getState) => {
    const deliveryOrdersEmpty = getState().kitchen.deliveryOrders.data.length === 0;

    if(deliveryOrdersEmpty) {
      dispatch(fetchDeliveryOrdersStarted());

      const currentDate = DateTime.now().toISODate();
      const currentDateParam = `${api.orderTimeMatchParamKey}${currentDate}`;

      Axios
        .get(`${api.url}/api/${api.orders}?${currentDateParam}&${api.sortByOrderTimeParam}`)
        .then((res) => {
          let deliveryOrders = [];
  
          for(let responseOrder of res.data) {
            if(responseOrder.address && responseOrder.phone) {
              deliveryOrders.push(responseOrder);
            }
          }
  
          dispatch(fetchDeliveryOrdersSuccess(deliveryOrders));
        })
        .catch((err) => {
          dispatch(fetchDeliveryOrdersError(err.message || true));
        });
    }
  };
};

export const changeOrderStatusInAPI = (payload, delivery, id, orderData, localIndex) => {
  const orderDataChanged = { ...orderData, status: payload };
  
  return (dispatch) => {
    dispatch(changeOrderStatusStarted());

    Axios
      .put(`${api.url}/api/${api.orders}/${id}`, orderDataChanged)
      .then(() => {
        delivery ? dispatch(deleteDeliveryOrderFromState(localIndex))
                 : dispatch(deleteLocalOrderFromState(localIndex))
      })
      .then(() => {
        dispatch(changeOrderStatusSuccess());
      })
      .then(() => {
        dispatch(changeStatusHasChanged(true));
      })
      .catch((err) => {
        dispatch(changeOrderStatusError(err.message || true));
      });
  }
};

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case FETCH_LOCAL_ORDERS_START: {
      return {
        ...statePart,
        localOrders: {
          ...statePart.localOrders,
          loading: {
            active: true,
            error: false,
          },
        },
      };
    }
    case FETCH_LOCAL_ORDERS_SUCCESS: {
      return {
        ...statePart,
        localOrders: {
          loading: {
            active: false,
            error: false,
          },
          data: action.payload,
        },
      };
    }
    case FETCH_LOCAL_ORDERS_ERROR: {
      return {
        ...statePart,
        localOrders: {
          ...statePart.localOrders,
          loading: {
            active: true,
            error: action.payload,
          },
        },
      };
    }
    case FETCH_DELIVERY_ORDERS_START: {
      return {
        ...statePart,
        deliveryOrders: {
          ...statePart.deliveryOrders,
          loading: {
            active: true,
            error: false,
          },
        },
      };
    }
    case FETCH_DELIVERY_ORDERS_SUCCESS: {
      return {
        ...statePart,
        deliveryOrders: {
          loading: {
            active: false,
            error: false,
          },
          data: action.payload,
        },
      };
    }
    case FETCH_DELIVERY_ORDERS_ERROR: {
      return {
        ...statePart,
        deliveryOrders: {
          ...statePart.deliveryOrders,
          loading: {
            active: true,
            error: action.payload,
          },
        },
      };
    }
    case CHANGE_ORDER_STATUS_START: {
      return {
        ...statePart,
        changeOrderStatus: {
          ...statePart.changeOrderStatus,
          active: true,
          error: false,
        },
      }
    }
    case CHANGE_ORDER_STATUS_SUCCESS: {
      return {
        ...statePart,
        changeOrderStatus: {
          ...statePart.changeOrderStatus,
          active: false,
          error: false,
        },
      }
    }
    case CHANGE_ORDER_STATUS_ERROR: {
      return {
        ...statePart,
        changeOrderStatus: {
          ...statePart.changeOrderStatus,
          active: true,
          error: action.payload,
        },
      }
    }
    case DELETE_LOCAL_ORDER_FROM_STATE: {
      return {
        ...statePart,
        localOrders: {
          ...statePart.localOrders,
          data: [
            ...statePart.localOrders.data.slice(0, action.payload), 
            ...statePart.localOrders.data.slice(action.payload + 1),
          ],
        },
      }
    }
    case DELETE_DELIVERY_ORDER_FROM_STATE: {
      return {
        ...statePart,
        deliveryOrders: {
          ...statePart.deliveryOrders,
          data: [
            ...statePart.deliveryOrders.data.slice(0, action.payload), 
            ...statePart.deliveryOrders.data.slice(action.payload + 1),
          ],
        },
      }
    }
    case CHANGE_STATUS_HAS_CHANGED: {
      return {
        ...statePart,
        changeOrderStatus: {
          ...statePart.changeOrderStatus,
          statusHasChanged: action.payload,
        },
      }
    }
    default:
      return statePart;
  }
}
