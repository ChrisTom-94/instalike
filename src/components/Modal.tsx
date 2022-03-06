import React from "react";
import ButtonOutlined from "./buttons/ButtonOutlined";

const Modal = ({
  children,
  onClick,
}: {
  children: JSX.Element;
  onClick: () => void;
}) => (
  <div className="fixed z-70 inset-0">
    <div className="absolute z-60 h-full w-full bg-gray-200 opacity-50 blur-sm" />
    <div className="absolute z-60 h-full w-full flex-center">
      <div className="relative flex flex-col max-w-2xl m-auto bg-white p-5 rounded-lg">
        <header>
          <ButtonOutlined onClick={onClick} type="button" disabled={false}>
            <span className="font-bold text-gradient group-hover:reset-text-gradient ">
              X
            </span>
          </ButtonOutlined>
        </header>
        <div className="m-auto w-full">{children}</div>
      </div>
    </div>
  </div>
);

export default Modal;
