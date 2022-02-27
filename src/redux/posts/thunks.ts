import apiAction from "api/actions";
import apiClient from "api/api";
import { ApiAction } from "api/types";
import { getFeedError, getFeedSuccess } from './actions';
import PostsActions from "./enum";

const feedRequest = (): ApiAction => apiAction({
    apiEndpoint: apiClient.posts.userFeed,
    data: null,
    onSuccess: getFeedSuccess,
    onFailure: getFeedError,
    label: PostsActions.GET_FEED_REQUEST
})

// eslint-disable-next-line import/prefer-default-export
export {feedRequest}