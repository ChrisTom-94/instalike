import { Reducer } from "redux";
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

const emptyPostFeed = (): Instalike.PostFeed => ({
  resourceType: "PostFeed",
  items: [],
  count: 0,
  cursor: null,
  previousCursor: null,
  nextCursor: null,
  isEmpty: true,
  hasMorePages: false,
  hasPages: false,
  onFirstPage: true,
});

export const postsInitialState: PostsState = {
  feed: emptyPostFeed(),
  ownPosts: emptyPostFeed(),
  userPosts: emptyPostFeed(),
  isLoading: false,
  errors: null,
  post: null,
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
          items: [action.payload, ...(state.feed?.items as Instalike.Post[])],
        },
        ownPosts: {
          ...state.ownPosts,
          count: state.feed.count + 1,
          items: [action.payload, ...(state.feed?.items as Instalike.Post[])],
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
