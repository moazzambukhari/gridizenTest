// reducers/index.js

import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
  auth: AuthReducer,  
  // Add other reducers here
});

export default rootReducer;
