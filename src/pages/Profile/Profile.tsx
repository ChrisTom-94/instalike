import UserAvatar from "components/user/UserAvatar";
import UserInfo from "components/user/UserInfo";
import UserNavbar from "components/user/UserNavbar";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { userPostsCountSelector } from "redux/posts/selectors";
import { userProfileSelector } from "redux/user/selectors";

const Profile = () => {
    
    const user = useSelector(userProfileSelector)
    const userPostCount = useSelector(userPostsCountSelector)

    return (
    <section className="p-4 mt-12">
        <div className="grid grid-cols-3 gap-3">
            <div className="w-24 place-self-center">
                <UserAvatar className="border-2" avatar={user.avatar} />
            </div>
            <div className="col-span-2">
                <UserInfo fullname={user.fullName} biography={user.biography} />
            </div>
        </div>
        <UserNavbar postsCount={userPostCount} followersCount={user.followersCount} followingCount={user.followingCount} />
        <Outlet />
    </section>
)}

export default Profile;