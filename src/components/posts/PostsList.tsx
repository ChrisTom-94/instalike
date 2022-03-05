import React from "react";
import PostPreview from "./PostPreview";

const PostsList = ({
  posts,
  onLastAppeared,
}: {
  posts: Instalike.PostFeed;
  onLastAppeared: () => void;
}) => (
  <section className="grid grid-cols-1 gap-1">
    {posts.isEmpty ? (
      <p>No posts</p>
    ) : (
      posts.items.map((post, i) => (
        <PostPreview
          post={post}
          isLast={i === posts.count - 1}
          onAppear={onLastAppeared}
        />
      ))
    )}
  </section>
);

export default PostsList;