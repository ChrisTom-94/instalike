import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAsync } from "redux/api/thunks";

const  LogoutLink = () => {

  const dispatch = useDispatch();

  const onClick = (e: any) => {
    e.preventDefault()
    dispatch(logoutAsync())
  };

  return <Link className="link-hover" to="/logout" onClick={onClick}>Logout</Link>;
}

export default LogoutLink;
