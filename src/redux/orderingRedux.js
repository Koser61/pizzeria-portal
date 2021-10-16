/* SELECTORS */
export const getOrderTime = ({ordering}) => ordering.orderTime;
export const getTable = ({ordering}) => ordering.table;
export const getOrderNotes = ({ordering}) => ordering.orderNotes;

export const getProductAmountById = ({ordering}, productId) =>
  ordering.menu[productId].amount;

export const getProductDefaultPriceById = ({ordering}, productId) =>
  ordering.menu[productId].defaultPrice;
export const getDefaultParamsPricesById = ({ordering}, productId) =>
  ordering.menu[productId].defaultParamsPrices;
export const getProductBasePriceById = ({ordering}, productId) =>
  ordering.menu[productId].basePrice;

export const getParamOptionsByIds = ({ordering}, productId, paramId) =>
  ordering.menu[productId].params[paramId].options;

export const getParamPriceByIds = ({ordering}, productId, paramId) =>
  ordering.menu[productId].params[paramId].price;
export const getOptionPriceByIds = ({ordering}, productId, paramId, optionId) =>
  ordering.menu[productId].params[paramId].options[optionId].price;

export const getProductPriceSingleById = ({ordering}, productId) =>
  ordering.menu[productId].priceSingle;
export const getProductPriceById = ({ordering}, productId) =>
  ordering.menu[productId].price;

export const getSelectedValueByIds = ({ordering}, productId, paramId) =>
  ordering.menu[productId].params[paramId].value;

export const getCheckedStateByIds = ({ordering}, productId, paramId, optionId) =>
  ordering.menu[productId].params[paramId].options[optionId].checked;

/* ACTION NAME CREATOR */
const reducerName = 'ordering';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const CHANGE_ORDER_TIME = createActionName('CHANGE_ORDER_TIME');
const CHANGE_TABLE = createActionName('CHANGE_TABLE');
const CHANGE_ORDER_NOTES = createActionName('CHANGE_ORDER_NOTES');

const CHANGE_PRODUCT_AMOUNT = createActionName('CHANGE_PRODUCT_AMOUNT');
const SET_DEFAULT_PRICE = createActionName('SET_DEFAULT_PRICE');
const SET_BASE_PRICE = createActionName('SET_BASE_PRICE');
const ADD_DEFAULT_PARAM_PRICE = createActionName('ADD_DEFAULT_PARAM_PRICE');

const CHANGE_PARAM_PRICE = createActionName('CHANGE_PARAM_PRICE');
const CHANGE_OPTION_PRICE = createActionName('CHANGE_OPTION_PRICE');

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
export const setDefaultPrice = (payload, productId) =>
  ({ payload, productId, type: SET_DEFAULT_PRICE });
export const setBasePrice = (payload, productId) =>
  ({ payload, productId, type: SET_BASE_PRICE });
export const addDefaultParamPrice = (payload, productId) =>
  ({ payload, productId, type: ADD_DEFAULT_PARAM_PRICE });

export const changeParamPrice = (payload, productId, paramId) =>
  ({ payload, productId, paramId, type: CHANGE_PARAM_PRICE });
export const changeOptionPrice = (payload, productId, paramId, optionId) =>
  ({ payload, productId, paramId, optionId, type: CHANGE_OPTION_PRICE });

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
    case SET_DEFAULT_PRICE:
      return {
        ...statePart,
        menu: {
          ...statePart.menu,
          [action.productId]: {
            ...statePart.menu[action.productId],
            defaultPrice: action.payload,
          },
        },
      }
    case SET_BASE_PRICE:
      return {
        ...statePart,
        menu: {
          ...statePart.menu,
          [action.productId]: {
            ...statePart.menu[action.productId],
            basePrice: action.payload,
          },
        },
      }
    case ADD_DEFAULT_PARAM_PRICE:
      return {
        ...statePart,
        menu: {
          ...statePart.menu,
          [action.productId]: {
            ...statePart.menu[action.productId],
            defaultParamsPrices: [...statePart.menu[action.productId].defaultParamsPrices, action.payload,],
          },
        },
      }
    case CHANGE_PARAM_PRICE:
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
                price: action.payload,
              },
            },
          },
        },
      }
    case CHANGE_OPTION_PRICE:
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
                  [action.optionId]: {
                    ...statePart.menu[action.productId].params[action.paramId].options[action.optionId],
                    price: action.payload,
                  },
                },
              },
            },
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
              [action.paramId]: {
                ...statePart.menu[action.productId].params[action.paramId],
                value: action.payload,
              },
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
                  [action.optionId]: {
                    ...statePart.menu[action.productId].params[action.paramId].options[action.optionId],
                    checked: action.payload,
                  },
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