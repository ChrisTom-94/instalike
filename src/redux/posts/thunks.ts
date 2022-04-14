import { ApiResourceID } from "redux/api/types";
import { apiStart, apiError, apiEnd } from "redux/api/actions";
import { LoadingStatus } from "redux/api/enum";
import { AppThunkAction } from "redux/store";
import {
  addPost,
  addPostComment,
  addPostLike,
  deletePost,
  deletePostLike,
  getFeed,
  getPosts,
  getViewedUserPosts,
  updatePost,
  updatePostComment,
  deletePostComment,
} from "./actions";

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
  (amount: number, cursor: string): AppThunkAction =>
  async (dispatch, _getState, api) => {
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
  (postId: ApiResourceID): AppThunkAction =>
  async (dispatch, _getState, api) => {
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
  (postId: ApiResourceID, likeId: ApiResourceID): AppThunkAction =>
  async (dispatch, _getState, api) => {
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

export const addPostAsync =
  (post: FormData): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_POSTS));
    try {
      const newPost = (await api.posts.create(post)).data;
      dispatch(addPost(newPost));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const updatePostAsync =
  (id: ApiResourceID, post: FormData): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_POSTS));
    try {
      const updatedPost = (await api.posts.update(id, post)).data;
      dispatch(updatePost(updatedPost));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const deletePostAsync =
  (id: ApiResourceID): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_POSTS));
    try {
      await api.posts.delete(id);
      dispatch(deletePost(id));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const addPostCommentAsync =
  (idPost: ApiResourceID, comment: string): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_COMMENTS));
    try {
      const newComment = (await api.posts.addComment(idPost, comment)).data;
      dispatch(addPostComment(newComment, idPost));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const updatePostCommentAsync =
  (
    idPost: ApiResourceID,
    idComment: ApiResourceID,
    text: string
  ): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_COMMENTS));
    try {
      const updatedComment = (
        await api.posts.updateComment(idPost, idComment, text)
      ).data;
      dispatch(updatePostComment(updatedComment, idPost));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const deletePostCommentAsync =
  (idPost: ApiResourceID, idComment: ApiResourceID): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_COMMENTS));
    try {
      await api.posts.deleteComment(idPost, idComment);
      dispatch(deletePostComment(idComment, idPost));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };


export const getViewedUserPostsAsync =
  (userId: ApiResourceID): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_POSTS));
    try {
      const posts = (await api.posts.viewedUserPosts(userId)).data;
      dispatch(getViewedUserPosts(posts));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };
