import UserAvatar from "components/user/UserAvatar";
import useUploadFile from "hooks/useUploadFile";
import React from "react";

const UploadAvatar = ({
  error,
  avatar,
}: {
  error: string | undefined;
  avatar: string | null;
}) => {
  const [input, , previewUrl] = useUploadFile(error);

  return (
    <div className="w-full max-w-3xl m-auto">
      <div>
        {previewUrl ? (
          <UserAvatar avatar={(previewUrl as string) ?? ""} className="" />
        ) : (
          <UserAvatar avatar={avatar} className="" />
        )}
      </div>
      {input}
    </div>
  );
};

export default UploadAvatar;
