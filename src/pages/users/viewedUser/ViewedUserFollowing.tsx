import UserPreviewList from "components/user/UserPreviewList";
import React from "react";
import { useSelector } from "react-redux";
import { viewedUserSelector } from "redux/user/selectors";

const ViewedUserFollowing = () => {
  const { following } = useSelector(viewedUserSelector);

  return <UserPreviewList users={following} />;
};

export default ViewedUserFollowing;
