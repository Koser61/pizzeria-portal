/* SELECTORS */
export const getOrderTime = ({ordering}) => ordering.orderTime;
export const getTable = ({ordering}) => ordering.table;
export const getOrderNotes = ({ordering}) => ordering.orderNotes;

export const getCartProducts = ({ordering}) => ordering.cart.products;
export const getCartTotalPrice = ({ordering}) => ordering.cart.totalPrice;
export const getCartProductParamsById = ({ordering}, productId) => ordering.cart.products[productId].params;

export const getProductNameById = ({ordering}, productId) => ordering.menu[productId].name;
export const getProductDefaultPriceById = ({ordering}, productId) => ordering.menu[productId].defaultPrice;
export const getDefaultOptionsPriceById = ({ordering}, productId) => ordering.menu[productId].defaultOptionsPrice;
export const getProductBasePriceById = ({ordering}, productId) => ordering.menu[productId].basePrice;
export const getProductParams = ({ordering}, productId) => ordering.menu[productId].params;
export const getProductPriceSingleById = ({ordering}, productId) => ordering.menu[productId].priceSingle;
export const getProductAmountById = ({ordering}, productId) => ordering.menu[productId].amount;
export const getProductPriceById = ({ordering}, productId) => ordering.menu[productId].price;

export const getParamLabelByIds = ({ordering}, productId, paramId) => ordering.menu[productId].params[paramId].paramLabel;

export const getSelectedOptionLabelByIds = ({ordering}, productId, paramId) => ordering.menu[productId].params[paramId].optionLabel;
export const getSelectedValueByIds = ({ordering}, productId, paramId) => ordering.menu[productId].params[paramId].value;
export const getParamOptionsByIds = ({ordering}, productId, paramId) => ordering.menu[productId].params[paramId].options;
export const getParamPriceByIds = ({ordering}, productId, paramId) => ordering.menu[productId].params[paramId].price;

export const getUpdatedStateBool = ({ordering}, productId, paramId) => ordering.menu[productId].params[paramId].wasUpdated;

export const getOptionLabelByIds = ({ordering}, productId, paramId, optionId) => ordering.menu[productId].params[paramId].options[optionId].label;
export const getOptionPriceByIds = ({ordering}, productId, paramId, optionId) => ordering.menu[productId].params[paramId].options[optionId].price;
export const getCheckedStateByIds = ({ordering}, productId, paramId, optionId) => ordering.menu[productId].params[paramId].options[optionId].checked;

/* ACTION NAME CREATOR */
const reducerName = 'ordering';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const CHANGE_ORDER_TIME = createActionName('CHANGE_ORDER_TIME');
const CHANGE_TABLE = createActionName('CHANGE_TABLE');
const CHANGE_ORDER_NOTES = createActionName('CHANGE_ORDER_NOTES');

const SET_DEFAULT_PRICE = createActionName('SET_DEFAULT_PRICE');
const SET_PRODUCT_NAME = createActionName('SET_PRODUCT_NAME');
const CHANGE_DEFAULT_OPTIONS_PRICE = createActionName('CHANGE_DEFAULT_OPTIONS_PRICE');
const SET_BASE_PRICE = createActionName('SET_BASE_PRICE');

const ADD_CART_PRODUCT = createActionName('ADD_CART_PRODUCT');
const DELETE_CART_PRODUCT = createActionName('DELETE_CART_PRODUCT');
const CHANGE_CART_TOTAL_PRICE = createActionName('CHANGE_CART_TOTAL_PRICE');

const CHANGE_PRODUCT_AMOUNT = createActionName('CHANGE_PRODUCT_AMOUNT');
const CHANGE_PRICE_SINGLE = createActionName('CHANGE_PRICE_SINGLE');
const CHANGE_PRICE = createActionName('CHANGE_PRICE');

const SET_PARAM_LABEL = createActionName('SET_PARAM_LABEL');

const CHANGE_PARAM_OPTION_LABEL = createActionName('CHANGE_PARAM_OPTION_LABEL');
const CHANGE_PARAM_PRICE = createActionName('CHANGE_PARAM_PRICE');
const SET_UPDATED_STATE = createActionName('SET_UPDATED_STATE');

const CHANGE_SELECTED_VALUE = createActionName('CHANGE_SELECTED_VALUE');

