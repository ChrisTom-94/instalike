import { ApiCredentials } from "api/types";
import InputForm from "components/forms/InputForm";
import SubmitForm from "components/forms/SubmitForm";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authErrorSelector } from "redux/auth/selectors";
import { loginRequest } from "redux/auth/thunks";
import { getProfileRequest } from "redux/user/thunks";

const authForm: ApiCredentials = {
  email: "",
  password: "",
};

export default function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errors = useSelector(authErrorSelector);

  const [credentials, setCredentials] = useState<ApiCredentials>(authForm);
  const change = useCallback((key: string, value: string) => {
    setCredentials((creds) => ({ ...creds, [key]: value })
  )},[]);

  const submit = useCallback(async (e: any) => {
    e.preventDefault();
    await dispatch(loginRequest(credentials));
    await dispatch(getProfileRequest());
    navigate("/feed");
  }, [credentials, dispatch, navigate]);

  return (
    <>
      <h1 className="capitalize text-4xl">Login</h1>
      {errors?.message && <p>{errors?.message}</p>}
      <form onSubmit={submit}>
        <InputForm
          error={errors?.email}
          isRequired
          type="email"
          name="email"
          value={credentials.email}
          onChange={change}
        />
        <InputForm
          error={errors?.password}
          isRequired
          type="password"
          name="password"
          value={credentials.password}
          onChange={change}
        />
        <SubmitForm />
      </form>
    </>
  );
}
