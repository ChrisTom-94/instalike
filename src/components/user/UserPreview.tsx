import React from "react";
import { Link } from "react-router-dom";
import { UserPreviewType } from "redux/user/types";
import UserAvatar from "./UserAvatar";

const UserPreview = ({ userName, avatar, id }: UserPreviewType) => (
  <div className="flex items-center gap-3">
    <div className="w-12">
      <UserAvatar className="border-2" avatar={avatar} />
    </div>
    <Link to={`/profile/${id}`}>{userName}</Link>
  </div>
);

export default UserPreview;
