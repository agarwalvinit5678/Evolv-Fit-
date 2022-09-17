import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer, profileReducer,allUsersReducer  } from "./reducers/userReducer"; 
 
const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  allUsers: allUsersReducer,

});

let initialState = {

};

const middleware=[thunk];
const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;