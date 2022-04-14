import CommentForm from "forms/CommentForm";
import React from "react";
import { useParams } from "react-router-dom";
import PostCommentItem from "./PostCommentItem";

const PostComments = ({ comments }: { comments: Instalike.Comment[] }) => {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-3 p-2 mb-16 bg-white">
      <h2 className="subtitle">Comments</h2>
      {comments.map((comment) => (
        <PostCommentItem key={comment.id} comment={comment} />
      ))}
      <CommentForm comment="" idPost={id ?? ""} />
    </div>
  );
};

export default PostComments;
