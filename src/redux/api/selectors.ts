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

export const isLoadingPostSelector = createSelector(
  [apiSelector],
  (state) => state.isLoading === LoadingStatus.LOADING_POSTS
);

export const isLoadingCommentSelector = createSelector(
  [apiSelector],
  (state) => state.isLoading === LoadingStatus.LOADING_COMMENTS
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

export const postErrorsSelector = createSelector([apiSelector], (state) => ({
  resources: state.errors?.errors?.resources,
  caption: state.errors?.errors?.caption,
  location: state.errors?.errors?.location,
  message: state.errors?.message,
}));

export const commentErrorsSelector = createSelector([apiSelector], (state) => ({
  text: state.errors?.errors?.text,
  message: state.errors?.message,
}));
