import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutRequest } from "redux/auth/thunks";

const  LogoutLink = () => {

  const dispatch = useDispatch();

  const onClick = (e: any) => {
    e.preventDefault()
    dispatch(logoutRequest())
  };

  return <Link className="link-hover" to="/logout" onClick={onClick}>Logout</Link>;
}

export default LogoutLink;
