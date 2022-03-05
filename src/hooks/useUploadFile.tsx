import React, { useCallback, useState } from "react";
import Input from "../components/forms/Input";

const useUploadFile = (error: string | undefined = undefined) => {
  const [preview, setPreview] = useState<string>(null!);

  const onChange = useCallback((field, target) => {
    const file = target.files[0];
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);

  const input = (
    <Input
      ref={undefined}
      error={error}
      isRequired
      value=""
      type="file"
      name="resource"
      onChange={onChange}
    />
  );

  return [input, preview, onChange];
};

export default useUploadFile;
