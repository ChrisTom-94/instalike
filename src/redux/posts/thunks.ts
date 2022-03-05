import { apiStart, apiError, apiEnd } from "redux/api/actions";
import { LoadingStatus } from "redux/api/enum";
import { AppThunkAction } from "redux/store";
import { getFeed, getPosts } from "./actions";

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
