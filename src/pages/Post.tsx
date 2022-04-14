import PostComments from "components/posts/PostComments";
import PostPreview from "components/posts/PostPreview";
import BackLink from "components/routes/links/BackLink";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "redux/api/api";
import { ApiResourceID } from "redux/api/types";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Instalike.Post>(null!);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await apiClient.posts.fetchById(id as ApiResourceID);
        setPost(data);
      } catch {
        navigate("/404");
      }
    };
    fetchPost();
  }, [id, navigate]);

  return (
    <section className="mt-16 mx-auto">
      <div className="px-3">
        <BackLink onClick={null} />
      </div>
      {post && <PostPreview post={post} />}
      {post && <PostComments comments={post.previewComments} />}
    </section>
  );
};

export default Post;
