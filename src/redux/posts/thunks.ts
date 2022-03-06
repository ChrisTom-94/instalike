import { ApiResourceID } from 'redux/api/types';
import { apiStart, apiError, apiEnd } from "redux/api/actions";
import { LoadingStatus } from "redux/api/enum";
import { AppThunkAction } from "redux/store";
import { addPostLike, deletePostLike, getFeed, getPosts } from "./actions";

export const getPostsAsync =
  (amount: number, cursor: string): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_POSTS));
    try {
      const posts = (await api.user.posts(amount, cursor)).data;
      dispatch(getPosts(posts));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const getFeedAsync =
  (amount: number, cursor: string): AppThunkAction => async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_POSTS));
    try {
      const feed = (await api.posts.feed(amount, cursor)).data;
      dispatch(getFeed(feed));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

  export const likeAsync =
  (postId: ApiResourceID): AppThunkAction => async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_POSTS));
    try {
      const like = (await api.posts.like(postId)).data;
      dispatch(addPostLike(like, postId));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

  export const unlikeAsync =
  (postId: ApiResourceID, likeId: ApiResourceID): AppThunkAction => async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_POSTS));
    try {
      await api.posts.unlike(postId);
      dispatch(deletePostLike(likeId, postId));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };
