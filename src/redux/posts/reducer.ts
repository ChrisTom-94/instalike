import { Reducer } from "redux";
import { generateEmptyPostsFeed } from "utils/helpers";
import {
  GetFeedRequestAction,
  GetFeedSuccessAction,
  GetFeedErrorAction,
  AddPostRequestAction,
  AddPostSuccessAction,
  AddPostErrorAction,
} from "./actionsType";
import PostsActions from "./enum";
import { PostsState } from "./type";

export const postsInitialState: PostsState = {
  feed: generateEmptyPostsFeed(),
  currentPosts: generateEmptyPostsFeed(),
  currentPost: null,
  errors: null,
  isLoading: false,
};

export type PostsAction =
  | GetFeedRequestAction
  | GetFeedSuccessAction
  | GetFeedErrorAction
  | AddPostRequestAction
  | AddPostSuccessAction
  | AddPostErrorAction;

const postsReducer: Reducer<PostsState, PostsAction> = (
  state = postsInitialState,
  action
) => {
  switch (action.type) {
    case PostsActions.GET_FEED_REQUEST:
      return { ...state, errors: null, isLoading: true };

    case PostsActions.GET_FEED_SUCCESS:
      return {
        ...state,
        feed: {
          ...state.feed,
          ...action.payload,
          items: [
            ...action.payload.items,
            ...(state.feed?.items as Instalike.Post[]),
          ],
        },
        errors: null,
        isLoading: false,
      };

    case PostsActions.GET_FEED_ERROR:
      return { ...state, errors: action.error, isLoading: false };

    case PostsActions.ADD_POST_REQUEST:
      return { ...state, errors: null, isLoading: true };

    case PostsActions.ADD_POST_SUCCESS:
      return {
        ...state,
        feed: {
          ...state.feed,
          count: state.feed.count + 1,
          items: [action.payload, ...state.feed.items],
        },
        errors: null,
        isLoading: false,
      };

    case PostsActions.ADD_POST_ERROR:
      return { ...state, errors: action.errors, isLoading: false };

    default:
      return state;
  }
};

export default postsReducer;

