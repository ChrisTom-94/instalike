import React, { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isAuthSelector } from "redux/auth/selectors";
import LogoutLink from "./LogoutLink";
import Notifications from "./notifications/Notifications";

const Navbar = () => {

    const isAuth = useSelector(isAuthSelector)

    return (<header className="flex items-center justify-end px-5 py-2">
        <span className="font-display font-semibold px-1 text-2xl text-gradient">Instalike</span>
        {isAuth && (
            <nav className="mr-auto flex items-center gap-2">
                <Notifications />
                <Link to="/feed" className="link-hover">Feed</Link>
                <Link to="/feed" className="link-hover">Profile</Link>
                <LogoutLink />
            </nav>
        )}
    </header>
)}

export default Navbar;
