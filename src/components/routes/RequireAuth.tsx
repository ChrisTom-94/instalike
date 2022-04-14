import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { isAuthSelector } from "redux/api/selectors";
import { getPostsAsync } from "redux/posts/thunks";
import { userProfileIDSelector } from "redux/user/selectors";
import { getNotificationsAsync, getProfileAsync } from "redux/user/thunks";

const RequireAuth = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const isAuth = useSelector(isAuthSelector);
  const userID = useSelector(userProfileIDSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuth || userID) return;
    const onAuthenticaded = async () => {
      const amount = 5;
      const cursor = "";
      await dispatch(getProfileAsync());
      await dispatch(getNotificationsAsync());
      await dispatch(getPostsAsync(amount, cursor));
      navigate(location.pathname);
    };
    onAuthenticaded();
  });

  return isAuth ? (
    children
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ message: "You need to login again" }}
    />
  );
};

export default RequireAuth;
