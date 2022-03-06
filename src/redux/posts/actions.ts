import { ApiResourceID } from "redux/api/types";
import {
  AddPostAction,
  UpdatePostAction,
  DeletePostAction,
  AddPostCommentAction,
  UpdatePostCommentAction,
  DeletePostCommentAction,
  AddPostLikeAction,
  DeletePostLikeAction,
  GetPostsAction,
  GetPostCommentsAction,
  GetFeedAction,
  GetViewedUserPostsAction,
} from "./actionsType";

import PostsActions from "./enum";

export const getFeed = (posts: Instalike.PostFeed): GetFeedAction => ({
  type: PostsActions.GET_FEED,
  payload: posts,
});

export const getPosts = (posts: Instalike.PostFeed): GetPostsAction => ({
  type: PostsActions.GET_POSTS,
  payload: posts,
});

export const addPost = (post: Instalike.Post): AddPostAction => ({
  type: PostsActions.ADD_POST,
  payload: post,
});

export const updatePost = (post: Instalike.Post): UpdatePostAction => ({
  type: PostsActions.UPDATE_POST,
  payload: post,
});

export const deletePost = (id: ApiResourceID): DeletePostAction => ({
  type: PostsActions.DELETE_POST,
  payload: id,
});

export const getPostComments = (
  comments: Instalike.Comment[]
): GetPostCommentsAction => ({
  type: PostsActions.GET_POST_COMMENTS,
  payload: comments,
});

export const addPostComment = (
  comment: Instalike.Comment
): AddPostCommentAction => ({
  type: PostsActions.ADD_POST_COMMENT,
  payload: comment,
});

export const UpdatePostComment = (
  comment: Instalike.Comment
): UpdatePostCommentAction => ({
  type: PostsActions.UPDATE_POST_COMMENT,
  payload: comment,
});

export const deletePostComment = (
  id: ApiResourceID
): DeletePostCommentAction => ({
  type: PostsActions.DELETE_POST_COMMENT,
  payload: id,
});

export const addPostLike = (
  like: Instalike.Like,
  postId: ApiResourceID
): AddPostLikeAction => ({
  type: PostsActions.ADD_POST_LIKE,
  payload: { like, postId },
});

export const deletePostLike = (
  likeId: ApiResourceID,
  postId: ApiResourceID
): DeletePostLikeAction => ({
  type: PostsActions.DELETE_POST_LIKE,
  payload: { likeId, postId },
});

export const getVievedUserPost = (
  posts: Instalike.PostFeed
): GetViewedUserPostsAction => ({
  type: PostsActions.GET_VIEWED_USER_POSTS,
  payload: posts,
});
