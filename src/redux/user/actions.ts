import { ResourceID } from 'api/types';
import { 
    UserRequestErrorAction,
    GetProfileSuccessAction, 
    UpdateAvatarAction, 
    DeleteAvatarAction, 
    UpdateProfileAction, 
    GetFollowSuggestionsAction, 
    AddFollowingAction, 
    DeleteFollowingAction, 
    GetNotificationsSuccessAction, 
    MarkNotificationAsReadSuccessAction,
    MarkNotificationAsUnreadSuccessAction,
} from './actionsType';
import UserActions from "./enum";

export const userRequestError = (errors: any): UserRequestErrorAction => ({
    type: UserActions.USER_REQUEST_ERROR,
    errors
})

export const getProfileSuccess = (user: Instalike.User): GetProfileSuccessAction => ({
    type: UserActions.GET_PROFILE_SUCCESS,
    payload: user
})

export const updateProfileSuccess = (user: Instalike.User): UpdateProfileAction => ({
    type: UserActions.UPDATE_PROFILE,
    payload: user
})

export const updateAvatarSuccess = (user: Instalike.User): UpdateAvatarAction => ({
    type: UserActions.UPDATE_AVATAR,
    payload: user
})

export const deleteAvatar = (): DeleteAvatarAction => ({
    type: UserActions.DELETE_AVATAR,
    payload: undefined
})

export const getFollowSuggestion = (users: Instalike.UserPreview[]): GetFollowSuggestionsAction => ({
    type: UserActions.GET_FOLLOW_SUGGESTIONS,
    payload: users
})

export const addFollowing = (user: Instalike.UserPreview): AddFollowingAction => ({
    type: UserActions.ADD_FOLLOWING,
    payload: user
})

export const deleteFollowing = (id: ResourceID): DeleteFollowingAction => ({
    type: UserActions.DELETE_FOLLOWING,
    payload: id
})

export const getNotificationsSuccess = (notifications: Instalike.Notification[]): GetNotificationsSuccessAction => ({
    type: UserActions.GET_NOTIFICATIONS_SUCCESS,
    payload: notifications
})

export const markNotificationAsReadSuccess = (id: ResourceID): MarkNotificationAsReadSuccessAction => ({
    type: UserActions.MARK_NOTIFICATION_AS_READ_SUCCESS,
    payload: id
})

export const markNotificationAsUnreadSuccess = (id: ResourceID): MarkNotificationAsUnreadSuccessAction => ({
    type: UserActions.MARK_NOTIFICATION_AS_UNREAD_SUCCESS,
    payload: id
})