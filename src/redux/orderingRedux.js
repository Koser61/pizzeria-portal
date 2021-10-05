/* selectors */
export const getOrderTime = ({ordering}) => ordering.orderTime;
export const getTable = ({ordering}) => ordering.table;
export const getOrderNotes = ({ordering}) => ordering.orderNotes;
export const getProductAmountById = ({ordering}, id) => ordering.menu[id].amount;

/* action name creator */
const reducerName = 'ordering';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_ORDER_TIME = createActionName('CHANGE_ORDER_TIME');
const CHANGE_TABLE = createActionName('CHANGE_TABLE');
const CHANGE_ORDER_NOTES = createActionName('CHANGE_ORDER_NOTES');
const CHANGE_PRODUCT_AMOUNT = createActionName('CHANGE_PRODUCT_AMOUNT');

/* action creators */
export const changeOrderTime = payload => ({ payload, type: CHANGE_ORDER_TIME });
export const changeTable = payload => ({ payload, type: CHANGE_TABLE });
export const changeOrderNotes = payload => ({ payload, type: CHANGE_ORDER_NOTES });
export const changeProductAmount = (payload, id) => ({ payload, id, type: CHANGE_PRODUCT_AMOUNT });

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
    case CHANGE_ORDER_NOTES:
      return {
        ...statePart,
        orderNotes: action.payload,
      }
    case CHANGE_PRODUCT_AMOUNT:
      return {
        ...statePart,
        menu: {
          ...statePart.menu,
          [action.id]: {
            ...statePart.menu[action.id],
            amount: action.payload,
          },
        }
      }
    default:
      return statePart;
  }
}