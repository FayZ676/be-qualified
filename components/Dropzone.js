import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("File Received");
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...</p> : <p>Drop files</p>}
    </div>
  );
}
