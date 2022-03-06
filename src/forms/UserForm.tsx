import Input from "components/forms/Input";
import Submit from "components/forms/Submit";
import Textarea from "components/forms/Textarea";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingUserSelector,
  updateUserErrorsSelector,
} from "redux/api/selectors";
import { updateProfileAsync } from "redux/user/thunks";
import { UserRequiredFields } from "redux/user/types";

const UserForm = ({
  userName,
  firstName,
  lastName,
  biography,
  email,
}: {
  userName: string;
  firstName: string;
  lastName: string;
  biography: string;
  email: string;
}) => {
  const isLoading = useSelector(isLoadingUserSelector);
  const {
    emailError,
    biographyError,
    firstNameError,
    lastNameError,
    userNameError,
    message,
  } = useSelector(updateUserErrorsSelector);
  const [form, setForm] = useState<UserRequiredFields>({
    userName,
    firstName,
    lastName,
    email,
    biography,
  });

  const dispatch = useDispatch();

  const change = useCallback(
    (
      key: string,
      target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)
    ) => {
      setForm((state: UserRequiredFields) => ({
        ...state,
        [key]: target.value,
      }));
    },
    [setForm]
  );

  const submit = useCallback(
    async (e: any) => {
      e.preventDefault();
      dispatch(updateProfileAsync(form));
    },
    [form, dispatch]
  );

  return (
    <form className="flex flex-col gap-4" onSubmit={submit}>
      {message && <p className="error before:content-['⛔']">{message}</p>}
      <Input
        error={userNameError}
        isRequired
        type="text"
        name="userName"
        value={form.userName}
        onChange={change}
        ref={undefined}
      />
      <Input
        error={firstNameError}
        isRequired
        type="text"
        name="firstName"
        value={form.firstName}
        onChange={change}
        ref={undefined}
      />
      <Input
        error={lastNameError}
        isRequired
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={change}
        ref={undefined}
      />
      <Input
        error={emailError}
        isRequired
        type="email"
        name="email"
        value={form.email}
        onChange={change}
        ref={undefined}
      />
      <Textarea
        error={biographyError}
        name="biography"
        value={form.biography}
        onChange={change}
        isRequired={false}
      />
      <Submit disabled={isLoading} text="Update" />
    </form>
  );
};

export default UserForm;
