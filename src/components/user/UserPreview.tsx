import React from "react";
import { Link } from "react-router-dom";
import UserAvatar from "./UserAvatar";

type UserPreviewType = Pick<Instalike.UserPreview, 'userName' | "avatar">

const UserPreview = ({userName, avatar}: UserPreviewType) => (
    <div className="flex items-center gap-3">
        <div className="w-12">
            <UserAvatar className="border-2" avatar={avatar} />
        </div>
        <Link to={`/user/${userName}`}>{userName}</Link>
    </div>
)

export default UserPreview;