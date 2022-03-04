import { Reducer } from "redux";
import { generateEmptyPostsFeed } from "utils/helpers";
import { UserState } from "./types";
import {
  GetProfileAction,
  UpdateProfileAction,
  GetNotificationsAction,
  MarkNotificationAsReadAction,
  AddFollowingAction,
} from "./actionsType";
import UserActions from "./enum";

export const userInitialState: UserState = {
  user: {} as Instalike.User,
  followSuggestions: [],
  following: [],
  notifications: [],
  posts: generateEmptyPostsFeed(),
};

export type UserAction =
  | GetProfileAction
  | UpdateProfileAction
  | GetNotificationsAction
  | MarkNotificationAsReadAction
  | AddFollowingAction;

const userReducer: Reducer<UserState, UserAction> = (
  state = userInitialState,
  action
) => {
  switch (action.type) {
    case UserActions.GET_PROFILE:
      return { ...state, user: action.payload };

    case UserActions.UPDATE_PROFILE:
      return { ...state, user: { ...state.user, ...action.payload } };

    case UserActions.GET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };

    case UserActions.MARK_NOTIFICATION_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.payload ? { ...notif, isRead: true } : notif
        ),
      };

    case UserActions.ADD_FOLLOWING:
      return {
        ...state,
        following: [...state.following, action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;
