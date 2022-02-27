import { Reducer } from "redux";
import { UserState } from "./types";
import {
  GetProfileRequestAction,
  GetProfileSuccessAction,
  GetProfileErrorAction,
  GetNotificationsRequestAction,
  GetNotificationsSuccessAction,
  GetNotificationsErrorAction,
  MarkNotificationAsReadRequestAction,
  MarkNotificationAsReadSuccessAction,
  MarkNotificationAsReadErrorAction,
  AddFollowingErrorAction,
  AddFollowingRequestAction,
  AddFollowingSuccessAction,
} from "./actionsType";
import {UserActions, UserErrorStatus, UserLoadingStatus} from "./enum";

export const userInitialState: UserState = {
  data: {} as Instalike.User,
  errors: null,
  followSuggestions: [],
  following: [],
  notifications: [],
  isLoading: false
};

export type UserAction =
  | GetProfileRequestAction
  | GetProfileSuccessAction
  | GetProfileErrorAction
  | GetNotificationsRequestAction
  | GetNotificationsSuccessAction
  | GetNotificationsErrorAction
  | MarkNotificationAsReadRequestAction
  | MarkNotificationAsReadSuccessAction
  | MarkNotificationAsReadErrorAction
  | AddFollowingRequestAction
  | AddFollowingSuccessAction
  | AddFollowingErrorAction

const userReducer: Reducer<UserState, UserAction> = (
  state = userInitialState,
  action
) => {
  switch (action.type) {
    case UserActions.GET_PROFILE_REQUEST:
      return { ...state, errors: null, isLoading: UserLoadingStatus.LOADING_USER };

    case UserActions.GET_PROFILE_SUCCESS:
      return { ...state, data: action.payload, errors: null, isLoading: false };

    case UserActions.GET_PROFILE_ERROR:
      return { ...state, errors: {message: action.error, type: UserErrorStatus.ERROR_USER}};

    case UserActions.GET_NOTIFICATIONS_REQUEST:
      return { ...state,  errors: null, isLoading: UserLoadingStatus.LOADING_NOTIFICATIONS };

    case UserActions.GET_NOTIFICATIONS_SUCCESS:
      return { ...state, notifications: action.payload, errors: null };

    case UserActions.GET_NOTIFICATIONS_ERROR:
      return { ...state, errors: {message: action.error, type: UserErrorStatus.ERROR_NOTIFICATIONS}, isLoading: false };

    case UserActions.MARK_NOTIFICATION_AS_READ_REQUEST:
      return { ...state,  errors: null, isLoading: UserLoadingStatus.LOADING_NOTIFICATIONS };

    case UserActions.MARK_NOTIFICATION_AS_READ_SUCCESS:
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.payload ? { ...notif, isRead: true } : notif
        ),
        isLoading: false
      };

    case UserActions.MARK_NOTIFICATION_AS_READ_ERROR:
      return { ...state, errors: {message: action.error, type: UserErrorStatus.ERROR_NOTIFICATIONS}, isLoading: false };

    case UserActions.ADD_FOLLOWING_REQUEST:
      return { ...state,  errors: null, isLoading: UserLoadingStatus.LOADING_FOLLOWING };

    case UserActions.ADD_FOLLOWING_SUCCESS:
      return { ...state, following: [...state.following, action.payload], errors: null, isLoading: false };

    case UserActions.ADD_FOLLOWING_ERROR:
      return { ...state, errors: {message: action.error, type: UserErrorStatus.ERROR_FOLLOWING}, isLoading: false };

    default:
      return state;
  }
};

export default userReducer;
