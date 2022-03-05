import React from "react";

const Modal = ({
  children,
  onClick,
}: {
  children: JSX.Element;
  onClick: () => void;
}) => (
  <div className="fixed z-30 inset-0">
    <div className="absolute h-full w-full bg-gray-200 opacity-50 blur-sm" />
    <div className="relative z-20 flex flex-col max-w-2xl m-auto">
      <header className="p-3">
        <button
          onClick={onClick}
          type="button"
          className="w-fit inline-block ml-auto"
        >
          X
        </button>
      </header>
      <div className="m-auto">{children}</div>
    </div>
  </div>
);

export default Modal;
