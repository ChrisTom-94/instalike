import React from "react";

const Input = ({
  type,
  name,
  value,
  onChange,
  isRequired = false,
  error = undefined
}: {
  type: string,
  name: string,
  value: string,
  onChange: (key: string, value: string) => void,
  isRequired: boolean,
  error: string | undefined
}) => (
    <div>
        <label className="flex flex-col gap-2" htmlFor={name}>
        <span className="capitalize font-bold text-acquamarine">{name}</span>
        <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={error !== undefined}
            required={isRequired}
            className="border-gradient rounded-md p-2 focus:outline-none focus:border-4"
            value={value}
            placeholder={`Your ${name} here...`}
            onChange={(e) => onChange(name, e.target.value)}
            id={name}
            name={name}
            type={type}
        />
        </label>
        {error && <p className="error before:content-['🚫'] mt-3">{error}</p>}
  </div>
);

export default Input;
