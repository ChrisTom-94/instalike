import { ApiCredentials } from "api/types";
import InputFormField from "components/forms/InputFormField";
import SubmitFormField from "components/forms/SubmitFormField";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "redux/auth/thunks";

const authForm: ApiCredentials = {
  email: "",
  password: "",
};

export default function Auth() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState<ApiCredentials>(authForm)
  const change = useCallback((key: string, value: string) => setCredentials(creds => ({...creds, [key]: value})), [])
  const submit = (e: any) => {
    e.preventDefault()
    dispatch(login(credentials))
    navigate("/feed")
  }

  return (
    <>
      <h1 className="capitalize text-4xl">Login</h1>
      <Link to="/">Home</Link>
      <form onSubmit={submit}>
        <InputFormField isRequired type="email" name="email" value={credentials.email} onChange={change} />
        <InputFormField isRequired type="password" name="password" value={credentials.password} onChange={change} />
        <SubmitFormField />
      </form>
    </>
  );
}
