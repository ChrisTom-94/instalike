import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./style/index.css";
import "./style/utilities.css";
import { BrowserRouter } from "react-router-dom";
import initStore from "redux/store";
import App from "./App";

const store = initStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
