import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoryReducer, petsReducer, authReducer } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  category:categoryReducer,
  pets: petsReducer,
  auth: authReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))