import { createSelector } from "reselect";
import type { RootState } from "../store";

const postsSelector = (state: RootState) => state.posts

export const feedSelector = createSelector(
    [postsSelector],
    (state) => state.feed
);

export const postSelector = createSelector(
    [postsSelector],
    (state) => state.post
)