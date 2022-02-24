import React from "react";
import { Link } from "react-router-dom";

type UserPreviewType = Pick<Instalike.UserPreview, 'userName' | "avatar">

const UserPreview = ({userName, avatar}: UserPreviewType) => (
    <div className="flex">
        <div className="flex-center">
            <img alt={`Profile of ${userName}`} src={avatar ?? "https://via.placeholder.com/150"} />
        </div>
        <Link to={`/user/${userName}`} />
    </div>
)

export default UserPreview;