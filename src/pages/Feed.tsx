import PostPreview from "components/posts/PostPreview";
import UserAvatar from "components/user/UserAvatar";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { feedSelector } from "redux/posts/selectors";
import { getFeedAsync } from "redux/posts/thunks";
import { followSuggestionSelector } from "redux/user/selectors";
import { getFollowSuggestionsAsync } from "redux/user/thunks";

const Feed = () => {
  const feed = useSelector(feedSelector);
  const amount = 10;
  const cursor = feed.nextCursor ? feed.nextCursor : feed.cursor;
  const followSuggestions = useSelector(followSuggestionSelector);
  const dispatch = useDispatch();

  const fetchMoreFeed = useCallback(() => {
    if (!feed.hasMorePages || !cursor) return;
    dispatch(getFeedAsync(amount, cursor));
  }, [feed, cursor, dispatch]);

  useEffect(() => {
    if (feed.resourceType !== "") return;
    dispatch(getFeedAsync(amount, cursor ?? ""));
  }, []);

  useEffect(() => {
    if (followSuggestions.length) return;
    dispatch(getFollowSuggestionsAsync());
  }, [followSuggestions, dispatch]);

  return (
    <div className="my-16 w-full max-w-lg bg-gray-100 flex flex-col gap-3 mx-auto">
      <div />
      <h2 className="subtitle">Maybe you know</h2>
      <div className="flex items-center gap-3 overflow-x-scroll">
        {followSuggestions.map((user) => (
          <Link
            key={user.userName}
            to={`/profile/${user.id}`}
            className="flex flex-col items-center gap-2"
          >
            <UserAvatar avatar={user.avatar} className="w-28" />
            <small className="text-xs">{user.userName}</small>
          </Link>
        ))}
      </div>
      {feed?.items.map((post: Instalike.Post, i: number) => (
        <PostPreview
          onAppears={fetchMoreFeed}
          post={post}
          isLast={i + 1 === feed.items.length - 1}
          key={post.id}
        />
      ))}
      {!feed.hasMorePages && (
        <p className="text-center mb-4">No more content</p>
      )}
    </div>
  );
};

export default Feed;
