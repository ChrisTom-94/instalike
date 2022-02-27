import { Action } from "redux";
import PostsActions from "./enum";

export interface GetFeedRequestAction extends Action<typeof PostsActions.GET_FEED_REQUEST> {
    payload: undefined;
}

export interface GetFeedSuccessAction extends Action<typeof PostsActions.GET_FEED_SUCCESS> {
    payload: Instalike.PostFeed;
}

export interface GetFeedErrorAction extends Action<typeof PostsActions.GET_FEED_ERROR> {
    error: string;
}

export interface AddPostRequestAction extends Action<typeof PostsActions.ADD_POST_REQUEST> {
    payload: undefined;
}

export interface AddPostSuccessAction extends Action<typeof PostsActions.ADD_POST_SUCCESS> {
    payload: Instalike.Post;
}

export interface AddPostErrorAction extends Action<typeof PostsActions.ADD_POST_ERROR> {
    errors: any;
}