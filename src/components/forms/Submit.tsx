import ButtonFilled from "components/buttons/ButtonFilled";
import ButtonOutlined from "components/buttons/ButtonOutlined";
import React from "react";

const Submit = ({
  text,
  disabled = false,
  outlined,
}: {
  disabled?: boolean;
  text?: string;
  outlined?: boolean;
}) => (
  <div className="w-fit ml-auto">
    {outlined ? (
      <ButtonOutlined disabled={disabled} type="submit" onClick={undefined}>
        <span className="text-gradient">{text}</span>
      </ButtonOutlined>
    ) : (
      <ButtonFilled disabled={disabled} type="submit" onClick={undefined}>
        <span className="text-white group-hover:text-gradient">{text}</span>
      </ButtonFilled>
    )}
  </div>
);

Submit.defaultProps = {
  text: "Submit",
  outlined: false,
  disabled: false,
};

export default Submit;
