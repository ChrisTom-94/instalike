import { ApiAction, ResourceID } from 'api/types';
import apiAction from 'api/actions';
import apiClient from 'api/api';
import { getNotificationsSuccess, getProfileSuccess, markNotificationAsReadSuccess, markNotificationAsUnreadSuccess, updateProfileSuccess, userRequestError } from './actions';
import UserActions from './enum';
import { UserRequiredFields } from './types';

export const getProfileRequest = (): ApiAction => apiAction({
    apiEndpoint: apiClient.user.profile,
    data: null,
    onSuccess: getProfileSuccess,
    onFailure: userRequestError,
    label: UserActions.GET_PROFILE_REQUEST
});

export const updateProfileRequest = (user: UserRequiredFields): ApiAction => apiAction({
    apiEndpoint: apiClient.user.updateProfile,
    data: user,
    onSuccess: updateProfileSuccess,
    onFailure: userRequestError,
    label: UserActions.UPDATE_PROFILE
})

export const getNotificationsRequest = (): ApiAction => apiAction({
    apiEndpoint: apiClient.user.notifications,
    data: null,
    onSuccess: getNotificationsSuccess,
    onFailure: userRequestError,
    label: UserActions.GET_NOTIFICATIONS_REQUEST
})

export const markNotificationAsReadRequest = (id: ResourceID): ApiAction => apiAction({
    apiEndpoint: apiClient.user.readNotification,
    data: id,
    onSuccess: markNotificationAsReadSuccess,
    onFailure: userRequestError,
    label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST
})

export const markNotificationAsUnreadRequest = (id: ResourceID): ApiAction => apiAction({
    apiEndpoint: apiClient.user.unreadNotification,
    data: id,
    onSuccess: markNotificationAsUnreadSuccess,
    onFailure: userRequestError,
    label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST
})

// export const updateAvatarRequest = (user: UserRequiredFields): ApiAction => apiAction({
//     apiEndpoint: apiClient.user.updateAvatar,
//     data: user,
//     onSuccess: null,
//     onFailure: null,
//     label: UserActions.UPDATE_PROFILE
// })
