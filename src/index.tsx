import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "assets/style/index.css";
import { BrowserRouter } from "react-router-dom";
import initStore from "redux/store";
import App from "App";
import "./socket";

const store = initStore();

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
