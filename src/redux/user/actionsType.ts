import { ApiResourceID } from "redux/api/types";
import { Action } from "redux";
import UserActions from "./enum";

export interface GetProfileAction
  extends Action<typeof UserActions.GET_PROFILE> {
  payload: Instalike.User;
}

export interface UpdateProfileAction
  extends Action<typeof UserActions.UPDATE_PROFILE> {
  payload: Instalike.User;
}

export interface UpdateAvatarAction
  extends Action<typeof UserActions.UPDATE_AVATAR> {
  payload: Instalike.User;
}

export interface DeleteAvatarAction
  extends Action<typeof UserActions.DELETE_AVATAR> {
  payload: undefined;
}

export interface GetFollowSuggestionsAction
  extends Action<typeof UserActions.GET_FOLLOW_SUGGESTIONS> {
  payload: Instalike.User[];
}

export interface GetFollowersAction
  extends Action<typeof UserActions.GET_FOLLOWERS> {
  payload: Instalike.User[];
}

export interface GetFollowingAction
  extends Action<typeof UserActions.GET_FOLLOWING> {
  payload: Instalike.User[];
}

export interface AddFollowingAction
  extends Action<typeof UserActions.ADD_FOLLOWING> {
  payload: Instalike.User;
}

export interface DeleteFollowingAction
  extends Action<typeof UserActions.DELETE_FOLLOWING> {
  payload: ApiResourceID;
}

export interface GetNotificationsAction
  extends Action<typeof UserActions.GET_NOTIFICATIONS> {
  payload: Instalike.Notification[];
}

export interface MarkNotificationAsReadAction
  extends Action<typeof UserActions.MARK_NOTIFICATION_AS_READ> {
  payload: ApiResourceID;
}
export interface GetPostsAction
  extends Action<typeof UserActions.GET_POSTS> {
  payload: Instalike.PostFeed;
}

export interface AddPostAction
  extends Action<typeof UserActions.ADD_POST> {
  payload: Instalike.Post;
}

export interface DeletePostAction
  extends Action<typeof UserActions.DELETE_POST> {
  payload: ApiResourceID;
}
