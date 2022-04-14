import useUploadFile from "hooks/useUploadFile";
import React from "react";

const UploadFile = ({
  error,
  file,
}: {
  error: string | undefined;
  file: string | null;
}) => {
  const [input, , previewUrl] = useUploadFile(error, "resources[]");

  return (
    <div className="w-full m-auto">
      <div>
        {previewUrl ? (
          <img alt="" src={(previewUrl as string) ?? ""} />
        ) : (
          <img alt="" src={file ?? ""} />
        )}
      </div>
      {input}
    </div>
  );
};

export default UploadFile;
