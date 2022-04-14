import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApiResourceID } from "redux/api/types";
import { followingSelector } from "redux/user/selectors";
import { unfollowAsync, followAsync } from "redux/user/thunks";
import ButtonFilled from "./ButtonFilled";
import ButtonOutlined from "./ButtonOutlined";

const ToggleFollowButton = ({ userId }: { userId: ApiResourceID }) => {
  const following = useSelector(followingSelector);
  const dispatch = useDispatch();

  const isFollowed =
    following.findIndex((f) => f.id === parseInt(userId as string, 10)) >= 0;

  console.log(isFollowed);

  const onClick = useCallback(() => {
    if (isFollowed) dispatch(unfollowAsync(userId));
    else dispatch(followAsync(userId));
  }, [isFollowed, dispatch, userId]);

  return isFollowed ? (
    <ButtonOutlined type="button" onClick={onClick} disabled={false}>
      <span className="text-gradient hover:reset-text-gradient hover:text-white">
        Unfollow
      </span>
    </ButtonOutlined>
  ) : (
    <ButtonFilled type="button" onClick={onClick} disabled={false}>
      <span className="group-hover:text-gradient">Follow</span>
    </ButtonFilled>
  );
};

export default ToggleFollowButton;
