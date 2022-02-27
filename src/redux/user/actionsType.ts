import { ResourceID } from "api/types";
import { Action } from "redux";
import {UserActions} from "./enum";

export interface GetProfileRequestAction
  extends Action<typeof UserActions.GET_PROFILE_REQUEST> {
  payload: undefined;
}
export interface GetProfileSuccessAction
  extends Action<typeof UserActions.GET_PROFILE_SUCCESS> {
  payload: Instalike.User;
}
export interface GetProfileErrorAction
  extends Action<typeof UserActions.GET_PROFILE_ERROR> {
  error: string;
}

export interface UpdateProfileRequestAction
  extends Action<typeof UserActions.UPDATE_PROFILE_REQUEST> {
  payload: undefined;
}

export interface UpdateProfileSuccessAction
  extends Action<typeof UserActions.UPDATE_PROFILE_SUCCESS> {
  payload: Instalike.User;
}

export interface UpdateProfileErrorAction
  extends Action<typeof UserActions.UPDATE_PROFILE_ERROR> {
  errors: {} | string | null;
}

export interface UpdateAvatarRequestAction
  extends Action<typeof UserActions.UPDATE_AVATAR_REQUEST> {
  payload: undefined;
}

export interface UpdateAvatarSuccessAction
  extends Action<typeof UserActions.UPDATE_AVATAR_SUCCESS> {
  payload: Instalike.User;
}

export interface UpdateAvatarErrorAction
  extends Action<typeof UserActions.UPDATE_AVATAR_ERROR> {
  error: string;
}

export interface DeleteAvatarRequestAction
  extends Action<typeof UserActions.DELETE_AVATAR_REQUEST> {
  payload: undefined;
}

export interface DeleteAvatarSuccessAction
  extends Action<typeof UserActions.DELETE_AVATAR_SUCCESS> {
  payload: undefined;
}

export interface DeleteAvatarErrorAction
  extends Action<typeof UserActions.DELETE_AVATAR_ERROR> {
  error: string;
}

export interface GetFollowSuggestionsRequestAction
  extends Action<typeof UserActions.GET_FOLLOW_SUGGESTIONS_REQUEST> {
  payload: undefined;
}

export interface GetFollowSuggestionsSuccessAction
  extends Action<typeof UserActions.GET_FOLLOW_SUGGESTIONS_SUCCESS> {
  payload: Instalike.UserPreview[];
}

export interface GetFollowSuggestionsErrorAction
  extends Action<typeof UserActions.GET_FOLLOW_SUGGESTIONS_ERROR> {
  error: string;
}

export interface GetFollowingRequestAction
  extends Action<typeof UserActions.GET_FOLLOWING_REQUEST> {
  payload: undefined;
}

export interface GetFollowingSuccessAction
  extends Action<typeof UserActions.GET_FOLLOWING_SUCCESS> {
  payload: Instalike.UserPreview[];
}

export interface GetFollowingErrorAction
  extends Action<typeof UserActions.GET_FOLLOWING_ERROR> {
  error: string;
}

export interface AddFollowingRequestAction
  extends Action<typeof UserActions.ADD_FOLLOWING_REQUEST> {
  payload: undefined;
}

export interface AddFollowingSuccessAction
  extends Action<typeof UserActions.ADD_FOLLOWING_SUCCESS> {
  payload: Instalike.UserPreview;
}

export interface AddFollowingErrorAction
  extends Action<typeof UserActions.ADD_FOLLOWING_ERROR> {
  error: string;
}

export interface DeleteFollowingRequestAction
  extends Action<typeof UserActions.DELETE_FOLLOWING_REQUEST> {
  payload: undefined;
}
export interface DeleteFollowingSuccessAction
  extends Action<typeof UserActions.DELETE_FOLLOWING_SUCCESS> {
  payload: ResourceID;
}

export interface DeleteFollowingErrorAction
  extends Action<typeof UserActions.DELETE_FOLLOWING_ERROR> {
  error: string;
}

export interface GetNotificationsRequestAction
  extends Action<typeof UserActions.GET_NOTIFICATIONS_REQUEST> {
  payload: undefined;
}

export interface GetNotificationsSuccessAction
  extends Action<typeof UserActions.GET_NOTIFICATIONS_SUCCESS> {
  payload: Instalike.Notification[];
}
export interface GetNotificationsErrorAction
  extends Action<typeof UserActions.GET_NOTIFICATIONS_ERROR> {
  error: string;
}

export interface MarkNotificationAsReadRequestAction
  extends Action<typeof UserActions.MARK_NOTIFICATION_AS_READ_REQUEST> {
  payload: undefined;
}

export interface MarkNotificationAsReadSuccessAction
  extends Action<typeof UserActions.MARK_NOTIFICATION_AS_READ_SUCCESS> {
  payload: ResourceID;
}
export interface MarkNotificationAsReadErrorAction
  extends Action<typeof UserActions.MARK_NOTIFICATION_AS_READ_ERROR> {
  error: string;
}
