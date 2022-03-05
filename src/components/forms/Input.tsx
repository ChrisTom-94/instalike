import React from "react";

const Input = ({
  type,
  name,
  value,
  onChange,
  ref = undefined,
  isRequired = false,
  error = undefined,
}: {
  type: string;
  name: string;
  value: string;
  ref: React.MutableRefObject<HTMLInputElement> | undefined;
  onChange: (key: string, target: EventTarget & HTMLInputElement) => void;
  isRequired: boolean;
  error: string | undefined;
}) => (
  <div>
    <label className="flex flex-col gap-2" htmlFor={name}>
      <span className="capitalize font-bold text-acquamarine">{name}</span>
      <input
        required={isRequired}
        className="border-gradient rounded-md p-2 focus:outline-none"
        value={value}
        placeholder={`Your ${name} here...`}
        onChange={(e) => onChange(name, e.target)}
        id={name}
        name={name}
        type={type}
        ref={ref}
      />
    </label>
    {error && <p className="error before:content-['🚫'] mt-3">{error}</p>}
  </div>
);

export default Input;
