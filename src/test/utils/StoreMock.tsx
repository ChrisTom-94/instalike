import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { rootReducer } from "redux/store";
import { createStore } from "@reduxjs/toolkit";
import { StoreMockUI } from "test/types";

const StoreMock = (
  ui: JSX.Element,
  {
    initialState = {},
    reducer = rootReducer,
    store = createStore(reducer, initialState),
    options,
  }: StoreMockUI = {}
) => {
  const Wrapper = ({ children }: { children: JSX.Element }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
};

export default StoreMock;
