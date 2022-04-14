import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "assets/images/arrow.svg";

const BackLink = ({ onClick }: { onClick: null | (() => void) }) => {
  const navigate = useNavigate();

  const back = () => (onClick ? onClick() : navigate(-1));

  return (
    <button type="button" aria-label="back" onClick={back}>
      <BackArrow />
    </button>
  );
};

export default BackLink;
