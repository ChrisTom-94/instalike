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

const LoginForm = ({ prefilledEmail }: { prefilledEmail: string }) => {
  const isLoading = useSelector(isLoadingUserSelector);
  const { email, password, message } = useSelector(loginErrorsSelector);
  const [credentials, setCredentials] = useState<ApiCredentials>({
    email: prefilledEmail,
    password: "",
  });

  const dispatch = useDispatch();

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
      {message && <p className="error before:content-['⛔']">{message}</p>}
      <Input
        error={email}
        isRequired
        type="email"
        name="email"
        value={credentials.email}
        onChange={change}
        ref={undefined}
      />
      <Password
        value={credentials.password}
        error={password}
        onChange={change}
      />
      <Submit disabled={isLoading} text="Login" />
    </form>
  );
};

export default LoginForm;
