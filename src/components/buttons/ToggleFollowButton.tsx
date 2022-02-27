import React from "react";
import ButtonFilled from "./ButtonFilled";
import ButtonOutlined from "./ButtonOutlined";

const ToggleFollowButton = ({isFollowedByViewer, onClick}: {isFollowedByViewer: boolean, onClick: () => void}) => (
    (isFollowedByViewer ?
        <ButtonOutlined type="button" onClick={onClick} disabled={false} >
            <span>Unfollow</span>
        </ButtonOutlined>
        : <ButtonFilled type="button" onClick={onClick} disabled={false} >
            <span className="group-hover:text-gradient">Follow</span>
        </ButtonFilled>)
)

export default ToggleFollowButton