const SET_OPTION_LABEL = createActionName('SET_OPTION_LABEL');
const CHANGE_CHECKED_STATE = createActionName('CHANGE_CHECKED_STATE');
const CHANGE_OPTION_PRICE = createActionName('CHANGE_OPTION_PRICE');

/* ACTION CREATORS */
export const changeOrderTime = (payload) => ({ payload, type: CHANGE_ORDER_TIME, });
export const changeTable = (payload) => ({ payload, type: CHANGE_TABLE });
export const changeOrderNotes = (payload) => ({ payload, type: CHANGE_ORDER_NOTES, });

export const addCartProduct = (payload) => ({ payload, type: ADD_CART_PRODUCT });
export const deleteCartProduct = (payload) => ({ payload, type: DELETE_CART_PRODUCT });
export const changeCartTotalPrice = (payload) => ({ payload, type: CHANGE_CART_TOTAL_PRICE });

export const setProductName = (payload, productId) => ({ payload, productId, type: SET_PRODUCT_NAME });
export const setDefaultPrice = (payload, productId) => ({ payload, productId, type: SET_DEFAULT_PRICE });
export const changeDefaultOptionsPrice = (payload, productId) => ({ payload, productId, type: CHANGE_DEFAULT_OPTIONS_PRICE });
export const setBasePrice = (payload, productId) => ({ payload, productId, type: SET_BASE_PRICE });

export const changeProductAmount = (payload, productId) => ({ payload, productId, type: CHANGE_PRODUCT_AMOUNT });
export const changePriceSingle = (payload, productId) => ({ payload, productId, type: CHANGE_PRICE_SINGLE });
export const changePrice = (payload, productId) => ({ payload, productId, type: CHANGE_PRICE });

export const setParamLabel = (payload, productId, paramId) => ({ payload, productId, paramId, type: SET_PARAM_LABEL });

export const changeParamPrice = (payload, productId, paramId) => ({ payload, productId, paramId, type: CHANGE_PARAM_PRICE });
export const changeParamOptionLabel = (payload, productId, paramId) => ({ payload, productId, paramId, type: CHANGE_PARAM_OPTION_LABEL });
export const setUpdatedState = (payload, productId, paramId) => ({ payload, productId, paramId, type: SET_UPDATED_STATE });
export const changeSelectedValue = (payload, productId, paramId) => ({ payload, productId, paramId, type: CHANGE_SELECTED_VALUE });

export const setOptionLabel = (payload, productId, paramId, optionId) => ({ payload, productId, paramId, optionId, type: SET_OPTION_LABEL });
export const changeCheckedState = (payload, productId, paramId, optionId) => ({ payload, productId, paramId, optionId, type: CHANGE_CHECKED_STATE });
export const changeOptionPrice = (payload, productId, paramId, optionId) => ({ payload, productId, paramId, optionId, type: CHANGE_OPTION_PRICE });

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
    case ADD_CART_PRODUCT:
      return {
        ...statePart,
        cart: {
          ...statePart.cart,
          products: [ ...statePart.cart.products, action.payload, ],
        }
      }
    case DELETE_CART_PRODUCT:
      const newArray = statePart.cart.products.slice()
      newArray.splice(action.payload, 1)

      return {
        ...statePart,
        cart: {
          ...statePart.cart,
          products: newArray,
        }
      }
    case CHANGE_CART_TOTAL_PRICE:
      return {
        ...statePart,
        cart: {
          ...statePart.cart,
          totalPrice: action.payload,
        }
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
    case CHANGE_DEFAULT_OPTIONS_PRICE:
      return {
        ...statePart,
        menu: {
          ...statePart.menu,
          [action.productId]: {
            ...statePart.menu[action.productId],
            defaultOptionsPrice: action.payload,
          },
        },
      }
    case SET_PRODUCT_NAME:
      return {
        ...statePart,
        menu: {
          ...statePart.menu,
          [action.productId]: {
            ...statePart.menu[action.productId],
            name: action.payload,
          },
        },
      }
    case SET_PARAM_LABEL:
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
                paramLabel: action.payload,
              },
            },
          },
        },
      }
    case SET_UPDATED_STATE:
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
                wasUpdated: action.payload,
              },
            },
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
    case CHANGE_PARAM_OPTION_LABEL:
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
                optionLabel: action.payload,
              },
            },
          },
        },
      }
    case SET_OPTION_LABEL:
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
                    label: action.payload,
                  },
                },
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