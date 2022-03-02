import { ApiCredentials } from "redux/api/types";
import Input from "components/forms/Input";
import Password from "components/forms/Password";
import Submit from "components/forms/Submit";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLoadingSelector } from "redux/api/selectors";
import { loginAsync } from "redux/api/thunks";

const emptyCredentials: ApiCredentials = {
    email: "",
    password: "",
  };

const LoginForm = () => {

    const isLoading = useSelector(authLoadingSelector);
    const [credentials, setCredentials] = useState<ApiCredentials>(emptyCredentials);
    const dispatch = useDispatch();

    const change = useCallback((key: string, value: string) => {
      setCredentials((creds: ApiCredentials) => ({ ...creds, [key]: value })
    )},[]);

    const submit = useCallback(async (e: any) => {
        e.preventDefault();
        try{
          dispatch(loginAsync(credentials));
        }catch(error: any){
          console.log(error.data.response)
        }
    
      }, [credentials, dispatch]);

    return (
        <form className="flex flex-col gap-4" onSubmit={submit}>
            {/* {errors?.message && <p className="error before:content-['⛔']">{errors?.message}</p>} */}
            <Input
                error={undefined}
                isRequired
                type="email"
                name="email"
                value={credentials.email}
                onChange={change}
            />
            <Password value={credentials.password} error={undefined} onChange={change} />
            <Submit disabled={isLoading} text="Login" />
        </form>
    )
}

export default LoginForm;