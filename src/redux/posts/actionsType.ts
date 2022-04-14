import { ApiResourceID } from "redux/api/types";
import { Action } from "redux";
import PostsActions from "./enum";

export interface GetFeedAction extends Action<typeof PostsActions.GET_FEED> {
  payload: Instalike.PostFeed;
}
export interface GetPostsAction extends Action<typeof PostsActions.GET_POSTS> {
  payload: Instalike.PostFeed;
}
export interface AddPostAction extends Action<typeof PostsActions.ADD_POST> {
  payload: Instalike.Post;
}

export interface UpdatePostAction
  extends Action<typeof PostsActions.UPDATE_POST> {
  payload: Instalike.Post;
}

export interface DeletePostAction
  extends Action<typeof PostsActions.DELETE_POST> {
  payload: ApiResourceID;
}

export interface AddPostCommentAction
  extends Action<typeof PostsActions.ADD_POST_COMMENT> {
  payload: { comment: Instalike.Comment; postId: ApiResourceID };
}

export interface UpdatePostCommentAction
  extends Action<typeof PostsActions.UPDATE_POST_COMMENT> {
  payload: { comment: Instalike.Comment; postId: ApiResourceID };
}

export interface DeletePostCommentAction
  extends Action<typeof PostsActions.DELETE_POST_COMMENT> {
  payload: { commentId: ApiResourceID; postId: ApiResourceID };
}

export interface AddPostLikeAction
  extends Action<typeof PostsActions.ADD_POST_LIKE> {
  payload: { like: Instalike.Like; postId: ApiResourceID };
}

export interface DeletePostLikeAction
  extends Action<typeof PostsActions.DELETE_POST_LIKE> {
  payload: { likeId: ApiResourceID; postId: ApiResourceID };
}

export interface GetViewedUserPostsAction
  extends Action<typeof PostsActions.GET_VIEWED_USER_POSTS> {
  payload: Instalike.PostFeed;
}
