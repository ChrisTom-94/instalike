import useToggler from "hooks/useToggler";
import React from "react";
import { ReactComponent as Eye } from "assets/images/eye.svg";
import { ReactComponent as EyeSlash } from "assets/images/eye-slash.svg";
import Input from "./Input";

const Password = ({
  error = undefined,
  value,
  onChange,
}: {
  error?: string;
  value: string;
  onChange: (key: string, value: EventTarget & HTMLInputElement) => void;
}) => {
  const [isVisible, toggleIsVisible] = useToggler(false);

  const togglePasswordVisibilty = (e: any) => {
    e.preventDefault();
    toggleIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <Input
        error={error}
        isRequired
        type={isVisible ? "text" : "password"}
        name="password"
        value={value}
        onChange={onChange}
        ref={undefined}
      />
      <button
        className="absolute right-3 top-11 z-10"
        type="button"
        aria-label="toggle password"
        onClick={togglePasswordVisibilty}
      >
        {isVisible ? <EyeSlash /> : <Eye />}
      </button>
    </div>
  );
};

Password.defaultProps = {
  error: null,
};

export default Password;
