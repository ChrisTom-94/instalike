import { ApiAction } from 'api/types';
import apiClient from 'api/api';
import { apiAction } from 'api/actions';
import UserActions from './enum';

const getProfile = (): ApiAction => apiAction({
    apiEndpoint: apiClient.user.profile,
    data: null,
    onSuccess: null,
    onFailure: () => {},
    label: UserActions.GET_PROFILE
});

export default getProfile
