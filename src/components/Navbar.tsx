import React, { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {ReactComponent as PlusIcon} from "assets/images/plus.svg";
import {ReactComponent as SearchIcon} from "assets/images/search.svg";
import {ReactComponent as HomeIcon} from "assets/images/home.svg";
import { isAuthSelector } from "redux/auth/selectors";
import Notifications from "./notifications/Notifications";
import UserAvatar from "./user/UserAvatar";

const Navbar = () => {

    const isAuth = useSelector(isAuthSelector)

    return (<header className="flex items-center justify-between px-5 py-2 fixed inset-x-0 top-0">
        <span className={`font-display font-semibold px-1 text-2xl text-gradient ${isAuth ? '' : 'ml-auto'}`}>Instalike</span>
        {isAuth && (
            <nav className="flex-center gap-5">
                <Notifications />
                <Link to="/post/add"><PlusIcon /></Link>
            </nav>
        )}
        {isAuth && (
            <nav className="fixed z-20 bottom-0 inset-x-0 flex items-center justify-evenly border-t-2 border-paradise-pink p-3">
                <NavLink to="/search" className="link-hover"><SearchIcon /></NavLink>
                <NavLink to="/feed" className="link-hover"><HomeIcon /></NavLink>
                <NavLink to="/profile/me" className="link-hover w-10">
                    <UserAvatar className="border-2" avatar={null} />
                </NavLink>
            </nav>
        )}
    </header>
)}

export default Navbar;
