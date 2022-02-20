import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {isAuthSelector} from "redux/auth/selectors";

const RequireAuth = ({ children }: {children: ReactElement}): ReactElement => {
    const isAuth = useSelector(isAuthSelector);
  
    return isAuth ? children : <Navigate to="/auth" replace />;
}

export default RequireAuth