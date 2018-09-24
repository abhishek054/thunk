import { createStore, applyMiddleware } from "redux";
import reducer from "../Reducers/reducer";
import thunk from "redux-thunk";
import SagaMiddleware from "redux-saga";
import { watchDecrease } from "../Saga/saga";

const initialState = {
  value: 10
};

//Normal
//const store = createStore(reducer, initialState);

//Using Thunk
// const store = createStore(reducer, initialState, applyMiddleware(thunk));

//Using Saga
const sagaMiddleware = SagaMiddleware();
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchDecrease);

export default store;
