import { createSelector } from "reselect";
import type { RootState } from "../store";

const authSelector = (state: RootState) => state.auth

export const isAuthSelector = createSelector(
  [authSelector],
  (state) => state.isAuth
);

export const authErrorSelector = createSelector(
  [authSelector],
  (state) => state.errors
)