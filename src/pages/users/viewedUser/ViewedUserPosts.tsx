import PostsGrid from "components/posts/PostsGrid";
import PostsList from "components/posts/PostsList";
import useToggler from "hooks/useToggler";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewedUserPostsSelector } from "redux/posts/selectors";
import { getPostsAsync } from "redux/posts/thunks";

const ViewedUserPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(viewedUserPostsSelector);
  const [isGrid] = useToggler(true);

  const fetchPosts = useCallback(() => {
    if (!posts.hasMorePages) return;
    const amount = isGrid ? 10 : 5;
    const cursor = posts.nextCursor ? posts.nextCursor : posts.cursor;
    dispatch(getPostsAsync(amount, cursor ?? ""));
  }, [dispatch, isGrid, posts]);

  return isGrid ? (
    <PostsGrid posts={posts} />
  ) : (
    <PostsList onLastAppears={fetchPosts} posts={posts} />
  );
};

export default ViewedUserPosts;
