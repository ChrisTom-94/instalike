import { ApiCredentials } from "redux/api/types";
import Input from "components/forms/Input";
import Password from "components/forms/Password";
import Submit from "components/forms/Submit";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingUserSelector,
  loginErrorsSelector,
} from "redux/api/selectors";
import { loginAsync } from "redux/api/thunks";
import { useLocation } from "react-router-dom";

const LoginForm = ({ prefilledEmail }: { prefilledEmail: string }) => {
  const isLoading = useSelector(isLoadingUserSelector);
  const { email, password, message } = useSelector(loginErrorsSelector);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState<ApiCredentials>({
    email: prefilledEmail,
    password: "",
  });

  const redirectError = state as { message?: string };

  const change = useCallback(
    (key: string, target: EventTarget & HTMLInputElement) => {
      setCredentials((creds: ApiCredentials) => ({
        ...creds,
        [key]: target.value,
      }));
    },
    [setCredentials]
  );

  const submit = useCallback(
    async (e: any) => {
      e.preventDefault();
      dispatch(loginAsync(credentials));
    },
    [credentials, dispatch]
  );

  return (
    <form className="flex flex-col gap-4" onSubmit={submit}>
      {!redirectError && message && (
        <p className="error before:content-['⛔']">{message}</p>
      )}
      <Input
        error={!redirectError ? email : undefined}
        isRequired
        type="email"
        name="email"
        value={credentials.email}
        onChange={change}
        ref={undefined}
      />
      <Password
        value={credentials.password}
        error={!redirectError ? password : undefined}
        onChange={change}
      />
      <Submit disabled={isLoading} text="Login" />
    </form>
  );
};

export default LoginForm;
