const SET_SHOW_MENU = 'SET_SHOW_MENU';
const SET_SHOW_POPUP = 'SET_SHOW_POPUP';
const SET_IS_ANIMATE = 'SET_IS_ANIMATE';
const SET_IS_ACTIVE_BUTTON = 'SET_IS_ACTIVE_BUTTON';

const initialState = {
  showMenu: false,
  isAnimate: true,
  showPopup: false,
  isActiveButton: false
};

const portfolioReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SHOW_MENU:
      return {...state, showMenu: !state.showMenu};
    case SET_SHOW_POPUP:
      return {...state, showPopup: !state.showPopup};
    case SET_IS_ANIMATE:
      return {...state, isAnimate: false};
    case SET_IS_ACTIVE_BUTTON:
      return {...state, isActiveButton: !state.isActiveButton};
    default:
      return state;
  }
};

export default portfolioReducer;
