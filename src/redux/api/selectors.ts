import { createSelector } from "reselect";
import type { RootState } from "../store";
import { LoadingStatus } from "./enum";

const apiSelector = (state: RootState) => state.api;

export const isAuthSelector = createSelector(
  [apiSelector],
  (state) => state.isAuth
);

export const isLoadingUserSelector = createSelector(
  [apiSelector],
  (state) => state.isLoading === LoadingStatus.LOADING_USER
);

export const loginErrorsSelector = createSelector([apiSelector], (state) => ({
  email: state.errors?.errors?.email,
  password: state.errors?.errors?.password,
  message: state.errors?.message,
}));

export const updateUserErrorsSelector = createSelector(
  [apiSelector],
  (state) => ({
    firstNameError: state.errors?.errors?.firstName,
    lastNameError: state.errors?.errors?.lastName,
    userNameError: state.errors?.errors?.userName,
    emailError: state.errors?.errors?.email,
    biographyError: state.errors?.errors?.biography,
    message: state.errors?.message,
  })
);
