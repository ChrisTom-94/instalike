import React from "react";
import { Link } from "react-router-dom";
import heart from "assets/images/heart.svg";

const PostsGrid = ({ posts }: { posts: Instalike.PostFeed }) => (
  <section className="grid grid-cols-3 gap-1">
    {posts.isEmpty ? (
      <p>No posts</p>
    ) : (
      posts.items.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <div className="rounded-lg overflow-hidden">
            <img src={post.resources[0]?.src ?? heart} alt="" />
          </div>
        </Link>
      ))
    )}
  </section>
);

export default PostsGrid;
