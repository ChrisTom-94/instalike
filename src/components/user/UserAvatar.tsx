import React from "react";
import heart  from "assets/images/heart.svg";

const UserAvatar = ({avatar, className}: {avatar: string | null, className: string}) => (
    <div className={`border-gradient flex-center aspect-square rounded-full ${className}`}>
         <img alt="" className="block w-2/4" src={avatar ?? heart} />
    </div>
)

export default UserAvatar;