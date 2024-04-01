import JobApplicationContainer from "@/@modules/Careers/JobApplicationContainer";
import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";
import Checkbox from "@/@shared/ui-components/Input/Checkbox/Checkbox";
import DropDown from "@/@shared/ui-components/Input/DropDown";
import FileAttachmentInput from "@/@shared/ui-components/Input/FileAttachmentInput";
import TextArea from "@/@shared/ui-components/Input/TextArea";
import TextField from "@/@shared/ui-components/Input/TextField";
import React, { FC, useState } from "react";

const JobApplication: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const dropDownOptions = [
    { label: "Yes", value: "1" },
    { label: "No", value: "0" },
  ];
  return (
    <>
      <AppHead title="Job Application" />
      <AppLayout>
        <JobApplicationContainer />
      </AppLayout>
    </>
  );
};

export default JobApplication;
