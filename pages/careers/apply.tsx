import JobApplicationContainer from "@/@modules/Careers/JobApplicationContainer";
import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";
import { NextPage } from "next";

const JobApplication: NextPage = () => {
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
