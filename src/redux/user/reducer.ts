import { Reducer } from "redux";
import { UserState } from "./types";
import {
  UserRequestErrorAction,
  GetProfileSuccessAction,
  UpdateProfileAction,
  UpdateAvatarAction,
  DeleteAvatarAction,
  GetFollowSuggestionsAction,
  GetFollowingAction,
  AddFollowingAction,
  DeleteFollowingAction,
  GetNotificationsSuccessAction,
  MarkNotificationAsReadSuccessAction,
  MarkNotificationAsUnreadSuccessAction,
} from "./actionsType";
import UserActions from "./enum";

export const userInitialState: UserState = {
  data: {} as Instalike.User,
  errors: null,
  followSuggestions: [],
  following: [],
  notifications: [],
};

export type UserAction =
    UserRequestErrorAction  
  | GetProfileSuccessAction
  | UpdateProfileAction
  | UpdateAvatarAction
  | DeleteAvatarAction
  | GetFollowSuggestionsAction
  | GetFollowingAction
  | AddFollowingAction
  | DeleteFollowingAction
  | GetNotificationsSuccessAction
  | MarkNotificationAsReadSuccessAction
  | MarkNotificationAsUnreadSuccessAction;

const userReducer: Reducer<UserState, UserAction> = (
  state = userInitialState,
  action
) => {
  switch (action.type) {
    case UserActions.USER_REQUEST_ERROR:
      return { ...state, errors: action.errors };

    case UserActions.GET_PROFILE_SUCCESS:
      return { ...state, data: action.payload, errors: null };

    case UserActions.UPDATE_PROFILE:
      return { ...state, data: action.payload };

    case UserActions.UPDATE_AVATAR:
      return { ...state, data: action.payload };

    case UserActions.DELETE_AVATAR:
      return { ...state, data: { ...state.data, avatar: null } };

    case UserActions.GET_FOLLOW_SUGGESTIONS:
      return { ...state, followSuggestions: action.payload };

    case UserActions.GET_FOLLOWING:
      return { ...state, following: action.payload };

    case UserActions.ADD_FOLLOWING:
      return { ...state, following: [...state.following, action.payload] };

    case UserActions.DELETE_FOLLOWING:
      return { ...state, following: state.following.filter((follower) => follower.id !== action.payload)};

    case UserActions.GET_NOTIFICATIONS_SUCCESS:
      return { ...state, notifications: action.payload, errors: null };

    case UserActions.MARK_NOTIFICATION_AS_READ_SUCCESS:
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.payload ? { ...notif, isRead: true } : notif
        ),
      };

    case UserActions.MARK_NOTIFICATION_AS_UNREAD_SUCCESS:
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.payload ? { ...notif, isRead: false } : notif
        ),
      };

    default:
      return state;
  }
};

export default userReducer;
