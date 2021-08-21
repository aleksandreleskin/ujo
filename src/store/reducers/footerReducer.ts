const GET_IS_ANIMATE = 'GET_IS_ANIMATE';
const SET_IS_ANIMATE = 'SET_IS_ANIMATE';

const initialState = {
  isAnimate: true
};

const portfolioReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_IS_ANIMATE:
      return state.isAnimate;
    case SET_IS_ANIMATE:
      return {...state, isAnimate: false};
    default:
      return state;
  }
};

export default portfolioReducer;
