import { createSelector } from "reselect";
import type { RootState } from "../store";

const apiSelector = (state: RootState) => state.api

export const isAuthSelector = createSelector(
  [apiSelector],
  (state) => state.isAuth
);

export const authLoadingSelector = createSelector(
  [apiSelector],
  (state) => state.isLoading
)