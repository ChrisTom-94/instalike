import { Reducer } from "redux";
import { generateEmptyPostsFeed } from "utils/helpers";
import { generateEmptyPost } from "../../utils/helpers";
import {
  GetPostsAction,
  AddPostAction,
  UpdatePostAction,
  DeletePostAction,
  GetPostCommentsAction,
  AddPostCommentAction,
  UpdatePostCommentAction,
  DeletePostCommentAction,
  AddPostLikeAction,
  DeletePostLikeAction,
  GetFeedAction,
} from "./actionsType";
import PostsActions from "./enum";
import { PostsState } from "./type";

export const postsInitialState: PostsState = {
  feed: generateEmptyPostsFeed(),
  posts: generateEmptyPostsFeed(),
  viewedUserPosts: generateEmptyPostsFeed(),
  currentPost: {
    post: generateEmptyPost(),
    likes: [],
    comments: [],
  },
};

export type PostsAction =
  | GetFeedAction
  | GetPostsAction
  | AddPostAction
  | UpdatePostAction
  | DeletePostAction
  | GetPostCommentsAction
  | AddPostCommentAction
  | UpdatePostCommentAction
  | DeletePostCommentAction
  | AddPostLikeAction
  | DeletePostLikeAction;

const postsReducer: Reducer<PostsState, PostsAction> = (
  state = postsInitialState,
  action
) => {
  switch (action.type) {
    case PostsActions.GET_FEED:
      return {
        ...state,
        feed: {
          ...state.feed,
          ...action.payload,
          items: [...state.feed.items, ...action.payload.items],
        },
      };

    case PostsActions.GET_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          ...action.payload,
          items: [...state.posts.items, ...action.payload.items],
        },
      };

    case PostsActions.ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          items: [...state.posts.items, action.payload],
        },
      };

    case PostsActions.UPDATE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          items: state.posts.items.map((post) =>
            post.id === action.payload.id ? action.payload : post
          ),
        },
      };

    case PostsActions.DELETE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          items: state.posts.items.filter((post) => post.id !== action.payload),
        },
      };

    case PostsActions.ADD_POST_LIKE:
      return {
        ...state,
        posts: {
          ...state.posts,
          items: state.posts.items.map((post) =>
            post.id === action.payload.postId
              ? {
                  ...post,
                  previewLikes: [...post.previewLikes, action.payload.like],
                }
              : post
          ),
        },
      };

    default:
      return state;
  }
};

export default postsReducer;
