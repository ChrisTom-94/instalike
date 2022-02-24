import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isAuthSelector } from "redux/auth/selectors";
import { countNotificationsToReadSelector } from "redux/user/selectors";
import { getNotificationsRequest } from "redux/user/thunks";
import LogoutLink from "./LogoutLink";

const Navbar = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(isAuthSelector)
    const countNotificationsToRead = useSelector(countNotificationsToReadSelector)

    useEffect(() => {
        if(!isAuth) return;
        dispatch(getNotificationsRequest())
    })

    return (<header className="flex items-center p-3">
        <span>Instalike</span>
        {isAuth && (
            <nav className="ml-auto flex items-center gap-2">
                <Link to="/notifications">{countNotificationsToRead}</Link>
                <Link to="/feed" className="link-hover">Feed</Link>
                <Link to="/feed" className="link-hover">Profile</Link>
                <LogoutLink />
            </nav>
        )}
    </header>
)}

export default Navbar;
