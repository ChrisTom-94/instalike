import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { isAuthSelector } from "redux/api/selectors";
import { getPostsAsync } from "redux/posts/thunks";
import { userProfileIDSelector } from "redux/user/selectors";
import { getProfileAsync } from "redux/user/thunks";

const RequireAuth = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const isAuth = useSelector(isAuthSelector);
  const userID = useSelector(userProfileIDSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth || userID) return;
    const onAuthenticaded = async () => {
      const amount = 5;
      const cursor = "";
      await dispatch(getProfileAsync());
      await dispatch(getPostsAsync(amount, cursor));
      navigate("/feed");
    };
    onAuthenticaded();
  });

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
