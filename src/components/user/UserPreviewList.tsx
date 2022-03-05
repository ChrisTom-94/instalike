import ToggleFollowButton from "components/buttons/ToggleFollowButton";
import React from "react";
import UserPreview from "./UserPreview";

const UserPreviewList = ({
  users,
  button = undefined,
}: {
  users: Instalike.User[];
  button?: JSX.Element | undefined;
}) =>
  users.length ? (
    <div className="flex flex-col gap-2">
      {users.map((user: Instalike.User) => (
        <div className="flex items-center justify-between">
          <UserPreview
            key={user.userName}
            avatar={user.avatar}
            userName={user.userName}
          />
          {button ? { button } : <ToggleFollowButton userId={user.id} />}
        </div>
      ))}
    </div>
  ) : (
    <p>Waiting for cool people...</p>
  );

UserPreviewList.defaultProps = {
  button: undefined,
};

export default UserPreviewList;
