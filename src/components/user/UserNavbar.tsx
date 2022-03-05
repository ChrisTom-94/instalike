import ButtonOutlined from "components/buttons/ButtonOutlined";
import ToggleFollowButton from "components/buttons/ToggleFollowButton";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useParams, useResolvedPath } from "react-router-dom";
import { ApiResourceID } from "redux/api/types";
import { userViewSelector } from "redux/user/selectors";

const UserNavbar = ({
  postsCount,
  followingCount,
  followersCount,
}: {
  postsCount: number;
  followingCount: number;
  followersCount: number;
}) => {
  const { id } = useParams<string>();
  const resolver = useResolvedPath(`/profile/${id}`);
  const { isViewer } = useSelector(userViewSelector);

  const links = useMemo(
    () => [
      { label: "posts", value: postsCount, color: "acquamarine" },
      { label: "following", value: followingCount, color: "paradise-pink" },
      { label: "followers", value: followersCount, color: "duke-blue" },
    ],
    [postsCount, followingCount, followersCount]
  );

  return (
    <nav className="flex flex-col gap-4 justify-between p-4">
      {isViewer ? (
        <ButtonOutlined type="button" onClick={undefined} disabled={false}>
          <Link
            className="text-gradient group-hover:text-white group-hover:reset-text-gradient"
            to="/profile/me/edit"
          >
            Edit profile
          </Link>
        </ButtonOutlined>
      ) : (
        <ToggleFollowButton userId={id as ApiResourceID} />
      )}
      <div className="flex items-center w-full justify-between">
        {links.map((link) => (
          <NavLink
            key={link.label}
            className="flex flex-col items-center gap-3 max-h-14"
            to={`${resolver.pathname}/${
              link.label === "posts" ? "" : link.label
            }`}
          >
            {({ isActive }) => (
              <>
                <span className="capitalize">{link.label}</span>
                <div
                  className={`flex-center text-${
                    link.color
                  } font-medium text-4xl aspect-square w-14 h-14 p-3 rounded-full ${
                    isActive ? `bg-${link.color} text-white` : ""
                  }`}
                >
                  {link.value}
                </div>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default UserNavbar;
