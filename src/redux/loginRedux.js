/* selectors */
export const getLoginState = ({login}) => login.loggedIn;

/* action name creator */
const reducerName = 'login';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

/* action creators */
export const userLogIn = payload => ({ payload, type: LOG_IN });
export const userLogOut = payload => ({ payload, type: LOG_OUT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...statePart,
        login: {
          loggedIn: true,
        },
      }
    }
    case LOG_OUT: {
      return {
        ...statePart,
        login: {
          loggedIn: false,
        },
      }
    }
    default:
      return statePart;
  }
}