import BackLink from "components/routes/links/BackLink";
import LoginForm from "forms/LoginForm";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isAuthSelector } from "redux/auth/selectors";
import { getProfileRequest } from "redux/user/thunks";

const Auth = () => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) return;
    dispatch(getProfileRequest());
    navigate("/feed");
  }, [isAuth, dispatch, navigate]);

  return (
    <section className="px-7 py-2 flex flex-col gap-20 mt-12">
      <article>
        <BackLink onClick={null} />
        <h1 className="title mt-4">Login</h1>
      </article>
      <article className="mt-10">
        <h2 className="subtitle">
          Maybe it&apos;s <span className="text-paradise-pink">you ?</span>&nbsp;
          <span className="text-4xl">😎</span>
        </h2>
      </article>

      <article className="flex flex-col gap-6">
        <h2 className="subtitle">
          Or you can <span className="text-paradise-pink">login here</span>&nbsp;
          <span className="text-4xl inline-block animate-bounce">👇🏼</span>
        </h2>
        <LoginForm />
      </article>
    </section>
  );
}

export default Auth;
