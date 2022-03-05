import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feedSelector } from "redux/posts/selectors";
import { getFeedAsync } from "redux/posts/thunks";

const Feed = () => {
  const feed = useSelector(feedSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (feed.resourceType === "PostFeed") return;
    const amount = 10;
    const cursor = feed.nextCursor ? feed.nextCursor : feed.cursor;
    dispatch(getFeedAsync(amount, cursor ?? ""));
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      {/* {feed?.items.map((post: any) => <p>{post.caption}</p>)} */}
    </div>
  );
};

export default Feed;
