import { ApiResourceID } from "redux/api/types";
import {
  GetProfileAction,
  GetNotificationsAction,
  MarkNotificationAsReadAction,
  UpdateProfileAction,
  UpdateAvatarAction,
  DeleteAvatarAction,
  GetFollowingAction,
  AddFollowingAction,
  DeleteFollowingAction,
  GetFollowSuggestionsAction,
  GetFollowersAction,
} from "./actionsType";
import UserActions from "./enum";

export const getProfile = (user: Instalike.User): GetProfileAction => ({
  type: UserActions.GET_PROFILE,
  payload: user,
});

export const updateProfile = (user: Instalike.User): UpdateProfileAction => ({
  type: UserActions.UPDATE_PROFILE,
  payload: user,
});

export const updateAvatar = (user: Instalike.User): UpdateAvatarAction => ({
  type: UserActions.UPDATE_AVATAR,
  payload: user,
});

export const deleteAvatar = (): DeleteAvatarAction => ({
  type: UserActions.DELETE_AVATAR,
  payload: undefined,
});

export const getFollowSuggestion = (
  users: Instalike.User[]
): GetFollowSuggestionsAction => ({
  type: UserActions.GET_FOLLOW_SUGGESTIONS,
  payload: users,
});

export const getFollowing = (users: Instalike.User[]): GetFollowingAction => ({
  type: UserActions.GET_FOLLOWING,
  payload: users,
});

export const addFollowing = (user: Instalike.User): AddFollowingAction => ({
  type: UserActions.ADD_FOLLOWING,
  payload: user,
});

export const deleteFollowing = (id: ApiResourceID): DeleteFollowingAction => ({
  type: UserActions.DELETE_FOLLOWING,
  payload: id,
});

export const getFollowers = (users: Instalike.User[]): GetFollowersAction => ({
  type: UserActions.GET_FOLLOWERS,
  payload: users,
});

export const getNotifications = (
  notifications: Instalike.Notification[]
): GetNotificationsAction => ({
  type: UserActions.GET_NOTIFICATIONS,
  payload: notifications,
});

export const markNotificationAsRead = (
  id: ApiResourceID
): MarkNotificationAsReadAction => ({
  type: UserActions.MARK_NOTIFICATION_AS_READ,
  payload: id,
});
