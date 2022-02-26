import { ApiCredentials } from "api/types";
import Input from "components/forms/Input";
import Password from "components/forms/Password";
import Submit from "components/forms/Submit";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authErrorSelector, authLoadingSelector } from "redux/auth/selectors";
import { loginRequest } from "redux/auth/thunks";

const emptyCredentials: ApiCredentials = {
    email: "",
    password: "",
  };

const LoginForm = () => {

    const errors = useSelector(authErrorSelector);
    const isLoading = useSelector(authLoadingSelector);
    const [credentials, setCredentials] = useState<ApiCredentials>(emptyCredentials);
    const dispatch = useDispatch();

    const change = useCallback((key: string, value: string) => {
      setCredentials((creds: ApiCredentials) => ({ ...creds, [key]: value })
    )},[]);

    const submit = useCallback(async (e: any) => {
        e.preventDefault();
        dispatch(loginRequest(credentials));
      }, [credentials, dispatch]);

    return (
        <form className="flex flex-col gap-4" onSubmit={submit}>
            {errors?.message && <p className="error before:content-['⛔']">{errors?.message}</p>}
            <Input
                error={errors?.email}
                isRequired
                type="email"
                name="email"
                value={credentials.email}
                onChange={change}
            />
            <Password value={credentials.password} error={errors?.password} onChange={change} />
            {/* <Input
                error={errors?.password}
                isRequired
                type="password"
                name="password"
                value={credentials.password}
                onChange={change}
            /> */}
            <Submit disabled={isLoading} text="Login" />
        </form>
    )
}

export default LoginForm;