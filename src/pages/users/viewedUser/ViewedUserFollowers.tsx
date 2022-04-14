import UserPreviewList from "components/user/UserPreviewList";
import React from "react";
import { useSelector } from "react-redux";
import { viewedUserSelector } from "redux/user/selectors";

const ViewedUserFollowers = () => {
  const { followers } = useSelector(viewedUserSelector);

  return <UserPreviewList users={followers} />;
};

export default ViewedUserFollowers;
