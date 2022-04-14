import UserPreviewList from "components/user/UserPreviewList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followersSelector } from "redux/user/selectors";
import { getFollowersAsync } from "redux/user/thunks";

const UserFollowers = () => {
  const followers = useSelector(followersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFollowersAsync());
  }, [dispatch]);

  return <UserPreviewList users={followers} />;
};

export default UserFollowers;
