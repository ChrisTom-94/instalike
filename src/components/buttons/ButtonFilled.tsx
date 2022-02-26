import React from "react";

const ButtonFilled = ({
  children,
  type,
  onClick,
  disabled,
}: {
  children: JSX.Element;
  type: "button" | "submit" | "reset" | undefined;
  onClick: undefined | (() => void);
  disabled: boolean
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    type={type === "submit" ? "submit" : "button"}
    className={`group button-filled hover:button-outlined ${disabled ? 'opacity-50' : 'opacity-100'}`}
  >
    {disabled ? 'Pending...' : children}
  </button>
);

ButtonFilled.defaultAttributes = {
  type: "button",
  onClick: undefined,
  disabled: false
};

export default ButtonFilled;
