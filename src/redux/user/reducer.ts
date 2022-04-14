import { Reducer } from "redux";
import { UserState } from "./types";
import {
  GetProfileAction,
  UpdateProfileAction,
  DeleteAvatarAction,
  GetNotificationsAction,
  MarkNotificationAsReadAction,
  AddFollowingAction,
  GetFollowingAction,
  GetFollowersAction,
  DeleteFollowingAction,
  GetViewedUserAction,
  GetFollowSuggestionsAction,
} from "./actionsType";
import UserActions from "./enum";

export const userInitialState: UserState = {
  profile: {} as Instalike.User,
  followSuggestions: [],
  following: [],
  followers: [],
  notifications: [],
  viewedUser: {
    profile: {} as Instalike.User,
    following: [],
    followers: [],
  },
};

export type UserAction =
  | GetProfileAction
  | UpdateProfileAction
  | DeleteAvatarAction
  | GetNotificationsAction
  | MarkNotificationAsReadAction
  | AddFollowingAction
  | GetFollowingAction
  | GetFollowersAction
  | GetFollowSuggestionsAction
  | AddFollowingAction
  | DeleteFollowingAction
  | GetViewedUserAction;

const userReducer: Reducer<UserState, UserAction> = (
  state = userInitialState,
  action
) => {
  switch (action.type) {
    case UserActions.GET_PROFILE:
      return { ...state, profile: action.payload };

    case UserActions.UPDATE_PROFILE:
      return { ...state, profile: { ...state.profile, ...action.payload } };

    case UserActions.DELETE_AVATAR:
      return { ...state, profile: { ...state.profile, avatar: null } };

    case UserActions.GET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };

    case UserActions.MARK_NOTIFICATION_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.payload ? { ...notif, isRead: true } : notif
        ),
      };

    case UserActions.GET_FOLLOWING:
      return { ...state, following: action.payload };

    case UserActions.GET_FOLLOWERS:
      return { ...state, followers: action.payload };

    case UserActions.GET_FOLLOW_SUGGESTIONS:
      return { ...state, followSuggestions: action.payload };

    case UserActions.ADD_FOLLOWING:
      return {
        ...state,
        profile: {
          ...state.profile,
          followingCount: state.profile.followingCount + 1,
        },
        following: [...state.following, action.payload],
      };

    case UserActions.DELETE_FOLLOWING:
      return {
        ...state,
        profile: {
          ...state.profile,
          followingCount: state.profile.followingCount - 1,
        },
        following: state.following.filter((f) => f.id !== action.payload),
      };

    case UserActions.GET_VIEWED_USER:
      return {
        ...state,
        viewedUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
