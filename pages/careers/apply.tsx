import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";
import Checkbox from "@/@shared/ui-components/Input/Checkbox/Checkbox";
import FileAttachmentInput from "@/@shared/ui-components/Input/FileAttachmentInput";
import TextArea from "@/@shared/ui-components/Input/TextArea";
import TextField from "@/@shared/ui-components/Input/TextField";
import React, { FC, useState } from "react";

const JobApplication: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <AppHead title="Job Application" />
      <AppLayout>
        <div className="bg-blue-300 flex flex-col gap-5 py-10 max-w-[500px] p-8">
          <TextField
            label="First Name"
            placeholder="Enter your first name"
            error="Please provide a valid value"
            isRequired={true}
          />
          <TextArea
            isRequired={true}
            placeholder="Enter description"
            label="Description"
          />

          <Checkbox label="Do you want ice cream?" />

          <FileAttachmentInput
            handleSelectFile={(file) => {
              setFile(file);
            }}
            handleDeleteFile={() => {
              setFile(null);
            }}
            attachedFile={file}
            label="Resume/CV"
            isRequired
          />
        </div>
      </AppLayout>
    </>
  );
};

export default JobApplication;
