import React from "react";

const InputFormField = ({
  type,
  name,
  value,
  onChange,
  isRequired = false
}: {
  type: string,
  name: string,
  value: string,
  onChange: (key: string, value: string) => void,
  isRequired: boolean
}) => (
    <div>
        <label className="flex flex-col gap-2" htmlFor={name}>
        <span className="capitalize">{name}</span>
        <input
            required={isRequired}
            className="border border-black"
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            id={name}
            name={name}
            type={type}
        />
        </label>
  </div>
);

export default InputFormField;
