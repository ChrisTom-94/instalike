import UserPreviewList from "components/user/UserPreviewList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followingSelector } from "redux/user/selectors";
import { getFollowingAsync } from "redux/user/thunks";

const UserFollowing = () => {
  const following = useSelector(followingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (following.length > 0) return;
    dispatch(getFollowingAsync());
  }, [following, dispatch]);

  return <UserPreviewList users={following} />;
};

export default UserFollowing;
