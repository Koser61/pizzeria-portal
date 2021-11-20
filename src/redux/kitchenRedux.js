import Axios from 'axios';
import { api } from '../settings';
import { DateTime } from 'luxon';

/* selectors */
export const getLocalOrders = ({kitchen}) => kitchen.localOrders.data;
export const getDeliveryOrders = ({kitchen}) => kitchen.deliveryOrders.data;

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

const DELETE_LOCAL_ORDER = createActionName('DELETE_LOCAL_ORDER');
const DELETE_DELIVERY_ORDER = createActionName('DELETE_DELIVERY_ORDER');

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

export const deleteLocalOrder = payload => ({ payload, type: DELETE_LOCAL_ORDER });
export const deleteDeliveryOrder = payload => ({ payload, type: DELETE_DELIVERY_ORDER });

/* thunk creators */
export const fetchLocalOrdersFromAPI = () => {
  return (dispatch, getState) => {
    if(getState().kitchen.localOrders.data.length === 0) {
      dispatch(fetchLocalOrdersStarted());

      Axios.get(`${api.url}/api/${api.orders}?${api.statusOrderedParam}&${api.sortByOrderTimeParam}`)
        .then((res) => {
          const currentDate = DateTime.now().toISODate();

          let localOrders = [];

          for(let responseOrder of res.data) {
            const orderDate = DateTime.fromISO(responseOrder.orderTime).toISODate();

            if(orderDate === currentDate && responseOrder.table) {
              localOrders.push(responseOrder);
            }
          }

          dispatch(fetchLocalOrdersSuccess(localOrders));
        })
        .catch((err) => {
          dispatch(fetchLocalOrdersError(err.message || true));
        });
    }
  };
};

export const fetchDeliveryOrdersFromAPI = () => {
  return (dispatch, getState) => {
    if(getState().kitchen.deliveryOrders.data.length === 0) {
      dispatch(fetchDeliveryOrdersStarted());

      Axios.get(`${api.url}/api/${api.orders}?${api.statusOrderedParam}&${api.sortByOrderTimeParam}`)
        .then((res) => {
          const currentDate = DateTime.now().toISODate();

          let deliveryOrders = [];

          for(let responseOrder of res.data) {
            const orderDate = DateTime.fromISO(responseOrder.orderTime).toISODate();

            if(orderDate === currentDate && responseOrder.address && responseOrder.phone) {
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

export const changeOrderStatusInAPI = (payload, delivery, id, orderData, index) => {
  const orderDataChanged = { ...orderData, status: payload };
  
  return (dispatch) => {
    dispatch(changeOrderStatusStarted());

    Axios
      .put(`${api.url}/api/${api.orders}/${id}`, orderDataChanged)
      .then(() => {
        if(delivery) {
          dispatch(deleteDeliveryOrder(index));
        } else {
          dispatch(deleteLocalOrder(index));
        }
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
          active: true,
          error: action.payload,
        },
      }
    }
    case DELETE_LOCAL_ORDER: {
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
    case DELETE_DELIVERY_ORDER: {
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
