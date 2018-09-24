import ReactDOM from "react-dom";
import React from "react";
import MainPage from "./Containers/mainPage";
import { Provider } from "react-redux";
import store from "./Store/store";

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
