import LoginForm from "forms/LoginForm";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isAuthSelector } from "redux/auth/selectors";
import { getProfileRequest } from "redux/user/thunks";

export default function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(isAuthSelector)

  useEffect(() => {
    if(!isAuth) return;
    dispatch(getProfileRequest());
    navigate("/feed");
  }, [isAuth, dispatch, navigate])

  return (
    <section className="px-7 py-2">
      <h1 className="title">Login</h1>
      <article className="mt-10">
        <h2 className="subtitle">
          Maybe it&apos;s <span className="text-paradise-pink">you ?</span> <span className="text-4xl">👋🏼</span>
          </h2>
      </article>

      <article>
        <h2 className="subtitle">
          Or you can <span className="text-paradise-pink">login here</span> <span className="text-4xl">👇🏼</span>
        </h2>
        <LoginForm />
      </article>
    </section>
  );
}
