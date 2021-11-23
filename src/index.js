require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDom from "react-dom";
import { App } from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cityReducer from "./reducers/city";

const store = configureStore({
  reducer: {
    city: cityReducer,
  },
});

const appElement = document.getElementById("app");

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appElement
);
