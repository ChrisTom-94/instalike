import { Reducer } from "redux";
import { UserState } from "./types";
import {
  GetProfileAction,
  UpdateProfileAction,
  UpdateAvatarAction,
  DeleteAvatarAction,
  GetFollowSuggestionsAction,
  GetFollowingAction,
  AddFollowingAction,
  DeleteFollowingAction,
  GetNotificationsAction,
  UpdateAllNotificationsAsReadAction,
  UpdateNotificationAsReadAction,
  UpdateNotificationAsUnreadAction,
} from "./actionsType";
import UserActions from "./enum";

export const userInitialState: UserState = {
  data: {} as Instalike.User,
  error: null,
  followSuggestions: [],
  following: [],
  notifications: [],
};

export type UserAction =
  | GetProfileAction
  | UpdateProfileAction
  | UpdateAvatarAction
  | DeleteAvatarAction
  | GetFollowSuggestionsAction
  | GetFollowingAction
  | AddFollowingAction
  | DeleteFollowingAction
  | GetNotificationsAction
  | UpdateAllNotificationsAsReadAction
  | UpdateNotificationAsReadAction
  | UpdateNotificationAsUnreadAction;

const userReducer: Reducer<UserState, UserAction> = (
  state = userInitialState,
  action
) => {
  switch (action.type) {
    case UserActions.GET_PROFILE:
      return { ...state, data: action.payload };

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

    case UserActions.GET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };

    case UserActions.UPDATE_ALL_NOTIFICATIONS_AS_READ:
      return {...state, notifications: state.notifications.map((notif) => ({ ...notif, isRead: true,})),
      };

    case UserActions.UPDATE_NOTIFICATION_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.payload.id ? { ...notif, isRead: true } : notif
        ),
      };

    case UserActions.UPDATE_NOTIFICATION_AS_UNREAD:
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.payload.id ? { ...notif, isRead: false } : notif
        ),
      };

    default:
      return state;
  }
};

export default userReducer;
