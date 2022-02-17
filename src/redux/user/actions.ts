import { ResourceID } from 'api/types';
import { 
    DeleteAvatarAction, 
    GetProfileAction, 
    UpdateAvatarAction, 
    UpdateProfileAction, 
    GetFollowSuggestionsAction, 
    AddFollowingAction, 
    DeleteFollowingAction, 
    GetNotificationsAction, 
    UpdateAllNotificationsAsReadAction,
    UpdateNotificationAsReadAction,
    UpdateNotificationAsUnreadAction
} from './actionsType';
import UserActions from "./enum";

export const getProfile = (user: Instalike.User): GetProfileAction => ({
    type: UserActions.GET_PROFILE,
    payload: user
})

export const updateProfile = (user: Instalike.User): UpdateProfileAction => ({
    type: UserActions.UPDATE_PROFILE,
    payload: user
})

export const updateAvatar = (user: Instalike.User): UpdateAvatarAction => ({
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

export const getNotifications = (notifications: Instalike.Notification[]): GetNotificationsAction => ({
    type: UserActions.GET_NOTIFICATIONS,
    payload: notifications
})

export const updateAllNotificationsAsRead = (): UpdateAllNotificationsAsReadAction => ({
    type: UserActions.UPDATE_ALL_NOTIFICATIONS_AS_READ,
    payload: undefined
})

export const updateNotificationAsRead = (notification: Instalike.Notification): UpdateNotificationAsReadAction => ({
    type: UserActions.UPDATE_NOTIFICATION_AS_READ,
    payload: notification
})

export const updateNotificationAsUnread = (notification: Instalike.Notification): UpdateNotificationAsUnreadAction => ({
    type: UserActions.UPDATE_NOTIFICATION_AS_UNREAD,
    payload: notification
})