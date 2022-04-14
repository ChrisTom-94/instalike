import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "assets/style/index.css";
import { HashRouter } from "react-router-dom";
import initStore from "redux/store";
import App from "App";
import "./socket";

const store = initStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
