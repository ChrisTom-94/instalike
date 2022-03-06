import PostsGrid from "components/posts/PostsGrid";
import PostsList from "components/posts/PostsList";
import useToggler from "hooks/useToggler";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPostsSelector } from "redux/posts/selectors";
import { getPostsAsync } from "redux/posts/thunks";

const UserPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(userPostsSelector);
  const [isGrid] = useToggler(true);

  const fetchPosts = useCallback(() => {
    const amount = isGrid ? 10 : 5;
    const cursor = posts.nextCursor ? posts.nextCursor : posts.cursor;
    dispatch(getPostsAsync(amount, cursor ?? ""));
  }, [dispatch, isGrid, posts]);

  useEffect(() => {});

  return isGrid ? (
    <PostsGrid onLastAppears={fetchPosts} posts={posts} />
  ) : (
    <PostsList onLastAppears={fetchPosts} posts={posts} />
  );
};

export default UserPosts;
