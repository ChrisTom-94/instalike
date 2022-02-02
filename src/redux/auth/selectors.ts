import { createSelector } from "reselect";
import type { RootState } from "../store";

const authSelector = (state: RootState) => state.auth

const isAuthSelector = createSelector(
  [authSelector],
  (state) => state.isAuth
);

export default isAuthSelector