import ButtonOutlined from "components/buttons/ButtonOutlined";
import Submit from "components/forms/Submit";
import UploadAvatar from "components/forms/UploadAvatar";
import React, { FormEvent, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingUserSelector } from "redux/api/selectors";
import { deleteAvatarAsync, updateAvatarAsync } from "redux/user/thunks";

const AvatarForm = ({ avatar }: { avatar: string | null }) => {
  const form = useRef<HTMLFormElement>(null!);
  const isLoading = useSelector(isLoadingUserSelector);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(form.current);
      dispatch(updateAvatarAsync(formData));
    },
    [dispatch]
  );

  const onClick = useCallback(
    (e: Event) => {
      e.preventDefault();
      dispatch(deleteAvatarAsync());
    },
    [dispatch]
  );

  return (
    <form ref={form} onSubmit={onSubmit} className="flex flex-col gap-2 m-auto">
      <UploadAvatar error={undefined} avatar={avatar} />
      <div className="flex items-center gap-1">
        <Submit text="Update" disabled={isLoading} outlined={false} />
        <ButtonOutlined type="button" disabled={isLoading} onClick={onClick}>
          <span className="text-gradient group-hover:reset-text-gradient group-hover:text-white">
            Delete avatar
          </span>
        </ButtonOutlined>
      </div>
    </form>
  );
};

export default AvatarForm;
