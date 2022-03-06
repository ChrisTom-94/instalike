import React, { useCallback, useRef, useState } from "react";
import Input from "../components/forms/Input";

const useUploadFile = (error: string | undefined = undefined) => {
  const [preview, setPreview] = useState<string>(null!);
  const [file, setFile] = useState<File>(null!);
  const currentError = useRef<undefined | string>(error);

  const onChange = useCallback(
    (field, target: EventTarget & HTMLInputElement) => {
      const tempFile = target?.files?.[0];
      if (!tempFile) {
        currentError.current = "No file selected";
        return;
      }
      const Mb = Math.round(tempFile.size / 1024 / 1024);
      console.log(Mb);
      if (Mb > 10) {
        currentError.current =
          "Your pic is too heavy, please select one less bigger !";
        return;
      }
      const previewURL = URL.createObjectURL(tempFile);
      setPreview(previewURL);
      setFile(file);
    },
    [file]
  );

  const input = (
    <Input
      ref={undefined}
      error={currentError.current}
      isRequired
      value={undefined}
      type="file"
      name="resource"
      onChange={onChange}
    />
  );

  return [input, file, preview, onChange];
};

export default useUploadFile;
