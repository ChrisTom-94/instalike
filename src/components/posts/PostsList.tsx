import React from "react";
import PostPreview from "./PostPreview";

const PostsList = ({
  posts,
  onLastAppears,
}: {
  posts: Instalike.PostFeed;
  onLastAppears: () => void;
}) => (
  <section className="grid grid-cols-1 gap-1">
    {posts.isEmpty ? (
      <p>No posts</p>
    ) : (
      posts.items.map((post, i) => (
        <PostPreview
          post={post}
          isLast={i === posts.count - 1}
          onAppears={onLastAppears}
        />
      ))
    )}
  </section>
);

export default PostsList;
