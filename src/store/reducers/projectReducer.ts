const SET_SELECT_PROFESSION = 'SET_SELECT_PROFESSION';
const SET_SELECT_ACTIVITY = 'SET_SELECT_ACTIVITY';
const SET_SELECT_SERVICE = 'SET_SELECT_SERVICE';
const SET_NAME = 'SET_NAME';
const SET_TEL = 'SET_TEL';
const SET_EMAIL = 'SET_EMAIL';

const initialState = {
  selectProfession: '',
  selectActivity: '',
  selectService: '',
  name: '',
  tel: '',
  email: '',
};

const projectReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SELECT_PROFESSION:
      return {...state, selectProfession: action.data};
    case SET_SELECT_ACTIVITY:
      return {...state, selectActivity: action.data};
    case SET_SELECT_SERVICE:
      return {...state, selectService: action.data};
    case SET_NAME:
      return {...state, name: action.data};
    case SET_TEL:
      return {...state, tel: action.data};
    case SET_EMAIL:
      return {...state, email: action.data};
    default:
      return state;
  }
};

export default projectReducer;
