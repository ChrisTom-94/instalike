import { AddPostSuccessAction, GetFeedSuccessAction, GetFeedErrorAction, AddPostErrorAction } from "./actionsType";
import PostsActions from "./enum";

export const getFeedSuccess = (feed: Instalike.PostFeed) : GetFeedSuccessAction => ({
    type: PostsActions.GET_FEED_SUCCESS,
    payload: feed
})

export const getFeedError = (error: string): GetFeedErrorAction  => ({
    type: PostsActions.GET_FEED_ERROR,
    error
})

export const addPostSuccess = (post: Instalike.Post) : AddPostSuccessAction => ({
    type: PostsActions.ADD_POST_SUCCESS,
    payload: post
})

export const addPostError = (errors: any) : AddPostErrorAction => ({
    type: PostsActions.ADD_POST_ERROR,
    errors
})