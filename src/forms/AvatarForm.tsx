import UploadAvatar from "components/forms/UploadAvatar";
import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateAvatarAsync } from "redux/user/thunks";

const AvatarForm = ({ avatar }: { avatar: string | null }) => {
  const form = useRef<HTMLFormElement>(null!);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      const formData = new FormData(form.current);
      dispatch(updateAvatarAsync(formData));
    },
    [dispatch]
  );

  return (
    <form onSubmit={onSubmit}>
      <UploadAvatar error={undefined} avatar={avatar ?? ""} />
    </form>
  );
};

export default AvatarForm;
