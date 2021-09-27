/* selectors */
export const getOrderTime = ({ordering}) => ordering.orderTime;
export const getTable = ({ordering}) => ordering.table;

/* action name creator */
const reducerName = 'ordering';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_ORDER_TIME = createActionName('CHANGE_ORDER_TIME');
const CHANGE_TABLE = createActionName('CHANGE_TABLE');

/* action creators */
export const changeOrderTime = payload => ({ payload, type: CHANGE_ORDER_TIME });
export const changeTable = payload => ({ payload, type: CHANGE_TABLE });

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case CHANGE_ORDER_TIME:
      return {
        ...statePart,
        orderTime: action.payload,
      }
    case CHANGE_TABLE:
      return {
        ...statePart,
        table: action.payload,
      }
    default:
      return statePart;
  }
}