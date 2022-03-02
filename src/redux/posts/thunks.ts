import apiAction from "redux/api/actions";
import apiClient from "redux/api/api";
import type { ApiAction } from "redux/api/types";
import PostsActions from "./enum";

const feedRequest = (): ApiAction => apiAction({
    apiEndpoint: apiClient.posts.feed,
    data: null,
    label: PostsActions.GET_FEED_REQUEST
})

// eslint-disable-next-line import/prefer-default-export
export {feedRequest}