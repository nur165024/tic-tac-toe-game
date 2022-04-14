import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { testReducers } from "./Reducers/testReducers";

const reducer = combineReducers({
  tests: testReducers,
});

const initialState = {};

let composeEnhancer = () => {};

if (typeof window !== "undefined") {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
