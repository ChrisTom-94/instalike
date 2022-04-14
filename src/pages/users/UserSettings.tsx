import UserForm from "forms/UserForm";
import React from "react";
import { useSelector } from "react-redux";
import { userProfileSelector } from "redux/user/selectors";

const UserSettings = () => {
  const user = useSelector(userProfileSelector);

  return (
    <section className="mb-20">
      <h2 className="subtitle mb-4">Edit Profile</h2>
      <UserForm
        userName={user.userName}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        biography={user.biography}
      />
    </section>
  );
};

export default UserSettings;
