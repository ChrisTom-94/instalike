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

export interface GetPostCommentsAction
  extends Action<typeof PostsActions.GET_POST_COMMENTS> {
  payload: Instalike.Comment[];
}

export interface AddPostCommentAction
  extends Action<typeof PostsActions.ADD_POST_COMMENT> {
  payload: Instalike.Comment;
}

export interface UpdatePostCommentAction
  extends Action<typeof PostsActions.UPDATE_POST_COMMENT> {
  payload: Instalike.Comment;
}

export interface DeletePostCommentAction
  extends Action<typeof PostsActions.DELETE_POST_COMMENT> {
  payload: ApiResourceID;
}

export interface AddPostLikeAction
  extends Action<typeof PostsActions.ADD_POST_LIKE> {
  payload: Instalike.Like;
}

export interface DeletePostLikeAction
  extends Action<typeof PostsActions.DELETE_POST_LIKE> {
  payload: ApiResourceID;
}

export interface GetViewedUserPostsAction
  extends Action<typeof PostsActions.GET_VIEWED_USER_POSTS> {
  payload: Instalike.PostFeed;
}
