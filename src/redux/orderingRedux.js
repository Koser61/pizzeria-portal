/* SELECTORS */
export const getOrderTime = ({ordering}) => ordering.orderTime;
export const getTable = ({ordering}) => ordering.table;
export const getOrderNotes = ({ordering}) => ordering.orderNotes;

export const getProductAmountById = ({ordering}, productId) =>
  ordering.menu[productId].amount;
export const getProductPriceSingleById = ({ordering}, productId) =>
  ordering.menu[productId].priceSingle;
export const getProductPriceById = ({ordering}, productId) =>
  ordering.menu[productId].price;

export const getSelectedValueByIds = ({ordering}, productId, paramId) =>
  ordering.menu[productId].params[paramId];

export const getCheckedStateByIds = ({ordering}, productId, paramId, optionId) =>
  ordering.menu[productId].params[paramId].options[optionId];

/* ACTION NAME CREATOR */
const reducerName = 'ordering';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const CHANGE_ORDER_TIME = createActionName('CHANGE_ORDER_TIME');
const CHANGE_TABLE = createActionName('CHANGE_TABLE');
const CHANGE_ORDER_NOTES = createActionName('CHANGE_ORDER_NOTES');

const CHANGE_PRODUCT_AMOUNT = createActionName('CHANGE_PRODUCT_AMOUNT');
const CHANGE_PRICE_SINGLE = createActionName('CHANGE_PRICE_SINGLE');
const CHANGE_PRICE = createActionName('CHANGE_PRICE');

const CHANGE_SELECTED_VALUE = createActionName('CHANGE_SELECTED_VALUE');

const CHANGE_CHECKED_STATE = createActionName('CHANGE_CHECKED_STATE');

/* ACTION CREATOR */
export const changeOrderTime = (payload) => ({ payload, type: CHANGE_ORDER_TIME, });
export const changeTable = (payload) => ({ payload, type: CHANGE_TABLE });
export const changeOrderNotes = (payload) => ({ payload, type: CHANGE_ORDER_NOTES, });

export const changeProductAmount = (payload, productId) =>
  ({ payload, productId, type: CHANGE_PRODUCT_AMOUNT });
export const changePriceSingle = (payload, productId) =>
  ({ payload, productId, type: CHANGE_PRICE_SINGLE });
export const changePrice = (payload, productId) =>
  ({ payload, productId, type: CHANGE_PRICE });

export const changeSelectedValue = (payload, productId, paramId) =>
  ({ payload, productId, paramId, type: CHANGE_SELECTED_VALUE });

export const changeCheckedState = (payload, productId, paramId, optionId) =>
  ({ payload, productId, paramId, optionId, type: CHANGE_CHECKED_STATE });

/* REDUCER */
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
          [action.productId]: {
            ...statePart.menu[action.productId],
            amount: action.payload,
          },
        },
      }
    case CHANGE_PRICE_SINGLE:
      return {
        ...statePart,
        menu: {
          ...statePart.menu,
          [action.productId]: {
            ...statePart.menu[action.productId],
            priceSingle: action.payload,
          },
        },
      }
    case CHANGE_PRICE:
      return {
        ...statePart,
        menu: {
          ...statePart.menu,
          [action.productId]: {
            ...statePart.menu[action.productId],
            price: action.payload,
          },
        },
      }
    case CHANGE_SELECTED_VALUE:
      return {
        ...statePart,
        menu: {
          ...statePart.menu,
          [action.productId]: {
            ...statePart.menu[action.productId],
            params: {
              ...statePart.menu[action.productId].params,
              [action.paramId]: action.payload,
            },
          },
        },
      }
    case CHANGE_CHECKED_STATE:
      return {
        ...statePart,
        menu: {
          ...statePart.menu,
          [action.productId]: {
            ...statePart.menu[action.productId],
            params: {
              ...statePart.menu[action.productId].params,
              [action.paramId]: {
                ...statePart.menu[action.productId].params[action.paramId],
                options: {
                  ...statePart.menu[action.productId].params[action.paramId].options,
                  [action.optionId]: action.payload,
                },
              },
            },
          },
        },
      }
    default:
      return statePart;
  }
}