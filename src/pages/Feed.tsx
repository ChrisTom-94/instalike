import PostPreview from "components/posts/PostPreview";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feedSelector } from "redux/posts/selectors";
import { getFeedAsync } from "redux/posts/thunks";

const Feed = () => {
  const feed = useSelector(feedSelector);
  const amount = 10;
  const cursor = feed.nextCursor ? feed.nextCursor : feed.cursor;
  const dispatch = useDispatch();

  const fetchMoreFeed = useCallback(() => {
    if (!feed.hasMorePages || !cursor) return;
    dispatch(getFeedAsync(amount, cursor));
  }, [feed, cursor, dispatch]);

  useEffect(() => {
    if (feed.resourceType !== "") return;
    dispatch(getFeedAsync(amount, cursor ?? ""));
  }, []);

  return (
    <div className="my-16 w-full max-w-lg bg-gray-100 flex flex-col gap-3">
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
