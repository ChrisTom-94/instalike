import UserAvatar from "components/user/UserAvatar";
import UserInfo from "components/user/UserInfo";
import UserNavbar from "components/user/UserNavbar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { viewedUserPostsSelector } from "redux/posts/selectors";
import { getViewedUserPostsAsync } from "redux/posts/thunks";
import { viewedUserSelector } from "redux/user/selectors";
import { getViewedUserAsync } from "redux/user/thunks";

const ViewedUser = () => {
  const { id } = useParams();
  const { profile } = useSelector(viewedUserSelector);
  const posts = useSelector(viewedUserPostsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id || !id.match(/(\d){8}/)) return;
    dispatch(getViewedUserAsync(id));
    dispatch(getViewedUserPostsAsync(id));
  }, [id, dispatch]);

  return (
    <section className="p-4 mt-12">
      <div className="grid grid-cols-3 gap-3">
        <div className="w-24 place-self-center relative z-10">
          <UserAvatar className="border-2" avatar={profile.avatar} />
        </div>
        <div className="col-span-2">
          <UserInfo fullname={profile.fullName} biography={profile.biography} />
        </div>
      </div>
      <UserNavbar
        postsCount={posts.items.length}
        followersCount={profile.followersCount}
        followingCount={profile.followingCount}
      />
      <section className="mt-10">
        <Outlet />
      </section>
    </section>
  );
};

export default ViewedUser;
