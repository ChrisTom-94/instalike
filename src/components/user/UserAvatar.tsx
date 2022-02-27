import React from "react";
import heart  from "assets/images/heart.png";

const UserAvatar = ({avatar}: {avatar: string | null}) => (
    <div className="border-gradient flex-center aspect-square rounded-full p-2">
         <img alt="" className="block w-full" src={avatar ?? heart} />
    </div>
)

export default UserAvatar;