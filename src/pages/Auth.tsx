import ButtonFilled from "components/buttons/ButtonFilled";
import BackLink from "components/routes/links/BackLink";
import UserPreview from "components/user/UserPreview";
import LoginForm from "forms/LoginForm";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isAuthSelector } from "redux/api/selectors";
import { getPostsAsync } from "redux/posts/thunks";
import { getProfileAsync } from "redux/user/thunks";
import { UserPreviewType } from "redux/user/types";
import { getLocalStoregeUserConnected } from "utils/helpers";

const Auth = () => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useMemo<UserPreviewType>(
    () => getLocalStoregeUserConnected(),
    []
  );
  const [selectedUser, setSelectedUser] = useState<UserPreviewType | null>(
    null
  );

  const fillLoginForm = useCallback(() => {
    setSelectedUser(user);
  }, [setSelectedUser, user]);

  useEffect(() => {
    if (!isAuth) return;
    const onAuthenticaded = async () => {
      const amount = 5;
      const cursor = "";
      await dispatch(getProfileAsync());
      await dispatch(getPostsAsync(amount, cursor));
      navigate("/feed");
    };
    onAuthenticaded();
  }, [isAuth, dispatch, navigate]);

  return (
    <section className="px-7 py-2 flex flex-col gap-20 mt-12">
      <article>
        <BackLink onClick={null} />
        <h1 className="title mt-4">Login</h1>
      </article>
      {user && (
        <article className="mt-10">
          <h2 className="subtitle">
            Maybe it&apos;s <span className="text-paradise-pink">you ?</span>
            &nbsp;
            <span className="text-4xl">😎</span>
          </h2>
          <div className="py-4 flex items-center justify-between w-full">
            <UserPreview userName={user.userName} avatar={user.avatar} />
            <ButtonFilled
              disabled={false}
              type="button"
              onClick={fillLoginForm}
            >
              <span>Fill</span>
            </ButtonFilled>
          </div>
        </article>
      )}

      <article className="flex flex-col gap-6">
        <h2 className="subtitle">
          You can <span className="text-paradise-pink">login here</span>
          &nbsp;
          <span className="text-4xl inline-block animate-bounce">👇🏼</span>
        </h2>
        <LoginForm prefilledEmail={selectedUser?.email ?? ""} />
      </article>
    </section>
  );
};

export default Auth;
