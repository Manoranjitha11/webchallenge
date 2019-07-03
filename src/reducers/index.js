// import { routerReducer } from 'react-router-redux';
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux'

import users from './userReducer';

export default combineReducers({
  users,
});
