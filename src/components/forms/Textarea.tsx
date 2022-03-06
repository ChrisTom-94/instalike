import React from "react";

const Textarea = ({
  name,
  value = undefined,
  onChange,
  isRequired = false,
  error = undefined,
}: {
  name: string;
  value?: string | number | readonly string[] | undefined;
  onChange: (key: string, target: EventTarget & HTMLTextAreaElement) => void;
  isRequired: boolean;
  error: string | undefined;
}) => (
  <div>
    <label className="flex flex-col gap-2" htmlFor={name}>
      <span className="capitalize font-bold text-acquamarine">{name}</span>
      <textarea
        required={isRequired}
        className="border-gradient rounded-md p-2 focus:outline-none"
        value={value}
        placeholder={`Your ${name} here...`}
        onChange={(e) => onChange(name, e.target)}
        id={name}
        name={name}
      />
    </label>
    {error && <p className="error before:content-['🚫'] mt-3">{error}</p>}
  </div>
);

Textarea.defaultProps = {
  value: undefined,
};

export default Textarea;
