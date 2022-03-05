import UserAvatar from "components/user/UserAvatar";
import UserInfo from "components/user/UserInfo";
import UserNavbar from "components/user/UserNavbar";
import { ReactComponent as PlusIcon } from "assets/images/plus.svg";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { userProfileSelector } from "redux/user/selectors";
import { userPostsCountSelector } from "redux/posts/selectors";
import useToggler from "hooks/useToggler";
import Modal from "components/Modal";
import AvatarForm from "forms/AvatarForm";

const Profile = () => {
  const user = useSelector(userProfileSelector);
  const userPostsCount = useSelector(userPostsCountSelector);
  const [isOpen, toggleIsOpen] = useToggler(false);

  const toggleModal = useCallback(
    () => toggleIsOpen(!isOpen),
    [isOpen, toggleIsOpen]
  );

  return (
    <section className="p-4 mt-12">
      <div className="grid grid-cols-3 gap-3">
        <div className="w-24 place-self-center relative z-10">
          <UserAvatar className="border-2" avatar={user.avatar} />
          <PlusIcon
            onClick={toggleModal}
            className="absolute bottom-0 right-0 cursor-pointer"
          />
          {isOpen && (
            <Modal onClick={toggleModal}>
              <AvatarForm avatar={user.avatar} />
            </Modal>
          )}
        </div>
        <div className="col-span-2">
          <UserInfo fullname={user.fullName} biography={user.biography} />
        </div>
      </div>
      <UserNavbar
        postsCount={userPostsCount}
        followersCount={user.followersCount}
        followingCount={user.followingCount}
      />
      <section className="mt-10">
        <Outlet />
      </section>
    </section>
  );
};

export default Profile;
