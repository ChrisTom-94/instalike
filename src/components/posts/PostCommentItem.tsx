import UserAvatar from "components/user/UserAvatar";
import React from "react";
import { Link } from "react-router-dom";
import { dateDiff } from "utils/helpers";

const PostCommentItem = ({ comment }: { comment: Instalike.Comment }) => (
  <div className="flex items-center gap-2">
    <UserAvatar avatar={comment.owner.avatar} className="w-24" />
    <div className="flex flex-col">
      <Link className="font-bold" to={`/profile/${comment.owner.id}`}>
        {comment.owner.userName}
      </Link>
      <p>{comment.text}</p>
      <p>
        <small>{dateDiff(comment.createdAt)}</small>
      </p>
    </div>
  </div>
);

export default PostCommentItem;
