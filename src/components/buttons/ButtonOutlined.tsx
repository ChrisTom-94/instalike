import React from "react";

const ButtonOutlined = ({
  children,
  type,
  onClick,
  disabled,
}: {
  children: JSX.Element;
  type: "button" | "submit" | "reset" | undefined;
  onClick: undefined | ((e: any) => void);
  disabled: boolean;
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    type={type === "submit" ? "submit" : "button"}
    className={`group button-outlined hover:button-filled hover:border-white ${
      disabled ? "opacity-5" : "opacity-100"
    }`}
  >
    {children}
  </button>
);

ButtonOutlined.defaultAttributes = {
  type: "button",
  onclick: undefined,
  disabled: false,
};

export default ButtonOutlined;
