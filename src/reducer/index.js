import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const counterApp = combineReducers({
  counterReducer,
  userReducer
})

export default counterApp

