import { ApiResourceID } from 'redux/api/types';
import { 
    GetProfileSuccessAction, 
    GetProfileErrorAction,
    GetNotificationsSuccessAction, 
    MarkNotificationAsReadSuccessAction,
    GetNotificationsErrorAction,
    MarkNotificationAsReadErrorAction,
    UpdateProfileSuccessAction,
    UpdateProfileErrorAction,
    UpdateAvatarSuccessAction,
    UpdateAvatarErrorAction,
    DeleteAvatarSuccessAction,
    DeleteAvatarErrorAction,
    GetFollowSuggestionsSuccessAction,
    GetFollowSuggestionsErrorAction,
    AddFollowingSuccessAction,
    AddFollowingErrorAction,
    DeleteFollowingSuccessAction,
    DeleteFollowingErrorAction,
} from './actionsType';
import {UserActions} from "./enum";

export const getProfileSuccess = (user: Instalike.User): GetProfileSuccessAction => ({
    type: UserActions.GET_PROFILE_SUCCESS,
    payload: user
})

export const getProfileError = (error: string): GetProfileErrorAction => ({
    type: UserActions.GET_PROFILE_ERROR,
    error
})

export const updateProfileSuccess = (user: Instalike.User): UpdateProfileSuccessAction => ({
    type: UserActions.UPDATE_PROFILE_SUCCESS,
    payload: user
})

export const updateProfileError = (error: string): UpdateProfileErrorAction => ({
    type: UserActions.UPDATE_PROFILE_ERROR,
    errors: error
})

export const updateAvatarSuccess = (user: Instalike.User): UpdateAvatarSuccessAction => ({
    type: UserActions.UPDATE_AVATAR_SUCCESS,
    payload: user
})

export const updateAvatarError = (error: string): UpdateAvatarErrorAction => ({
    type: UserActions.UPDATE_AVATAR_ERROR,
    error
})

export const deleteAvatarSuccess = (): DeleteAvatarSuccessAction => ({
    type: UserActions.DELETE_AVATAR_SUCCESS,
    payload: undefined
})

export const deleteAvatarError = (error: string): DeleteAvatarErrorAction => ({
    type: UserActions.DELETE_AVATAR_ERROR,
    error
})

export const getFollowSuggestionSuccess = (users: Instalike.UserPreview[]): GetFollowSuggestionsSuccessAction => ({
    type: UserActions.GET_FOLLOW_SUGGESTIONS_SUCCESS,
    payload: users
})

export const getFollowSuggestionError = (error: string): GetFollowSuggestionsErrorAction => ({
    type: UserActions.GET_FOLLOW_SUGGESTIONS_ERROR,
    error
})

export const addFollowingSuccess = (user: Instalike.UserPreview): AddFollowingSuccessAction => ({
    type: UserActions.ADD_FOLLOWING_SUCCESS,
    payload: user
})

export const addFollowingError = (error: string): AddFollowingErrorAction => ({
    type: UserActions.ADD_FOLLOWING_ERROR,
    error
})

export const deleteFollowingSuccess = (id: ApiResourceID): DeleteFollowingSuccessAction => ({
    type: UserActions.DELETE_FOLLOWING_SUCCESS,
    payload: id
})

export const deleteFollowingError = (error: string): DeleteFollowingErrorAction => ({
    type: UserActions.DELETE_FOLLOWING_ERROR,
    error
})

export const getNotificationsSuccess = (notifications: Instalike.Notification[]): GetNotificationsSuccessAction => ({
    type: UserActions.GET_NOTIFICATIONS_SUCCESS,
    payload: notifications
})

export const getNotificationsError = (error: string): GetNotificationsErrorAction => ({
    type: UserActions.GET_NOTIFICATIONS_ERROR,
    error
})

export const markNotificationAsReadSuccess = (id: ApiResourceID): MarkNotificationAsReadSuccessAction => ({
    type: UserActions.MARK_NOTIFICATION_AS_READ_SUCCESS,
    payload: id
})

export const markNotificationAsReadError = (error: string): MarkNotificationAsReadErrorAction => ({
    type: UserActions.MARK_NOTIFICATION_AS_READ_ERROR,
    error
})
