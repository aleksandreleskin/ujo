import {combineReducers} from 'redux';
import portfolioReducer from './portfolioReducer';
import headerReducer from './headerReducer';
import footerReducer from './footerReducer';
import projectReducer from './projectReducer';

const reducers = combineReducers({
  portfolioReducer,
  headerReducer,
  footerReducer,
  projectReducer
});

export default reducers;
