import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import navReducer from './navRedux';
import productsReducer from './productsRedux';
import orderingReducer from './orderingRedux';

// define initial state and shallow-merge initial data
const initialState = {
  nav: {
    currentView: '',
    drawerOpen: false,
  },
  products: {
    loading: {
      active: false,
      error: false,
    },
    data: [],
  },
  ordering: {
    table: '',
    orderTime: {},
    notes: '',
    menu: {
      cake: {
        amount: 0,
        priceSingle: 0,
        price: 0,
      },
      breakfast: {
        amount: 0,
        defaultPrice: 0,
        defaultOptionsPrice: 0,
        basePrice: 0,
        priceSingle: 0,
        price: 0,
        params: {
          coffee: {
            value: '',
            price: 0,
          },
        },
      },
      pizza: {
        amount: 0,
        defaultPrice: 0,
        defaultOptionsPrice: 0,
        basePrice: 0,
        priceSingle: 0,
        price: 0,
        params: {
          sauce: {
            value: '',
            price: 0,
          },
          toppings: {
            options: {
              olives: {
                checked: false,
                price: 0,
              },
              redPeppers: {
                checked: false,
                price: 0,
              },
              greenPeppers: {
                checked: false,
                price: 0,
              },
              mushrooms: {
                checked: false,
                price: 0,
              },
              basil: {
                checked: false,
                price: 0,
              },
              salami: {
                checked: false,
                price: 0,
              },
            },
            price: 0,
          },
          crust: {
            value: '',
            price: 0,
          },
        },
      },
      salad: {
        amount: 0,
        defaultPrice: 0,
        defaultOptionsPrice: 0,
        basePrice: 0,
        priceSingle: 0,
        price: 0,
        params: {
          ingredients: {
            options: {
              cucumber: {
                checked: false,
                price: 0,
              },
              tomatoes: {
                checked: false,
                price: 0,
              },
              olives: {
                checked: false,
                price: 0,
              },
              feta: {
                checked: false,
                price: 0,
              },
              cheese: {
                checked: false,
                price: 0,
              },
              herbs: {
                checked: false,
                price: 0,
              },
              pepper: {
                checked: false,
                price: 0,
              },
            },
            price: 0,
          },
        },
      },
    },
    cart: {
      totalPrice: 0,
      products: [],
    },
  },
};

// define reducers
const reducers = {
  nav: navReducer,
  products: productsReducer,
  ordering: orderingReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;