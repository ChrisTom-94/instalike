import { ApiAction } from 'api/types';
import apiClient from 'api/api';
import apiAction from 'api/actions';
import UserActions from './enum';
import { UserRequiredFields } from './types';

export const getProfile = (): ApiAction => apiAction({
    apiEndpoint: apiClient.user.profile,
    data: null,
    onSuccess: null,
    onFailure: null,
    label: UserActions.GET_PROFILE
});

export const updateProfile = (user: UserRequiredFields): ApiAction => apiAction({
    apiEndpoint: apiClient.user.updateProfile,
    data: user,
    onSuccess: null,
    onFailure: null,
    label: UserActions.UPDATE_PROFILE
})

export const updateAvatar = (user: UserRequiredFields): ApiAction => apiAction({
    apiEndpoint: apiClient.user.updateAvatar,
    data: user,
    onSuccess: null,
    onFailure: null,
    label: UserActions.UPDATE_PROFILE
})
