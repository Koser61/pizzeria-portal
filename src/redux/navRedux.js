/* selectors */
export const getCurrentView = ({nav}) => nav.currentView;
export const getDrawerState = ({nav}) => nav.drawerOpen;

/* action name creator */
const reducerName = 'views';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const CHANGE_VIEW = createActionName('CHANGE_VIEW');
export const TOGGLE_DRAWER = createActionName('TOGGLE_DRAWER');

/* action creators */
export const changeView = payload => ({payload: payload, type: CHANGE_VIEW});
export const toggleDrawer = payload => ({payload: payload, type: TOGGLE_DRAWER});

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case CHANGE_VIEW:
      return {
        ...statePart,
        currentView: action.payload,
      }
    case TOGGLE_DRAWER:
      return {
        ...statePart,
        drawerOpen: action.payload,
      }
    default:
      return statePart;
  }
}