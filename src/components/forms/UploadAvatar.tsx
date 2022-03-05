import UserAvatar from "components/user/UserAvatar";
import useUploadFile from "hooks/useUploadFile";
import React from "react";

const UploadAvatar = ({ error, avatar }: { error: string | undefined; avatar: string }) => {
  const [input, previewUrl] = useUploadFile(error);

  return (
    <>
      {previewUrl ? (
        <UserAvatar avatar={(previewUrl as string) ?? ""} className="" />
      ) : (
        <UserAvatar avatar={avatar} className="" />
      )}
      {input}
    </>
  );
};

export default UploadAvatar;
