import React, { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as PlusIcon } from "assets/images/plus.svg";
import { ReactComponent as SearchIcon } from "assets/images/search.svg";
import { ReactComponent as HomeIcon } from "assets/images/home.svg";
import { userProfileIDSelector } from "redux/user/selectors";
import Notifications from "./notifications/Notifications";
import UserAvatar from "./user/UserAvatar";

const Navbar = () => {
  const userID = useSelector(userProfileIDSelector);
  if (!userID) {
    return (
      <span className="font-display font-semibold px-1 text-2xl text-gradient ml-auto">
        Instalike
      </span>
    );
  }
  return (
    <header className="flex items-center justify-between px-5 py-2 fixed inset-x-0 top-0">
      <span className="font-display font-semibold px-1 text-2xl text-gradient">
        Instalike
      </span>
      <nav className="flex-center gap-5">
        <Notifications />
        <Link to="/post/add">
          <PlusIcon />
        </Link>
      </nav>
      <nav className="fixed z-20 bottom-0 inset-x-0 flex items-center justify-evenly border-t-2 border-paradise-pink p-3">
        <NavLink to="/search" className="link-hover">
          <SearchIcon />
        </NavLink>
        <NavLink to="/feed" className="link-hover">
          <HomeIcon />
        </NavLink>
        <NavLink to="/profile/me/" className="link-hover w-10">
          <UserAvatar className="border-2" avatar={null} />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
