import { createSelector } from "reselect";
import type { RootState } from "../store";

const postsSelector = (state: RootState) => state.posts;

export const feedSelector = createSelector(
  [postsSelector],
  (state) => state.feed
);

export const userPostsSelector = createSelector(
  [postsSelector],
  (state) => state.posts
);

export const userPostsCountSelector = createSelector(
  [postsSelector],
  (state) => state.posts.count
);
